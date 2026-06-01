export default function Footer() {
  return (
    <footer id="contact" style={{
      background: '#0A0A0A',
      color: '#fff',
      borderRadius: '40px 40px 0 0',
      marginTop: 80,
      padding: '80px 0 60px',
    }}>
      <div style={{
        width: 'min(var(--max), calc(100% - 48px))',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 40,
          alignItems: 'end',
        }}>
          <div>
            <p style={{
              margin: '0 0 16px',
              color: 'rgba(255,255,255,0.42)',
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              Get In Touch
            </p>
            <h2 style={{
              margin: 0,
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(44px, 7vw, 90px)',
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: '-0.08em',
            }}>
              LET'S BUILD<br />
              <span style={{ color: '#7385FF' }}>BETTER UX</span>
            </h2>
            <p style={{
              margin: '24px 0 0',
              color: 'rgba(255,255,255,0.52)',
              fontSize: 15,
              lineHeight: 1.7,
              maxWidth: 440,
            }}>
              Contact Me
            </p>
            <a
              href="mailto:werther0704@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                marginTop: 32,
                padding: '16px 28px',
                borderRadius: 999,
                background: '#596FFF',
                color: '#fff',
                fontWeight: 800,
                fontSize: 15,
                boxShadow: '0 8px 32px rgba(89,111,255,0.38)',
                transition: 'transform 0.18s, box-shadow 0.18s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 14px 40px rgba(89,111,255,0.52)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = ''
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(89,111,255,0.38)'
              }}
            >
              ✉ werther0704@gmail.com
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-end' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/wave-rec' },
              { label: 'Velog', href: 'https://velog.io/@a000906' },
              { label: 'Email', href: 'mailto:werther0704@gmail.com' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  padding: '11px 20px',
                  borderRadius: 999,
                  background: 'rgba(255,255,255,0.07)',
                  color: 'rgba(255,255,255,0.76)',
                  fontSize: 13,
                  fontWeight: 800,
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(89,111,255,0.28)'
                  ;(e.currentTarget as HTMLAnchorElement).style.color = '#fff'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.07)'
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.76)'
                }}
              >
                {label} ↗
              </a>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: 64,
          paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
          flexWrap: 'wrap',
        }}>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.28)', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
            AHN<span style={{ color: '#596FFF' }}>.</span>SUYEON
          </span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.24)' }}>
            © 2026 Ahn Suyeon
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
