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

    if (error.response) {
      const status = error.response.status;
      switch (status) {
        case 400: return 'Invalid request. Please try again.';
        case 401: return 'Access denied. Please refresh the page.';
        case 403: return 'Permission denied. Please refresh the page.';
        case 404: return 'Resume not found. Please contact support.';
        case 408: return 'Request timeout. Please try again.';
        case 429: return 'Too many requests. Please wait and try again.';
        case 500: return 'Server error. Please try again later.';
        case 502:
        case 503: return 'Service unavailable. Please try again later.';
        case 504: return 'Request timeout. Please try again.';
        default: return `Error (${status}). Please try again.`;
      }
    }

    if (error.code === 'NETWORK_ERROR' || error.code === 'ERR_NETWORK' || !navigator.onLine) {
      return getBrowserSpecificErrorMessage('network_error');
    }

    if (error.code === 'ECONNABORTED' || error.message?.includes('timeout')) {
      return 'Connection timeout. Please check your connection.';
    }

    if (error.message) {
      if (error.message.includes('not accessible')) return getBrowserSpecificErrorMessage('file_not_accessible');
      if (error.message.includes('browser allows downloads') || error.message.includes('Download failed')) {
        return getBrowserSpecificErrorMessage('download_blocked');
      }
      if (error.message.includes('Popup blocked')) return getBrowserSpecificErrorMessage('popup_blocked');
      return error.message;
    }

    return 'An unexpected error occurred. Please try again.';
  };

  const handleDownload = async () => {
    setDownloadState({ loading: true, error: null, success: false });

    try {
      const response = await getLatestResume();

      if (!response.data?.data?.pdfUrl) {
        throw new Error('Invalid response format.');
      }

      const pdfUrl = response.data.data.pdfUrl;
      const isValidUrl = await validatePdfUrl(pdfUrl);

      if (!isValidUrl) {
        throw new Error('Resume file is not accessible.');
      }

      const filename = generateResumeFilename('resume');
      const downloadSuccess = await downloadFile(pdfUrl, filename);

      if (downloadSuccess) {
        setDownloadState({ loading: false, error: null, success: true });
        setTimeout(() => setDownloadState(prev => ({ ...prev, success: false })), 3000);
      } else {
        throw new Error('Download failed. Please try again.');
      }
    } catch (error) {
      console.error('Resume download error:', error);
      setDownloadState({ loading: false, error: getErrorMessage(error), success: false });
    }
  };

  const handleRetry = () => {
    setDownloadState({ loading: false, error: null, success: false });
    setTimeout(() => handleDownload(), 100);
  };

  const handleAlternativeDownload = async () => {
    const browserCapabilities = detectBrowserCapabilities();
    setDownloadState({ loading: true, error: null, success: false });

    try {
      const response = await getLatestResume();

      if (!response.data?.data?.pdfUrl) {
        throw new Error('Invalid response format.');
      }

      const pdfUrl = response.data.data.pdfUrl;

      if (browserCapabilities.isIOS || browserCapabilities.recommendedMethod === 'newTab') {
        const newWindow = window.open(pdfUrl, '_blank', 'noopener,noreferrer');

        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          throw new Error('Popup blocked by browser');
        }

        setDownloadState({ loading: false, error: null, success: true });
        setTimeout(() => setDownloadState(prev => ({ ...prev, success: false })), 3000);
      } else {
        await handleDownload();
      }
    } catch (error) {
      console.error('Alternative download error:', error);
      setDownloadState({ loading: false, error: getErrorMessage(error), success: false });
    }
  };

  return (
    <section className={`py-24 bg-slate-950 ${className}`} id="resume">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 section-title">
            Resume
          </h2>
          <div className="w-12 h-0.5 bg-accent"></div>
        </div>

        <div className="animate-fade-in max-w-md">
          <p className="text-slate-400 mb-6">
            Download my resume to learn more about my experience and skills.
          </p>

          {downloadState.error && (
            <div className="mb-6 p-4 bg-red-950/50 border border-red-900/50 rounded-lg" role="alert">
              <p className="text-red-400 text-sm mb-3">{downloadState.error}</p>
              <div className="flex gap-2">
                <button
                  onClick={handleRetry}
                  className="px-3 py-1.5 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors"
                >
                  Try Again
                </button>
                {(downloadState.error.includes('browser') || downloadState.error.includes('blocked')) && (
                  <button
                    onClick={handleAlternativeDownload}
                    disabled={downloadState.loading}
                    className="px-3 py-1.5 bg-slate-700 text-white rounded text-sm hover:bg-slate-600 transition-colors disabled:opacity-50"
                  >
                    Open in New Tab
                  </button>
                )}
              </div>
            </div>
          )}

          {downloadState.success && (
            <div className="mb-6 p-4 bg-green-950/50 border border-green-900/50 rounded-lg">
              <p className="text-green-400 text-sm">Resume downloaded successfully!</p>
            </div>
          )}

          <button
            onClick={handleDownload}
            disabled={downloadState.loading}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              downloadState.loading
                ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                : 'bg-accent text-slate-900 hover:opacity-90'
            }`}
          >
            {downloadState.loading ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin h-4 w-4 border-2 border-slate-400 border-t-transparent rounded-full"></span>
                Downloading...
              </span>
            ) : (
              buttonText
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResumeDownloadSection;