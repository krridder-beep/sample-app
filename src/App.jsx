import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
        <h1>GitHub & Cloudflare</h1>
        <p className="subtitle">Seamless Deployment Pipeline</p>
      </div>
      
      <div className="card">
        <h2>Welcome to your new site!</h2>
        <p>
          This project is being deployed from <strong>GitHub</strong> to <strong>Cloudflare Pages</strong>.
        </p>
        <div className="status-grid">
          <div className="status-item">
            <span className="dot github"></span> GitHub Connected
          </div>
          <div className="status-item">
            <span className="dot cloudflare"></span> Cloudflare Ready
          </div>
        </div>
        <button onClick={() => setCount((count) => count + 1)}>
          Deployment Test: {count}
        </button>
        <p style={{ marginTop: '1rem', opacity: 0.7, fontSize: '0.9rem' }}>
          Edit <code>src/App.jsx</code> and push to trigger a new build.
        </p>
      </div>

      <footer className="footer">
        <p>© 2026 Powered by Antigravity AI</p>
      </footer>
    </>
  )
}

export default App
