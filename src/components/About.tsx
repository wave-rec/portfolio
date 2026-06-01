import { useEffect, useRef, useState } from 'react'
import profileImg from '../assets/profile.png'

function useInView(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

export function SectionHeader({ label, title, inView }: {
  label: string
  title: React.ReactNode
  inView: boolean
}) {
  return (
    <div style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.6s, transform 0.6s',
    }}>
      <p style={{
        margin: '0 0 12px',
        color: 'var(--blue)',
        fontSize: 12,
        fontWeight: 900,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}>{label}</p>
      <h2 style={{
        margin: 0,
        fontFamily: "'Inter', sans-serif",
        fontSize: 'clamp(36px, 5vw, 60px)',
        lineHeight: 1.0,
        letterSpacing: '-0.06em',
        fontWeight: 900,
      }}>{title}</h2>
    </div>
  )
}


export default function About() {
  const { ref, inView } = useInView()

  return (
    <section
      id="about"
      style={{
        padding: '100px 0',
        scrollMarginTop: 68,
      }}
    >
      <div
        ref={ref}
        style={{
          width: 'min(var(--max), calc(100% - 48px))',
          margin: '0 auto',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 0.7s, transform 0.7s',
        }}
      >
        {/* Section title */}
        <p style={{
          margin: '0 0 48px',
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(52px, 8vw, 100px)',
          fontWeight: 900,
          letterSpacing: '-0.05em',
          color: 'var(--blue)',
          lineHeight: 1,
        }}>
          PROFILE
        </p>

        {/* Main grid: left | center */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '220px 1fr',
          gap: 48,
          alignItems: 'start',
        }}>

          {/* ── Left column: photo + name + info ── */}
          <div>
            <div style={{
              width: '100%',
              aspectRatio: '1 / 1.1',
              borderRadius: 16,
              overflow: 'hidden',
              background: 'var(--line)',
              marginBottom: 16,
              border: '1px solid var(--line)',
            }}>
              <img
                src={profileImg}
                alt="안수연"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
            <p style={{ margin: '0 0 20px', fontWeight: 800, fontSize: 16, letterSpacing: '-0.02em' }}>
              안수연, 프론트엔드 개발자
            </p>

            <p style={{
              margin: '0 0 8px',
              fontSize: 13,
              fontWeight: 900,
              color: 'var(--blue)',
              borderBottom: '1px solid var(--line)',
              paddingBottom: 6,
            }}>정보</p>
            {[
              { label: '이메일', value: 'werther0704@gmail.com' },
              { label: '번호', value: '010-3847-6948' },
              { label: '주소', value: '경기 성남시 수정구 위례동로15' },
            ].map(({ label, value }) => (
              <div key={label} style={{
                display: 'grid',
                gridTemplateColumns: '42px 1fr',
                gap: 8,
                padding: '7px 0',
                borderBottom: '1px solid var(--line)',
                fontSize: 12,
                lineHeight: 1.5,
              }}>
                <span style={{ color: 'var(--muted)', fontWeight: 700 }}>{label}</span>
                <span style={{ color: 'var(--ink)', wordBreak: 'break-all' }}>{value}</span>
              </div>
            ))}
          </div>

          {/* ── Center: bio + education + activities ── */}
          <div>
            {/* Bio */}
            <p style={{ margin: '0 0 10px', fontSize: 16, lineHeight: 1.8, color: 'var(--ink)' }}>
              기획의 의도를 사용자 경험으로 풀어내는{' '}
              <span style={{ color: 'var(--blue)', fontWeight: 700 }}>프론트엔드 개발자</span>입니다.
            </p>
            <p style={{ margin: '0 0 10px', fontSize: 16, lineHeight: 1.8, color: 'var(--ink)' }}>
              <span style={{ color: 'var(--blue)', fontWeight: 700 }}>법학과 미디어커뮤니케이션을 전공</span>하며 쌓은 문제 해석력과 콘텐츠 기획력을 바탕으로,
              사용자가 이해하기 쉬운 흐름과 인터랙션을 설계하는 데 관심이 있습니다.
            </p>
            <p style={{ margin: '0 0 36px', fontSize: 16, lineHeight: 1.8, color: 'var(--ink)' }}>
              <span style={{ color: 'var(--blue)', fontWeight: 700 }}>React, TypeScript, Next.js</span> 기반의 웹 개발을 학습하고 있으며,
              사회적 이슈, 데이터, 서비스 기획을 사용자에게 전달 가능한 화면으로 구현하는 개발자를 지향합니다.
            </p>

            {/* Education */}
            <p style={{
              margin: '0 0 8px',
              fontSize: 13, fontWeight: 900, color: 'var(--blue)',
              borderBottom: '2px solid var(--ink)',
              paddingBottom: 6,
            }}>학력</p>
            {[
              { period: '16.03 - 19.01', desc: '경화여자고등학교 졸업' },
              { period: '19.03 - 25.02', desc: '성신여자대학교 법학, 미디어커뮤니케이션학 복수전공' },
            ].map(({ period, desc }) => (
              <div key={period} style={{
                display: 'grid',
                gridTemplateColumns: '110px 1fr',
                gap: 16,
                padding: '10px 0',
                borderBottom: '1px solid var(--line)',
                fontSize: 14,
                color: 'var(--ink)',
              }}>
                <span style={{ color: 'var(--muted)', fontWeight: 600, fontSize: 13 }}>{period}</span>
                <span>{desc}</span>
              </div>
            ))}

            {/* Activities */}
            <p style={{
              margin: '32px 0 8px',
              fontSize: 13, fontWeight: 900, color: 'var(--blue)',
              borderBottom: '2px solid var(--ink)',
              paddingBottom: 6,
            }}>활동</p>
            {[
              '초격차 프론트엔드 캠프',
              '삼성 청년 SW-AI 아카데미 14기',
              '지식산업법학과 홍보국원, 법학부 홍보국장',
            ].map((item) => (
              <div key={item} style={{
                padding: '10px 0',
                borderBottom: '1px solid var(--line)',
                fontSize: 14,
                color: 'var(--ink)',
              }}>
                {item}
              </div>
            ))}

            {/* Links */}
            <div style={{ display: 'flex', gap: 10, marginTop: 32, flexWrap: 'wrap' }}>
              {[
                { label: 'GitHub ↗', href: 'https://github.com/wave-rec' },
                { label: 'Velog ↗', href: 'https://velog.io/@a000906' },
                { label: '이메일', href: 'mailto:werther0704@gmail.com' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{
                    padding: '9px 18px',
                    borderRadius: 999,
                    background: 'var(--blue)',
                    color: '#fff',
                    fontSize: 13,
                    fontWeight: 800,
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.82'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          #about > div > div:last-of-type {
            grid-template-columns: 200px 1fr !important;
          }
          #about > div > div:last-of-type > div:last-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 680px) {
          #about > div > div:last-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
