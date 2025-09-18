import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import Projects from '@/pages/Projects'
import Resume from '@/pages/Resume'
import Contact from '@/pages/Contact'
import Publications from '@/pages/Publications'
import New from '@/pages/New'
import { Suspense, useEffect, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

// Enhanced loading fallback component with connection status
const LoadingFallback = () => {
  const [connectionStatus, setConnectionStatus] = useState<'checking' | 'online' | 'offline'>('checking')

  useEffect(() => {
    const checkConnection = () => {
      setConnectionStatus(navigator.onLine ? 'online' : 'offline')
    }

    checkConnection()
    window.addEventListener('online', checkConnection)
    window.addEventListener('offline', checkConnection)

    return () => {
      window.removeEventListener('online', checkConnection)
      window.removeEventListener('offline', checkConnection)
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
          <div className="absolute inset-0 animate-ping rounded-full h-12 w-12 border border-secondary opacity-20"></div>
        </div>
        <p className="text-muted-foreground animate-pulse">Loading portfolio...</p>
        <div className="flex space-x-1">
          <div className="h-2 w-2 bg-secondary rounded-full animate-bounce"></div>
          <div className="h-2 w-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="h-2 w-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        {connectionStatus !== 'checking' && (
          <div className={`text-xs px-3 py-1 rounded-full ${
            connectionStatus === 'online' 
              ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' 
              : 'bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400'
          }`}>
            {connectionStatus === 'online' ? '🟢 Online' : '🟡 Offline Mode'}
          </div>
        )}
      </div>
    </div>
  )
}

// Enhanced global error fallback component with connection error handling
const GlobalErrorFallback = ({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: () => void }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isConnectionError, setIsConnectionError] = useState(false);

  useEffect(() => {
    // Check if this is a connection-related error
    const errorMessage = error.message.toLowerCase();
    const isConnError = errorMessage.includes('connection refused') ||
                       errorMessage.includes('network') ||
                       errorMessage.includes('fetch') ||
                       errorMessage.includes('econnrefused') ||
                       errorMessage.includes('timeout');
    
    setIsConnectionError(isConnError);
    
    if (isConnError) {
      console.warn('Connection error detected in error boundary:', error);
    }
  }, [error]);

  const handleClearCache = () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
      if ('caches' in window) {
        caches.keys().then(names => {
          names.forEach(name => {
            caches.delete(name);
          });
        });
      }
      window.location.reload();
    } catch (err) {
      console.error('Failed to clear cache:', err);
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="bg-destructive/10 border border-destructive rounded-lg p-8 max-w-2xl backdrop-blur-sm text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mb-4">
            {isConnectionError ? (
              <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            ) : (
              <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            )}
          </div>
          <h1 className="text-2xl font-bold mb-4 text-destructive">
            {isConnectionError ? 'Connection Error' : 'Application Error'}
          </h1>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            {isConnectionError 
              ? 'Unable to connect to the server. This could be due to network issues or server unavailability. The application will work in offline mode where possible.'
              : error.message || 'An unexpected error occurred while loading the portfolio. This might be due to a network issue or a temporary server problem.'
            }
          </p>
        </div>
        
        {isConnectionError && (
          <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-200 mb-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Connection Status:</span>
            </div>
            <p className="text-sm text-amber-700 dark:text-amber-300">
              {navigator.onLine ? 'Device is online but server connection failed' : 'Device is currently offline'}
            </p>
          </div>
        )}
        
        <div className="mb-6">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
          >
            {showDetails ? 'Hide' : 'Show'} Error Details
          </button>
          {showDetails && (
            <div className="mt-4 p-4 bg-muted/50 rounded-md text-left">
              <pre className="text-xs text-muted-foreground overflow-auto max-h-32">
                {error.stack || error.message}
              </pre>
              <div className="mt-2 text-xs text-muted-foreground">
                <strong>Network Status:</strong> {navigator.onLine ? 'Online' : 'Offline'}<br/>
                <strong>User Agent:</strong> {navigator.userAgent.substring(0, 100)}...<br/>
                <strong>Timestamp:</strong> {new Date().toISOString()}
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <button 
            onClick={resetErrorBoundary}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Try Again
          </button>
          <button 
            onClick={() => window.location.href = '/'}
            className="px-6 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
          >
            Go Home
          </button>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-muted text-muted-foreground rounded-md hover:bg-muted/80 transition-colors"
          >
            Refresh Page
          </button>
          {isConnectionError && (
            <button 
              onClick={handleClearCache}
              className="px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
            >
              Clear Cache
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

function App() {
  const [isReady, setIsReady] = useState(false);
  const [appError, setAppError] = useState<string | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<'online' | 'offline'>('online');

  // Enhanced initialization and error handling with connection monitoring
  useEffect(() => {
    const handleRouteError = (event: ErrorEvent) => {
      const errorInfo = {
        message: event.error?.message,
        stack: event.error?.stack,
        filename: event.filename,
        timestamp: new Date().toISOString()
      }
      
      console.error('Routing error:', errorInfo);
      
      // Check if it's a connection error
      if (event.error?.message?.includes('connection refused') ||
          event.error?.message?.includes('fetch') ||
          event.error?.message?.includes('network')) {
        setAppError(`Connection Error: ${event.error?.message || 'Unable to connect to server'}`);
      } else {
        setAppError(event.error?.message || 'Routing error occurred');
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection in routing:', {
        reason: event.reason,
        timestamp: new Date().toISOString()
      });
      
      const reasonString = String(event.reason);
      if (reasonString.includes('connection refused') ||
          reasonString.includes('fetch') ||
          reasonString.includes('network')) {
        setAppError(`Connection Error: ${reasonString}`);
      } else {
        setAppError(`Promise rejection: ${event.reason}`);
      }
    };

    const handleOnline = () => {
      setConnectionStatus('online');
      console.log('App: Connection restored');
    };

    const handleOffline = () => {
      setConnectionStatus('offline');
      console.log('App: Connection lost');
    };

    // Add event listeners
    window.addEventListener('error', handleRouteError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    // Initialize connection status
    setConnectionStatus(navigator.onLine ? 'online' : 'offline');
    
    // Initialize app with error handling
    const initTimer = setTimeout(() => {
      try {
        setIsReady(true);
        console.log('App initialized successfully', {
          connectionStatus: navigator.onLine ? 'online' : 'offline'
        });
      } catch (error) {
        console.error('App initialization error:', error);
        setAppError(error instanceof Error ? error.message : 'Initialization failed');
      }
    }, 100);

    return () => {
      window.removeEventListener('error', handleRouteError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearTimeout(initTimer);
    };
  }, []);

  // Show error state if app failed to initialize
  if (appError) {
    return (
      <GlobalErrorFallback 
        error={new Error(appError)} 
        resetErrorBoundary={() => {
          setAppError(null);
          setIsReady(false);
          setTimeout(() => setIsReady(true), 100);
        }} 
      />
    );
  }

  if (!isReady) {
    return <LoadingFallback />;
  }

  return (
    <ErrorBoundary 
      FallbackComponent={GlobalErrorFallback} 
      onReset={() => {
        setIsReady(false);
        setAppError(null);
        setTimeout(() => setIsReady(true), 100);
      }}
      onError={(error) => {
        console.error('ErrorBoundary caught error:', error);
        
        // Log connection errors specifically
        if (error.message.includes('connection refused') ||
            error.message.includes('fetch') ||
            error.message.includes('network')) {
          console.warn('Connection error caught by ErrorBoundary');
        }
      }}
    >
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/new" element={<New />} />
          
          {/* Handle common portfolio paths for deployment */}
          <Route path="/portfolio" element={<Navigate to="/" replace />} />
          <Route path="/portfolio/*" element={<Navigate to="/" replace />} />
          <Route path="/index" element={<Navigate to="/" replace />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          
          {/* Handle common deployment paths */}
          <Route path="/build" element={<Navigate to="/" replace />} />
          <Route path="/dist" element={<Navigate to="/" replace />} />
          <Route path="/public" element={<Navigate to="/" replace />} />
          
          {/* Catch all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      
      {/* Enhanced toast notifications with connection status */}
      <Toaster 
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'hsl(var(--background))',
            color: 'hsl(var(--foreground))',
            border: '1px solid hsl(var(--border))',
          },
        }}
        closeButton
        richColors
      />
      
      {/* Connection status indicator */}
      {connectionStatus === 'offline' && (
        <div className="fixed top-4 left-4 z-50 bg-amber-100 dark:bg-amber-900/90 text-amber-800 dark:text-amber-200 px-4 py-2 rounded-lg border border-amber-200 dark:border-amber-800 shadow-lg">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            Offline Mode
          </div>
        </div>
      )}
    </ErrorBoundary>
  )
}

export default App