import { useEffect, useRef, useState } from 'react'
import { SectionHeader } from './About'

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

const FULL = 5
const MID = 3

const icon = (name: string, color = '596FFF') =>
  `https://cdn.simpleicons.org/${name}/${color}`

const skillGroups = [
  {
    label: 'Language',
    skills: [
      { name: 'TypeScript', logo: icon('typescript', '3178C6'), level: FULL },
      { name: 'JavaScript', logo: icon('javascript', 'F7DF1E'), level: FULL },
      { name: 'Python',     logo: icon('python', '3776AB'),    level: MID  },
    ],
  },
  {
    label: 'Frontend',
    skills: [
      { name: 'React',        logo: icon('react', '61DAFB'),       level: FULL },
      { name: 'Next.js',      logo: icon('nextdotjs', '000000'),   level: 4    },
      { name: 'React Native', logo: icon('react', '61DAFB'),       level: 4    },
      { name: 'Vue.js 3',     logo: icon('vuedotjs', '4FC08D'),    level: 4    },
      { name: 'Expo',         logo: icon('expo', '000020'),        level: 4    },
    ],
  },
  {
    label: 'Styling',
    skills: [
      { name: 'Tailwind CSS',   logo: icon('tailwindcss', '06B6D4'), level: 4 },
      { name: 'Framer Motion',  logo: icon('framer', '0055FF'),      level: 4 },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { name: 'Git',    logo: icon('git', 'F05032'),            level: FULL },
      { name: 'Figma',  logo: icon('figma', 'F24E1E'),          level: FULL },
      { name: 'Jira',   logo: icon('jira', '0052CC'),           level: 4    },
      { name: 'Notion', logo: icon('notion', '000000'),         level: MID  },
    ],
  },
  {
    label: 'Backend / etc',
    skills: [
      { name: 'Django', logo: icon('django', '092E20'),         level: MID },
      { name: 'Unity',  logo: icon('unity', '222222'),          level: MID },
      { name: 'AWS',    logo: '__aws__', level: MID },
    ],
  },
]

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section
      id="skills"
      style={{ padding: '100px 0', scrollMarginTop: 68 }}
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
        <SectionHeader label="Skills" title={<>기술 스택</>} inView={inView} />

        <div style={{ marginTop: 56, display: 'grid', gap: 40 }}>
          {skillGroups.map(({ label, skills }) => (
            <div key={label}>
              <p style={{
                margin: '0 0 16px',
                fontSize: 11, fontWeight: 900, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--blue)',
              }}>{label}</p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                gap: 12,
              }}>
                {skills.map(({ name, logo, level }) => (
                  <SkillCard key={name} name={name} logo={logo} level={level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ name, logo, level }: { name: string; logo: string; level: number }) {
  const [hover, setHover] = useState(false)
  const isFull = level === FULL

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: 20,
        background: hover ? 'rgba(89,111,255,0.06)' : 'rgba(255,255,255,0.85)',
        border: `1px solid ${isFull ? 'rgba(89,111,255,0.25)' : 'rgba(229,224,216,0.9)'}`,
        boxShadow: hover
          ? '0 12px 32px rgba(89,111,255,0.12)'
          : '0 4px 16px rgba(0,0,0,0.05)',
        padding: '20px 16px 18px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        cursor: 'default',
        transition: 'background 0.2s, box-shadow 0.2s, border-color 0.2s',
      }}
    >
      {/* Logo */}
      <div style={{
        width: 52, height: 52,
        borderRadius: 14,
        background: 'rgba(255,255,255,0.9)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 8,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}>
        {logo === '__aws__' ? (
          <svg viewBox="0 0 80 48" style={{ width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg">
            <text x="4" y="32" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="30" fill="#FF9900">aws</text>
            <path d="M4 40 Q40 52 76 40" stroke="#FF9900" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
          </svg>
        ) : (
          <img
            src={logo}
            alt={name}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
          />
        )}
      </div>

      {/* Name */}
      <span style={{
        fontSize: 12, fontWeight: 800, color: 'var(--ink)',
        textAlign: 'center', lineHeight: 1.3,
      }}>{name}</span>

      {/* Level dots */}
      <div style={{ display: 'flex', gap: 4 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} style={{
            width: 8, height: 8, borderRadius: '50%',
            background: i < level
              ? (isFull ? 'var(--blue)' : 'rgba(89,111,255,0.55)')
              : 'rgba(89,111,255,0.12)',
            transition: 'background 0.2s',
          }} />
        ))}
      </div>
    </div>
  )
}
