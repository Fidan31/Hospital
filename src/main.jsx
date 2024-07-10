import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import useAuthStore from './services/store/Authstore.js'

useAuthStore.getState().currentUser();

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
);
