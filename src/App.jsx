import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Rocket, Sparkles, Shield, Zap, ExternalLink } from 'lucide-react'
import './App.css'

function App() {
  const [isHovered, setIsHovered] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <>
      <div className="bg-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <motion.div 
        className="container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <header style={{ marginTop: '10vh', textAlign: 'center' }}>
          <motion.div variants={itemVariants} className="feature-badge">
            <Sparkles size={14} style={{ marginRight: 6 }} />
            Powered by Antigravity AI
          </motion.div>
          
          <motion.h1 variants={itemVariants}>
            Future of Web <br /> 
            <span style={{ color: '#3b82f6' }}>Deployment</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants} 
            style={{ fontSize: '1.25rem', color: '#94a3b8', marginTop: '1.5rem', maxWidth: '600px', margin: '1.5rem auto' }}
          >
            Experience lightning fast deployments with the synergy of GitHub and Cloudflare Pages.
          </motion.p>
        </header>

        <motion.div 
          className="glass-card"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div className="feature-item">
              <Zap className="feature-icon" color="#f59e0b" />
              <h3>Instant CI/CD</h3>
              <p>Push to GitHub, deploy to Edge. Zero configuration required.</p>
            </div>
            <div className="feature-item">
              <Shield className="feature-icon" color="#10b981" />
              <h3>Edge Security</h3>
              <p>DDoS protection and SSL by default on the global network.</p>
            </div>
          </div>

          <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <motion.button 
              className="btn-primary"
              whileTap={{ scale: 0.95 }}
            >
              <Rocket size={18} style={{ marginRight: 8, display: 'inline' }} />
              Get Started Now
            </motion.button>
            <button className="btn-secondary">
              GitHub Source
            </button>
          </div>
        </motion.div>

        <motion.footer 
          variants={itemVariants}
          style={{ marginTop: '5rem', paddingBottom: '3rem', display: 'flex', gap: '2rem', opacity: 0.6 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#10b981' }}></div>
            Systems Operational
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ExternalLink size={14} />
            View Docs
          </div>
        </motion.footer>
      </motion.div>
    </>
  )
}

export default App
