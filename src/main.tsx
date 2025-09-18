import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'

// Determine if we're in production/deployment environment
const isProduction = import.meta.env.PROD
const isDevelopment = import.meta.env.DEV

// Use HashRouter for better deployment compatibility
const Router = isProduction ? HashRouter : BrowserRouter

// Enhanced error handler for uncaught exceptions with connection error handling
window.addEventListener('error', (event) => {
  const errorInfo = {
    message: event.error?.message,
    stack: event.error?.stack,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    timestamp: new Date().toISOString()
  }
  
  console.error('Global error caught:', errorInfo);
  
  // Check if it's a connection-related error
  if (event.error?.message?.includes('connection refused') || 
      event.error?.message?.includes('fetch') ||
      event.error?.message?.includes('network')) {
    console.warn('Connection error detected, enabling offline mode');
    
    // Store connection error info for debugging
    localStorage.setItem('lastConnectionError', JSON.stringify({
      ...errorInfo,
      type: 'connection_error'
    }));
  }
  
  // Prevent error propagation in development for better debugging
  if (isDevelopment) {
    event.preventDefault();
  }
});

// Enhanced promise rejection handler with connection error detection
window.addEventListener('unhandledrejection', (event) => {
  const rejectionInfo = {
    reason: event.reason,
    promise: event.promise,
    timestamp: new Date().toISOString()
  }
  
  console.error('Unhandled promise rejection:', rejectionInfo);
  
  // Check if it's a connection-related rejection
  const reasonString = String(event.reason);
  if (reasonString.includes('connection refused') || 
      reasonString.includes('fetch') ||
      reasonString.includes('network') ||
      reasonString.includes('ECONNREFUSED')) {
    console.warn('Connection-related promise rejection detected');
    
    // Store connection error for offline handling
    localStorage.setItem('lastConnectionError', JSON.stringify({
      ...rejectionInfo,
      type: 'connection_rejection'
    }));
    
    // Prevent default handling to avoid console spam
    event.preventDefault();
  }
  
  // Prevent default handling in development
  if (isDevelopment) {
    event.preventDefault();
  }
});

// Network status monitoring
const monitorNetworkStatus = () => {
  const updateNetworkStatus = () => {
    const status = {
      online: navigator.onLine,
      timestamp: new Date().toISOString(),
      connection: (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
    }
    
    localStorage.setItem('networkStatus', JSON.stringify(status));
    
    if (!status.online) {
      console.warn('Network offline detected');
    }
  }
  
  // Initial check
  updateNetworkStatus();
  
  // Listen for network changes
  window.addEventListener('online', () => {
    console.log('Network connection restored');
    updateNetworkStatus();
  });
  
  window.addEventListener('offline', () => {
    console.warn('Network connection lost');
    updateNetworkStatus();
  });
}

// Performance monitoring for deployment issues with connection tracking
if (isProduction) {
  // Monitor page load performance
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const performanceInfo = {
      loadTime: perfData.loadEventEnd - perfData.loadEventStart,
      domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
      totalTime: perfData.loadEventEnd - perfData.fetchStart,
      networkStatus: navigator.onLine ? 'online' : 'offline'
    }
    
    console.log('Page load performance:', performanceInfo);
    
    // Store performance data for debugging connection issues
    localStorage.setItem('lastPerformanceData', JSON.stringify(performanceInfo));
  });
}

// Initialize network monitoring
monitorNetworkStatus();

