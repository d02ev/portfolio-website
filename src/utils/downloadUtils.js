/**
 * Downloads a file from a given URL using browser's download functionality
 * @param {string} url - The URL of the file to download
 * @param {string} filename - The desired filename for the downloaded file
 * @returns {Promise<boolean>} - Returns true if download was initiated successfully
 */
export const downloadFile = async (url, filename = 'resume.pdf') => {
  try {
    // Validate URL
    if (!url || typeof url !== 'string') {
      throw new Error('Invalid URL provided');
    }

    // Check if URL is accessible before attempting download
    try {
      const response = await fetch(url, { method: 'HEAD' });
      if (!response.ok) {
        throw new Error(`File not accessible (HTTP ${response.status})`);
      }
    } catch (fetchError) {
      console.warn('Could not verify file accessibility:', fetchError);
      // Continue with download attempt even if HEAD request fails
    }

    // Method 1: Try direct download with anchor element
    try {
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      
      // Add to DOM temporarily
      document.body.appendChild(link);
      
      // Trigger download
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      
      // Wait a moment to see if download was blocked
      await new Promise(resolve => setTimeout(resolve, 100));
      
      return true;
    } catch (downloadError) {
      console.warn('Direct download failed:', downloadError);
      throw downloadError;
    }
  } catch (error) {
    console.error('Download failed:', error);
    
    // Method 2: Fallback - try to open in new tab
    try {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      
      // Check if popup was blocked
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        throw new Error('Popup blocked by browser');
      }
      
      return true;
    } catch (fallbackError) {
      console.error('Fallback method also failed:', fallbackError);
      
      // Method 3: Last resort - try iframe download
      try {
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = url;
        document.body.appendChild(iframe);
        
        // Clean up after a delay
        setTimeout(() => {
          if (document.body.contains(iframe)) {
            document.body.removeChild(iframe);
          }
        }, 5000);
        
        return true;
      } catch (iframeError) {
        console.error('All download methods failed:', iframeError);
        return false;
      }
    }
  }
};

/**
 * Generates a proper filename for the resume download
 * @param {string} baseFilename - Base filename (optional)
 * @returns {string} - Formatted filename with timestamp
 */
export const generateResumeFilename = (baseFilename = 'resume') => {
  const timestamp = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  return `${baseFilename}_${timestamp}.pdf`;
};

/**
 * Detects browser capabilities and potential download issues
 * @returns {Object} - Object containing browser capability information
 */
export const detectBrowserCapabilities = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const isIOS = /ipad|iphone|ipod/.test(userAgent);
  const isSafari = /safari/.test(userAgent) && !/chrome/.test(userAgent);
  const isChrome = /chrome/.test(userAgent);
  const isFirefox = /firefox/.test(userAgent);
  const isEdge = /edge/.test(userAgent);
  const isMobile = /mobile|android|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
  
  return {
    isIOS,
    isSafari,
    isChrome,
    isFirefox,
    isEdge,
    isMobile,
    supportsDownload: !isIOS, // iOS has limited download support
    mayBlockPopups: true, // Most browsers block popups by default
    recommendedMethod: isIOS ? 'newTab' : 'download'
  };
};

/**
 * Gets browser-specific error messages and suggestions
 * @param {string} errorType - Type of error encountered
 * @returns {string} - Browser-specific error message
 */
export const getBrowserSpecificErrorMessage = (errorType) => {
  const capabilities = detectBrowserCapabilities();
  
  switch (errorType) {
    case 'download_blocked':
      if (capabilities.isIOS) {
        return 'iOS devices have limited download support. The file will open in a new tab where you can save it.';
      }
      return 'Download was blocked by your browser. Please check your browser settings and allow downloads from this site.';
    
    case 'popup_blocked':
      return 'Popup was blocked by your browser. Please allow popups for this site and try again.';
    
    case 'network_error':
      if (!navigator.onLine) {
        return 'You appear to be offline. Please check your internet connection and try again.';
      }
      return 'Network error occurred. Please check your internet connection and try again.';
    
    case 'file_not_accessible':
      return 'The resume file is temporarily not accessible. Please try again in a few moments.';
    
    default:
      return 'An unexpected error occurred. Please try again.';
  }
};

/**
 * Validates if a URL is accessible and points to a PDF
 * @param {string} url - URL to validate
 * @returns {Promise<boolean>} - Returns true if URL is valid and accessible
 */
export const validatePdfUrl = async (url) => {
  try {
    // Basic URL validation
    if (!url || typeof url !== 'string') {
      return false;
    }
    
    // Check if URL is properly formatted
    try {
      new URL(url);
    } catch (urlError) {
      console.error('Invalid URL format:', urlError);
      return false;
    }
    
    // Try to fetch the resource with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    try {
      const response = await fetch(url, { 
        method: 'HEAD',
        signal: controller.signal,
        headers: {
          'Accept': 'application/pdf,*/*'
        }
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        console.error(`PDF validation failed with status: ${response.status}`);
        return false;
      }
      
      const contentType = response.headers.get('content-type');
      const contentLength = response.headers.get('content-length');
      
      // Check content type
      const isPdfContentType = contentType?.includes('application/pdf') || 
                              contentType?.includes('application/octet-stream');
      
      // Check file extension
      const isPdfExtension = url.toLowerCase().includes('.pdf');
      
      // Check if file has reasonable size (not empty, not too large)
      const hasReasonableSize = !contentLength || 
                               (parseInt(contentLength) > 0 && parseInt(contentLength) < 50 * 1024 * 1024); // Max 50MB
      
      return (isPdfContentType || isPdfExtension) && hasReasonableSize;
    } catch (fetchError) {
      clearTimeout(timeoutId);
      
      if (fetchError.name === 'AbortError') {
        console.error('PDF validation timeout');
        return false;
      }
      
      console.error('PDF validation network error:', fetchError);
      
      // If HEAD request fails, try a basic URL format check as fallback
      return url.toLowerCase().includes('.pdf');
    }
  } catch (error) {
    console.error('URL validation failed:', error);
    return false;
  }
};