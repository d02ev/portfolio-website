import { useState } from 'react';
import { getLatestResume } from '../../helpers/api.js';
import { downloadFile, generateResumeFilename, validatePdfUrl, detectBrowserCapabilities, getBrowserSpecificErrorMessage } from '../../utils/downloadUtils.js';

const ResumeDownloadSection = ({ className = '', buttonText = 'Download Resume' }) => {
  const [downloadState, setDownloadState] = useState({
    loading: false,
    error: null,
    success: false
  });

  const getErrorMessage = (error) => {
    const browserCapabilities = detectBrowserCapabilities();
    
    // Handle API response errors
    if (error.response) {
      const status = error.response.status;
      switch (status) {
        case 400:
          return 'Invalid request. Please try again.';
        case 401:
          return 'Access denied. Please refresh the page and try again.';
        case 403:
          return 'You do not have permission to access this resource. Please refresh the page.';
        case 404:
          return 'Resume not found. Please contact support if this issue persists.';
        case 408:
          return 'Request timeout. Please check your connection and try again.';
        case 429:
          return 'Too many requests. Please wait a moment and try again.';
        case 500:
          return 'Server error. Please try again in a few minutes.';
        case 502:
          return 'Service temporarily unavailable. Please try again later.';
        case 503:
          return 'Service maintenance in progress. Please try again later.';
        case 504:
          return 'Request timeout. Please try again.';
        default:
          return `Server error (${status}). Please try again later.`;
      }
    }
    
    // Handle network errors with browser-specific messages
    if (error.code === 'NETWORK_ERROR' || error.code === 'ERR_NETWORK') {
      return getBrowserSpecificErrorMessage('network_error');
    }
    
    // Handle connection timeout
    if (error.code === 'ECONNABORTED' || error.message?.includes('timeout')) {
      return 'Connection timeout. Please check your internet connection and try again.';
    }
    
    // Handle offline status
    if (!navigator.onLine) {
      return getBrowserSpecificErrorMessage('network_error');
    }
    
    // Handle specific error messages with browser context
    if (error.message) {
      // PDF validation errors
      if (error.message.includes('not accessible')) {
        return getBrowserSpecificErrorMessage('file_not_accessible');
      }
      
      // Download blocking errors
      if (error.message.includes('browser allows downloads') || error.message.includes('Download failed')) {
        return getBrowserSpecificErrorMessage('download_blocked');
      }
      
      // Popup blocking errors
      if (error.message.includes('Popup blocked')) {
        return getBrowserSpecificErrorMessage('popup_blocked');
      }
      
      // Invalid response format
      if (error.message.includes('Invalid response format')) {
        return 'Received invalid data from server. Please try again or contact support.';
      }
      
      // File access errors
      if (error.message.includes('File not accessible')) {
        return getBrowserSpecificErrorMessage('file_not_accessible');
      }
      
      return error.message;
    }
    
    return 'An unexpected error occurred. Please try again.';
  };

  const handleDownload = async () => {
    setDownloadState({
      loading: true,
      error: null,
      success: false
    });

    try {
      // Fetch the latest resume from API
      const response = await getLatestResume();
      
      // Validate API response structure
      if (!response.data || !response.data.data || !response.data.data.pdfUrl) {
        throw new Error('Invalid response format. Please try again.');
      }

      const pdfUrl = response.data.data.pdfUrl;
      
      // Validate PDF URL accessibility
      const isValidUrl = await validatePdfUrl(pdfUrl);
      if (!isValidUrl) {
        throw new Error('Resume file is not accessible. Please try again later.');
      }

      // Generate appropriate filename
      const filename = generateResumeFilename('resume');
      
      // Attempt to download the file
      const downloadSuccess = await downloadFile(pdfUrl, filename);
      
      if (downloadSuccess) {
        setDownloadState({
          loading: false,
          error: null,
          success: true
        });

        // Auto-dismiss success message after 3 seconds
        setTimeout(() => {
          setDownloadState(prev => ({
            ...prev,
            success: false
          }));
        }, 3000);
      } else {
        throw new Error('Download failed. Please try again or check if your browser allows downloads.');
      }
    } catch (error) {
      console.error('Resume download error:', error);
      
      const errorMessage = getErrorMessage(error);

      setDownloadState({
        loading: false,
        error: errorMessage,
        success: false
      });
    }
  };

  const handleRetry = () => {
    // Clear error state and retry download
    setDownloadState({
      loading: false,
      error: null,
      success: false
    });
    
    // Small delay to provide visual feedback
    setTimeout(() => {
      handleDownload();
    }, 100);
  };

  const handleAlternativeDownload = async () => {
    const browserCapabilities = detectBrowserCapabilities();
    
    setDownloadState({
      loading: true,
      error: null,
      success: false
    });

    try {
      // Fetch the latest resume from API
      const response = await getLatestResume();
      
      if (!response.data || !response.data.data || !response.data.data.pdfUrl) {
        throw new Error('Invalid response format. Please try again.');
      }

      const pdfUrl = response.data.data.pdfUrl;
      
      // For iOS or when download is blocked, always open in new tab
      if (browserCapabilities.isIOS || browserCapabilities.recommendedMethod === 'newTab') {
        const newWindow = window.open(pdfUrl, '_blank', 'noopener,noreferrer');
        
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          throw new Error('Popup blocked by browser');
        }
        
        setDownloadState({
          loading: false,
          error: null,
          success: true
        });

        // Auto-dismiss success message after 3 seconds
        setTimeout(() => {
          setDownloadState(prev => ({
            ...prev,
            success: false
          }));
        }, 3000);
      } else {
        // Try regular download
        await handleDownload();
      }
    } catch (error) {
      console.error('Alternative download error:', error);
      
      const errorMessage = getErrorMessage(error);
      setDownloadState({
        loading: false,
        error: errorMessage,
        success: false
      });
    }
  };

  return (
    <section className={`py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 ${className}`} id="resume">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex justify-center">
          <div className="glass rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-700/30 max-w-md w-full mx-4 hover-lift transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="text-5xl sm:text-6xl mb-4" aria-hidden="true">📄</div>
              <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4">Get My Resume</h3>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-6">
                Download my latest resume to learn more about my experience and skills.
              </p>

              {/* Error Display */}
              {downloadState.error && (
                <div 
                  id="download-error"
                  className="mb-6 p-4 bg-red-900/20 text-red-300 rounded-lg border border-red-500/30 backdrop-blur-sm animate-fade-in"
                  role="alert"
                  aria-live="polite"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-red-400 text-xl flex-shrink-0" aria-hidden="true">⚠️</div>
                    <div className="flex-1 min-w-0">
                      <p className="mb-3 text-sm leading-relaxed break-words">{downloadState.error}</p>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <button
                          onClick={handleRetry}
                          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 text-sm font-medium hover:shadow-lg active:scale-95"
                          aria-label="Retry downloading resume"
                        >
                          <span aria-hidden="true">🔄</span> Try Again
                        </button>
                        {(downloadState.error.includes('browser') || downloadState.error.includes('blocked') || downloadState.error.includes('iOS')) && (
                          <button
                            onClick={handleAlternativeDownload}
                            disabled={downloadState.loading}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg active:scale-95"
                            aria-label="Open resume in new tab as alternative"
                          >
                            <span aria-hidden="true">📂</span> Open in New Tab
                          </button>
                        )}
                      </div>
                      {downloadState.error.includes('internet') && (
                        <p className="mt-2 text-xs text-red-400">
                          <span aria-hidden="true">💡</span> Tip: Check your internet connection and try again
                        </p>
                      )}
                      {downloadState.error.includes('contact support') && (
                        <p className="mt-2 text-xs text-red-400">
                          <span aria-hidden="true">💡</span> If this problem persists, please contact the site administrator
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Success Message */}
              {downloadState.success && (
                <div className="mb-6 p-4 bg-green-900/20 text-green-300 rounded-lg border border-green-500/30 backdrop-blur-sm animate-fade-in">
                  <div className="flex items-center space-x-3">
                    <div className="text-green-400 text-xl">✅</div>
                    <span className="text-sm font-medium">Resume downloaded successfully!</span>
                  </div>
                </div>
              )}

              {/* Download Button */}
              <button
                onClick={handleDownload}
                disabled={downloadState.loading}
                className={`
                  w-full px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform
                  focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-slate-900
                  ${downloadState.loading 
                    ? 'bg-slate-600 text-slate-300 cursor-not-allowed opacity-75' 
                    : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 active:scale-95'
                  }
                `}
                aria-label={downloadState.loading ? 'Downloading resume...' : 'Download resume PDF'}
                aria-describedby={downloadState.error ? 'download-error' : undefined}
              >
                {downloadState.loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" aria-hidden="true"></div>
                    <span>Downloading...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <span aria-hidden="true">📥</span>
                    <span>{buttonText}</span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeDownloadSection;