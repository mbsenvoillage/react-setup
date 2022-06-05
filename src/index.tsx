import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

let mountPoint = document.getElementById('root')

if (!mountPoint) {
    throw new Error('No mount point found in index.html')
}

const root = ReactDOM.createRoot(mountPoint)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