// Ensure DOM is fully loaded before attempting to render
const initializeApp = () => {
  const rootElement = document.getElementById('root')

  if (!rootElement) {
    console.error("Root element with id 'root' not found in the document. Cannot mount React application.");
    
    // Create root element if it doesn't exist (deployment fallback)
    const newRoot = document.createElement('div');
    newRoot.id = 'root';
    newRoot.style.width = '100%';
    newRoot.style.height = '100vh';
    document.body.appendChild(newRoot);
    
    // Retry initialization after DOM manipulation
    setTimeout(initializeApp, 100);
    return;
  }

  try {
    const root = ReactDOM.createRoot(rootElement);
    
    // Determine basename for routing based on environment
    const basename = isProduction ? (window.location.pathname.includes('/portfolio') ? '/portfolio' : '/') : '/';
    
    root.render(
      <React.StrictMode>
        <Router basename={basename}>
          <App />
        </Router>
      </React.StrictMode>
    );
    
    console.log('React application mounted successfully', {
      environment: isProduction ? 'production' : 'development',
      basename,
      networkStatus: navigator.onLine ? 'online' : 'offline',
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error("Critical error rendering React application:", error);
    
    // Check if error is connection-related
    const isConnectionError = error instanceof Error && (
      error.message.includes('connection') ||
      error.message.includes('network') ||
      error.message.includes('fetch')
    );
    
    // Enhanced fallback rendering with connection error information
    rootElement.innerHTML = `
      <div style="
        display: flex; 
        justify-content: center; 
        align-items: center; 
        height: 100vh; 
        flex-direction: column; 
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        text-align: center;
        padding: 20px;
        margin: 0;
      ">
        <div style="
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          max-width: 500px;
          width: 100%;
        ">
          <h1 style="margin: 0 0 16px 0; font-size: 2rem; font-weight: 600;">
            ${isConnectionError ? 'Connection Error' : 'Portfolio Loading Error'}
          </h1>
          <p style="margin: 0 0 24px 0; opacity: 0.9; line-height: 1.5;">
            ${isConnectionError 
              ? 'Unable to establish connection to the server. The portfolio is running in offline mode.' 
              : 'The application failed to load properly. This might be a temporary issue or a deployment configuration problem.'
            }
          </p>
          <div style="margin-bottom: 20px; padding: 12px; background: rgba(255, 255, 255, 0.1); border-radius: 8px; font-size: 14px; text-align: left;">
            <strong>Error Details:</strong><br>
            ${error instanceof Error ? error.message : 'Unknown error occurred'}<br>
            <strong>Network Status:</strong> ${navigator.onLine ? 'Online' : 'Offline'}
          </div>
          <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
            <button 
              onclick="window.location.reload()" 
              style="
                background: rgba(255, 255, 255, 0.2);
                border: 1px solid rgba(255, 255, 255, 0.3);
                color: white;
                padding: 12px 24px;
                border-radius: 8px;
                cursor: pointer;
                font-size: 16px;
                transition: all 0.3s ease;
              "
              onmouseover="this.style.background='rgba(255, 255, 255, 0.3)'"
              onmouseout="this.style.background='rgba(255, 255, 255, 0.2)'"
            >
              Refresh Page
            </button>
            <button 
              onclick="window.location.href='/'" 
              style="
                background: rgba(255, 255, 255, 0.2);
                border: 1px solid rgba(255, 255, 255, 0.3);
                color: white;
                padding: 12px 24px;
                border-radius: 8px;
                cursor: pointer;
                font-size: 16px;
                transition: all 0.3s ease;
              "
              onmouseover="this.style.background='rgba(255, 255, 255, 0.3)'"
              onmouseout="this.style.background='rgba(255, 255, 255, 0.2)'"
            >
              Go Home
            </button>
            ${isConnectionError ? `
            <button 
              onclick="localStorage.clear(); window.location.reload();" 
              style="
                background: rgba(255, 255, 255, 0.2);
                border: 1px solid rgba(255, 255, 255, 0.3);
                color: white;
                padding: 12px 24px;
                border-radius: 8px;
                cursor: pointer;
                font-size: 16px;
                transition: all 0.3s ease;
              "
              onmouseover="this.style.background='rgba(255, 255, 255, 0.3)'"
              onmouseout="this.style.background='rgba(255, 255, 255, 0.2)'"
            >
              Clear Cache
            </button>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }
};

// Initialize when DOM is ready with enhanced readiness check
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  // DOM is already loaded, initialize immediately
  initializeApp();
}

// Additional safety check for deployment environments with connection monitoring
setTimeout(() => {
  const rootElement = document.getElementById('root');
  if (rootElement && !rootElement.hasChildNodes()) {
    console.warn('Root element is empty after timeout, attempting re-initialization...');
    
    // Check if it's a connection issue
    if (!navigator.onLine) {
      console.warn('Device is offline, this might be causing initialization issues');
    }
    
    initializeApp();
  }
}, 1000);