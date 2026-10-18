
import { useState } from 'react'
import './App.css'

type Screen = 'signup' | 'validation' | 'success'

function App() {
  const [screen, setScreen] = useState<Screen>('signup')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!name.trim()) {
      setError('Please enter your full name.')
      setScreen('validation')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      setScreen('validation')
      return
    }

    setError('')
    setScreen('success')
  }

  return (
    <main className="page">
      <header className="brand">
        <span className="brand-mark">L</span>
        <span>LeadZam</span>
      </header>

      <section className="signup-card">
        {screen === 'success' ? (
          <div className="success-screen">
            <div className="success-icon">✓</div>
            <h1>Account created successfully!</h1>
            <p>
              Your account is ready. You can now continue to
              LeadZam and explore your dashboard.
            </p>
            <button
              className="primary-button"
              onClick={() => setScreen('signup')}
            >
              Continue to Dashboard
            </button>
            <p className="helper">
              You can add your company details later.
            </p>
          </div>
        ) : (
          <>
            <div className="card-heading">
              <h1>Create your account</h1>
              <p>Get started with LeadZam</p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  id="fullName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  aria-invalid={screen === 'validation' && !name.trim()}
                />
                {screen === 'validation' && !name.trim() && (
                  <span className="error">Please enter your full name.</span>
                )}
              </div>

              <div className="field">
                <label htmlFor="email">Work Email *</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-invalid={screen === 'validation' && !!error && !!name.trim()}
                />
                {screen === 'validation' && !!name.trim() && error && (
                  <span className="error">{error}</span>
                )}
              </div>

              <div className="field">
                <label htmlFor="company">Company Name (Optional)</label>
                <input
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Enter your company name"
                  autoComplete="organization"
                />
                <span className="helper">
                  You can add this later if needed.
                </span>
              </div>

              <button className="primary-button" type="submit">
                Create account
              </button>
            </form>

            <p className="terms">
              By continuing, you agree to our Terms of Service
              and Privacy Policy.
            </p>
          </>
        )}
      </section>

      <footer>© 2026 LeadZam. All rights reserved.</footer>
    </main>
  )
}

export default App
