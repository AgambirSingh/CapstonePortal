import React from 'react';
import ReactDOM from 'react-dom/client'; //import React 18
import App from './App';

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
