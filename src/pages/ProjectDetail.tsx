import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  useEffect(() => { window.scrollTo(0, 0) }, [id])
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div style={{ padding: '120px 24px', textAlign: 'center' }}>
        <p>프로젝트를 찾을 수 없습니다.</p>
        <button onClick={() => navigate('/')} style={{ marginTop: 16, cursor: 'pointer' }}>홈으로</button>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
        padding: '80px 0 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* bg text */}
        <div style={{
          position: 'absolute', right: -20, bottom: -60,
          fontFamily: "'Inter', sans-serif", fontWeight: 900,
          fontSize: 200, lineHeight: 1, letterSpacing: '-0.08em',
          color: 'rgba(255,255,255,0.06)', userSelect: 'none', pointerEvents: 'none',
        }}>{project.name.split(' ')[0]}</div>

        <div style={{ width: 'min(1160px, calc(100% - 48px))', margin: '0 auto' }}>
          {/* Back button */}
          <button
            onClick={() => navigate('/')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '10px 18px', borderRadius: 999,
              background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.22)',
              color: '#fff', fontSize: 13, fontWeight: 800, cursor: 'pointer',
              marginBottom: 16, transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.25)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
          >
            ← 목록으로
          </button>

          {project.award && (
            <div style={{
              display: 'block', padding: '6px 14px', borderRadius: 999,
              background: 'rgba(255,255,255,0.2)', color: '#fff',
              fontSize: 13, fontWeight: 900, marginBottom: 16,
              width: 'fit-content',
            }}>{project.award}</div>
          )}

          <span style={{
            display: 'block', padding: '6px 0', color: 'rgba(255,255,255,0.7)',
            fontSize: 13, fontWeight: 800, letterSpacing: '0.04em', marginBottom: 12,
          }}>{project.badge}</span>

          <h1 style={{
            margin: '0 0 16px', fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(56px, 7vw, 100px)', fontWeight: 900,
            lineHeight: 0.92, letterSpacing: '-0.07em', color: '#fff',
          }}>{project.name}</h1>

          <p style={{
            margin: '0 0 32px', color: 'rgba(255,255,255,0.82)',
            fontSize: 18, lineHeight: 1.65, maxWidth: 640,
          }}>{project.tagline}</p>

          {/* Meta */}
          <div style={{
            display: 'flex', gap: 32, paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.18)', flexWrap: 'wrap', marginBottom: 48,
          }}>
            {[
              { label: '기간', value: project.period },
              { label: '플랫폼', value: project.platform },
              { label: '역할', value: project.role },
            ].map(({ label, value }) => (
              <div key={label}>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 900, letterSpacing: '0.08em', marginBottom: 4 }}>{label}</div>
                <div style={{ color: '#fff', fontSize: 14, lineHeight: 1.5 }}>{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 16:9 image */}
        <div style={{ width: 'min(1160px, calc(100% - 48px))', margin: '0 auto' }}>
          {project.image ? (
            <img
              src={import.meta.env.BASE_URL.replace(/\/$/, '') + project.image}
              alt={`${project.name} 미리보기`}
              style={{
                width: '100%', aspectRatio: '16 / 9',
                objectFit: 'cover',
                borderRadius: '20px 20px 0 0',
                display: 'block',
              }}
            />
          ) : (
            <div style={{
              width: '100%', aspectRatio: '16 / 9',
              background: 'rgba(255,255,255,0.10)',
              border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: '20px 20px 0 0',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column', gap: 12,
              color: 'rgba(255,255,255,0.4)',
            }}>
              <div style={{ fontSize: 48 }}>🖼️</div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>프로젝트 이미지 준비 중</div>
              <div style={{ fontSize: 12 }}>16 : 9</div>
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div style={{ width: 'min(1160px, calc(100% - 48px))', margin: '0 auto', padding: '60px 0 100px' }}>

        {/* Overview */}
        {project.overview && (
          <div style={{
            padding: '28px 32px', marginBottom: 32,
            background: '#fff', borderRadius: 20,
            border: `1px solid ${project.accentColor}20`,
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ width: 6, height: 22, borderRadius: 3, background: project.accentColor }} />
              <h2 style={{ margin: 0, fontSize: 15, fontWeight: 900, color: 'var(--ink)', letterSpacing: '-0.02em' }}>프로젝트 소개</h2>
            </div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.85, color: '#44403C' }}>{project.overview}</p>
          </div>
        )}

        {/* Stack */}
        <div style={{
          padding: '20px 28px', marginBottom: 32,
          background: '#fff', borderRadius: 16,
          border: '1px solid rgba(89,111,255,0.10)',
          boxShadow: '0 4px 20px rgba(89,111,255,0.06)',
          display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center',
        }}>
          <span style={{ fontSize: 11, fontWeight: 900, color: 'var(--muted)', letterSpacing: '0.08em', marginRight: 4 }}>STACK</span>
          {project.stack.map(s => (
            <span key={s} style={{
              padding: '5px 14px', borderRadius: 999, fontSize: 13, fontWeight: 800,
              background: 'rgba(89,111,255,0.07)', color: '#3A4A6B',
              border: '1px solid rgba(89,111,255,0.12)',
            }}>{s}</span>
          ))}
        </div>

        {/* Detail sections */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 32 }}>
          {project.details.map((detail) => (
            <div key={detail.title} style={{
              background: '#fff',
              borderRadius: 20,
              border: `1px solid ${project.accentColor}25`,
              padding: '24px 24px 20px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20,
              }}>
                <div style={{
                  width: 6, height: 24, borderRadius: 3,
                  background: project.accentColor,
                }} />
                <h3 style={{
                  margin: 0, fontSize: 15, fontWeight: 900,
                  color: 'var(--ink)', letterSpacing: '-0.02em',
                }}>{detail.title}</h3>
              </div>
              <ul style={{ margin: 0, padding: 0, display: 'grid', gap: 14, listStyle: 'none' }}>
                {detail.items.map(item => (
                  <li key={item} style={{
                    position: 'relative', paddingLeft: 16,
                    color: '#44403C', fontSize: 14, lineHeight: 1.7,
                  }}>
                    <span style={{
                      position: 'absolute', left: 0, top: '0.6em',
                      width: 7, height: 7, borderRadius: '50%',
                      background: project.accentColor,
                    }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trouble shooting */}
        {project.troubles && project.troubles.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{ width: 6, height: 22, borderRadius: 3, background: project.accentColor }} />
              <h2 style={{ margin: 0, fontSize: 15, fontWeight: 900, color: 'var(--ink)', letterSpacing: '-0.02em' }}>트러블슈팅</h2>
            </div>
            <div style={{ display: 'grid', gap: 16 }}>
              {project.troubles.map((t) => (
                <div key={t.title} style={{
                  background: '#fff', borderRadius: 20,
                  border: `1px solid ${project.accentColor}20`,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    padding: '14px 24px',
                    background: `${project.accentColor}08`,
                    borderBottom: `1px solid ${project.accentColor}18`,
                  }}>
                    <h3 style={{ margin: 0, fontSize: 14, fontWeight: 900, color: project.accentColor }}>{t.title}</h3>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                    <div style={{ padding: '20px 24px', borderRight: `1px solid ${project.accentColor}12` }}>
                      <p style={{ margin: '0 0 8px', fontSize: 11, fontWeight: 900, color: 'var(--muted)', letterSpacing: '0.08em' }}>PROBLEM</p>
                      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: '#44403C' }}>{t.problem}</p>
                    </div>
                    <div style={{ padding: '20px 24px' }}>
                      <p style={{ margin: '0 0 8px', fontSize: 11, fontWeight: 900, color: project.accentColor, letterSpacing: '0.08em' }}>SOLUTION</p>
                      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: '#44403C' }}>{t.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Takeaways */}
        {project.takeaways && project.takeaways.length > 0 && (
          <div style={{
            padding: '28px 32px', marginBottom: 32,
            background: '#fff', borderRadius: 20,
            border: `1px solid ${project.accentColor}20`,
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{ width: 6, height: 22, borderRadius: 3, background: project.accentColor }} />
              <h2 style={{ margin: 0, fontSize: 15, fontWeight: 900, color: 'var(--ink)', letterSpacing: '-0.02em' }}>배운 점 & 성과</h2>
            </div>
            <ol style={{ margin: 0, padding: 0, display: 'grid', gap: 16, listStyle: 'none' }}>
              {project.takeaways.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{
                    flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
                    background: `${project.accentColor}15`,
                    color: project.accentColor,
                    fontSize: 12, fontWeight: 900,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{String(i + 1).padStart(2, '0')}</span>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: '#44403C', paddingTop: 4 }}>{item}</p>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Links */}
        {project.links && (
          <div style={{ display: 'flex', gap: 12, marginTop: 48 }}>
            {project.links.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{
                  padding: '12px 24px', borderRadius: 999,
                  background: project.accentColor, color: '#fff',
                  fontSize: 14, fontWeight: 800,
                  boxShadow: `0 6px 20px ${project.accentColor}40`,
                  transition: 'transform 0.18s, box-shadow 0.18s',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.transform = ''}
              >{label}</a>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 860px) {
          div[style*="repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
