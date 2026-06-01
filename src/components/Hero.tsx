import { useEffect, useState } from 'react'
import profileImg from '../assets/profile.png'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <section
        id="top"
        style={{
          position: 'relative',
          height: 'calc(100vh - 68px)',
          marginTop: 68,
          overflow: 'visible',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.5s',
        }}
      >
        {/* Text */}
        <div style={{
          position: 'absolute',
          top: 0, bottom: 0, left: 0,
          width: '60%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 48px 0 max(24px, calc((100vw - 1160px) / 2))',
        }}>
          <p style={{
            margin: '0 0 16px',
            color: 'var(--blue)',
            fontSize: 'clamp(14px, 1.3vw, 19px)',
            fontWeight: 500,
          }}>
            기획의 의도를 사용자 경험으로 풀어내는
          </p>

          <h1 style={{
            margin: 0,
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(56px, 7.4vw, 112px)',
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: '-0.06em',
            color: 'var(--ink)',
            whiteSpace: 'nowrap',
          }}>
            <span style={{ display: 'block' }}>FRONT — END</span>
            <span style={{ display: 'block' }}>DEVELOPER</span>
          </h1>

          <div style={{
            marginTop: 32,
            display: 'flex',
            alignItems: 'baseline',
            gap: 8,
            flexWrap: 'wrap',
          }}>
            <span style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              fontSize: 'clamp(40px, 5.2vw, 74px)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              color: 'var(--blue)',
            }}>안수연</span>
            <span style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              fontSize: 'clamp(32px, 3.9vw, 58px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: 'var(--ink)',
            }}>입니다 👋</span>
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
            <a
              href="#about"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 26px', borderRadius: 999,
                background: 'var(--blue)', color: '#fff',
                fontWeight: 800, fontSize: 14,
                boxShadow: '0 8px 24px rgba(89,111,255,0.30)',
                transition: 'transform 0.18s, box-shadow 0.18s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 12px 32px rgba(89,111,255,0.42)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = ''
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 24px rgba(89,111,255,0.30)'
              }}
            >
              프로필 보기 →
            </a>
            <a
              href="#projects"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 26px', borderRadius: 999,
                background: 'rgba(255,255,255,0.9)',
                border: '1px solid var(--line)',
                color: 'var(--ink)', fontWeight: 800, fontSize: 14,
                transition: 'transform 0.18s',
                boxShadow: 'var(--shadow-sm)',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.transform = ''}
            >
              프로젝트 보기
            </a>
          </div>
        </div>

        {/* Character */}
        <img
          src={profileImg}
          alt="안수연 3D 캐릭터"
          style={{
            position: 'absolute',
            right: 'max(24px, calc((100vw - 1160px) / 2))',
            bottom: 0,
            height: '97%',
            width: 'auto',
            maxWidth: '47%',
            objectFit: 'contain',
            objectPosition: 'bottom right',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        />
      </section>

      <style>{`
        @media (max-width: 860px) {
          section#top {
            height: auto !important;
            min-height: calc(100vh - 68px) !important;
          }
          section#top > div {
            position: relative !important;
            width: 100% !important;
            padding: 60px 24px 0 !important;
            align-items: center;
            text-align: center;
          }
          section#top > div > div { justify-content: center !important; }
          section#top > img {
            position: relative !important;
            display: block;
            height: auto !important;
            width: 72% !important;
            max-width: 300px !important;
            margin: 32px auto 0 !important;
          }
        }
      `}</style>
    </>
  )
}
