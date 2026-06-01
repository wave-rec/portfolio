import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SectionHeader } from './About'
import { projects, type Project } from '../data/projects'

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

export default function Projects() {
  const { ref, inView } = useInView()

  return (
    <section id="projects" style={{ padding: '100px 0', background: 'var(--bg)' }}>
      <div style={{ width: 'min(var(--max), calc(100% - 48px))', margin: '0 auto' }} ref={ref}>
        <SectionHeader
          label="Selected Projects"
          title={<>프로젝트별<br />핵심 구현</>}
          inView={inView}
        />
        <div style={{ display: 'grid', gap: 32, marginTop: 56 }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, inView } = useInView(0.08)
  const navigate = useNavigate()
  const [detailsOpen, setDetailsOpen] = useState(false)

  return (
    <div
      ref={ref}
      style={{
        borderRadius: 'var(--radius-xl)',
        background: '#fff',
        border: '1px solid rgba(89,111,255,0.10)',
        boxShadow: '0 24px 64px rgba(89,111,255,0.09)',
        overflow: 'hidden',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ${index * 0.1}s, transform 0.7s ${index * 0.1}s`,
      }}
    >
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
        padding: '32px 36px', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', right: -16, bottom: -48,
          fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: 140,
          lineHeight: 1, letterSpacing: '-0.08em',
          color: 'rgba(255,255,255,0.08)', userSelect: 'none', pointerEvents: 'none',
        }}>{project.name.split(' ')[0]}</div>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <span style={{
              display: 'inline-block', padding: '6px 14px', borderRadius: 999,
              background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.22)',
              color: '#fff', fontSize: 12, fontWeight: 900, letterSpacing: '0.04em',
              marginBottom: 12, backdropFilter: 'blur(8px)',
            }}>{project.badge}</span>

            {project.award && (
              <span style={{
                display: 'inline-block', marginLeft: 8, padding: '6px 14px', borderRadius: 999,
                background: 'rgba(255,255,255,0.25)', color: '#fff', fontSize: 12, fontWeight: 900,
              }}>{project.award}</span>
            )}

            <h3 style={{
              margin: 0, fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 900,
              lineHeight: 0.92, letterSpacing: '-0.075em', color: '#fff',
            }}>{project.name}</h3>

            <p style={{
              margin: '14px 0 0', color: 'rgba(255,255,255,0.82)',
              fontSize: 15, lineHeight: 1.65, maxWidth: 520,
            }}>{project.tagline}</p>
          </div>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'flex-start' }}>
            {project.links?.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{
                  padding: '10px 18px', borderRadius: 999,
                  background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.28)',
                  color: '#fff', fontSize: 13, fontWeight: 800, backdropFilter: 'blur(8px)',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.28)'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.18)'}
              >{label}</a>
            ))}
            <button
              onClick={() => navigate(`/projects/${project.id}`)}
              style={{
                padding: '10px 20px', borderRadius: 999, cursor: 'pointer',
                background: 'rgba(255,255,255,0.95)', border: 'none',
                color: project.accentColor, fontSize: 13, fontWeight: 900,
                transition: 'transform 0.18s, box-shadow 0.18s',
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'
                ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.18)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = ''
                ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)'
              }}
            >
              상세보기 →
            </button>
          </div>
        </div>

        {/* Meta */}
        <div style={{
          display: 'flex', gap: 24, marginTop: 24, paddingTop: 20,
          borderTop: '1px solid rgba(255,255,255,0.18)', flexWrap: 'wrap',
        }}>
          {[
            { label: '기간', value: project.period },
            { label: '플랫폼', value: project.platform },
            { label: '역할', value: project.role },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}>
              <span style={{ color: 'rgba(255,255,255,0.52)', fontSize: 12, fontWeight: 900, flexShrink: 0 }}>{label}</span>
              <span style={{ color: 'rgba(255,255,255,0.88)', fontSize: 13, lineHeight: 1.5 }}>{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stack */}
      <div style={{
        padding: '16px 36px', borderBottom: '1px solid var(--line)',
        display: 'flex', gap: 7, flexWrap: 'wrap', alignItems: 'center',
      }}>
        <span style={{ fontSize: 11, fontWeight: 900, color: 'var(--muted)', letterSpacing: '0.08em', marginRight: 4 }}>STACK</span>
        {project.stack.map(s => (
          <span key={s} style={{
            padding: '4px 11px', borderRadius: 999, fontSize: 12, fontWeight: 800,
            background: 'rgba(89,111,255,0.06)', color: '#3A4A6B',
            border: '1px solid rgba(89,111,255,0.10)',
          }}>{s}</span>
        ))}
      </div>

      {/* Detail cards — single toggle */}
      <div style={{ padding: '12px 36px 28px' }}>
        {/* Header row: label + toggle button */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <span style={{ fontSize: 11, fontWeight: 900, color: 'var(--muted)', letterSpacing: '0.08em' }}>핵심 구현</span>
          <button
            onClick={() => setDetailsOpen(prev => !prev)}
            style={{
              display: 'flex', alignItems: 'center', gap: 5,
              background: 'none', border: `1px solid var(--line)`, borderRadius: 999,
              cursor: 'pointer', padding: '5px 12px',
              color: 'var(--muted)', fontSize: 12, fontWeight: 800,
              transition: 'background 0.2s, border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = `${project.accentColor}12`
              ;(e.currentTarget as HTMLButtonElement).style.borderColor = `${project.accentColor}60`
              ;(e.currentTarget as HTMLButtonElement).style.color = project.accentColor
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'none'
              ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--line)'
              ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--muted)'
            }}
          >
            <span style={{
              display: 'inline-block',
              transition: 'transform 0.25s',
              transform: detailsOpen ? 'rotate(180deg)' : 'none',
              fontSize: 13, lineHeight: 1,
            }}>∨</span>
          </button>
        </div>

        {/* Cards — always visible titles, content shown when open */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {project.details.map((detail) => (
            <div
              key={detail.title}
              style={{
                borderRadius: 'var(--radius-lg)',
                border: `1px solid ${detailsOpen ? project.accentColor + '40' : 'var(--line)'}`,
                background: detailsOpen ? `${project.accentColor}06` : 'rgba(248,249,255,0.7)',
                overflow: 'hidden',
                transition: 'border-color 0.2s, background 0.2s',
              }}
            >
              <div style={{ padding: '13px 16px' }}>
                <h4 style={{
                  margin: 0, fontSize: 13, fontWeight: 900,
                  color: 'var(--ink)', letterSpacing: '-0.01em',
                }}>{detail.title}</h4>
              </div>
              {detailsOpen && (
                <ul style={{ margin: 0, padding: '0 16px 14px', display: 'grid', gap: 9, listStyle: 'none' }}>
                  {detail.items.map(item => (
                    <li key={item} style={{
                      position: 'relative', paddingLeft: 14,
                      color: '#34312E', fontSize: 13, lineHeight: 1.65,
                    }}>
                      <span style={{
                        position: 'absolute', left: 0, top: '0.6em',
                        width: 5, height: 5, borderRadius: '50%',
                        background: project.accentColor,
                      }} />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
