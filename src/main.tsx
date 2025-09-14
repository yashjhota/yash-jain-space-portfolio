import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// Global error handler for uncaught exceptions
window.addEventListener('error', (event) => {
  console.error('Global error caught:', event.error);
  // Prevent default browser error handling
  event.preventDefault();
});

// Global promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  // Prevent default browser error handling
  event.preventDefault();
});

// Find the root element safely
const rootElement = document.getElementById('root')

// Check if root element exists before rendering
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  
  // Wrap render in try-catch for additional safety
  try {
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>,
    );
  } catch (error) {
    console.error("Error rendering React application:", error);
    
    // Fallback rendering in case of critical error
    rootElement.innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh; flex-direction: column; font-family: sans-serif;">
        <h1>Something went wrong</h1>
        <p>The application failed to load. Please try refreshing the page.</p>
        <button onclick="window.location.reload()" style="padding: 8px 16px; margin-top: 16px; cursor: pointer;">
          Refresh Page
        </button>
      </div>
    `;
  }
} else {
  console.error("Root element with id 'root' not found in the document. Cannot mount React application.");
}