import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['about', 'skills', 'projects', 'contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      height: 68,
      display: 'flex',
      alignItems: 'center',
      transition: 'background 0.3s, box-shadow 0.3s',
      background: scrolled ? 'rgba(248,249,255,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      boxShadow: scrolled ? '0 1px 0 rgba(89,111,255,0.10)' : 'none',
    }}>
      <div style={{
        width: 'min(var(--max), calc(100% - 48px))',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <a href="#top" style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 900,
          fontSize: 18,
          letterSpacing: '-0.04em',
          color: 'var(--ink)',
        }}>
          AHN<span style={{ color: 'var(--blue)' }}>.</span>SUYEON
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="nav-desktop">
          {links.map(({ href, label }) => {
            const id = href.slice(1)
            const isActive = active === id
            return (
              <a
                key={href}
                href={href}
                style={{
                  padding: '8px 16px',
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 700,
                  color: isActive ? 'var(--blue)' : 'var(--gray)',
                  background: isActive ? 'rgba(89,111,255,0.08)' : 'transparent',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink)'
                }}
                onMouseLeave={e => {
                  if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gray)'
                }}
              >
                {label}
              </a>
            )
          })}
          <a
            href="mailto:werther0704@gmail.com"
            style={{
              marginLeft: 8,
              padding: '9px 18px',
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 800,
              background: 'var(--blue)',
              color: '#fff',
              boxShadow: '0 4px 16px rgba(89,111,255,0.32)',
              transition: 'transform 0.18s, box-shadow 0.18s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'
              ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 24px rgba(89,111,255,0.42)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = ''
              ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(89,111,255,0.32)'
            }}
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label="메뉴"
          style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 8 }}
          className="nav-hamburger"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: 22, height: 2,
              background: 'var(--ink)', borderRadius: 2,
              transition: 'all 0.3s',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translate(5px,5px)'
                  : i === 1 ? 'scaleX(0)'
                  : 'rotate(-45deg) translate(5px,-5px)'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: 68, left: 0, right: 0,
          background: 'rgba(248,249,255,0.98)',
          backdropFilter: 'blur(20px)',
          padding: '16px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          boxShadow: '0 12px 32px rgba(0,0,0,0.08)',
        }}>
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--ink)', borderRadius: 10 }}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 680px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
