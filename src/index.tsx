import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const mountPoint = document.getElementById('root')

if (!mountPoint) {
    throw new Error('No mount point found in index.html')
}

const root = ReactDOM.createRoot(mountPoint)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
