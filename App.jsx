import { useState } from 'react';
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail,
  Menu, X, Code2, Sparkles, GraduationCap, ExternalLink,
  Braces, Terminal, Layers3
} from 'lucide-react';
import { profile, skills, projects, education, certificates } from './data.js';

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-description">{text}</p>}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    ['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'],
    ['Education', '#education'], ['Contact', '#contact']
  ];

  return (
    <div className="app-shell">
      <header className="site-header">
        <nav className="navbar wrap">
          <a className="brand" href="#home" aria-label="Go to homepage">
            <span className="brand-mark"><Code2 size={20} /></span>
            <span>prachi<span className="brand-dot">.</span></span>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
          <div className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a className="nav-contact" href={`mailto:${profile.email}`}>Let's talk <ArrowUpRight size={15} /></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span /> OPEN TO LEARNING & OPPORTUNITIES</div>
            <p className="hero-kicker">HELLO, I'M {profile.name.toUpperCase()}</p>
            <h1>Curious mind.<br /><em>Creative builder.</em></h1>
            <p className="hero-description">{profile.intro}</p>
            <div className="hero-buttons">
              <a className="btn btn-dark" href="#projects">Explore projects <ArrowDownRight size={17} /></a>
              <a className="btn btn-outline" href={`mailto:${profile.email}`}><Mail size={16} /> Get in touch</a>
            </div>
            <div className="social-row">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <span className="social-location">{profile.location}</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Developer illustration">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="code-window">
              <div className="window-bar"><span /><span /><span /><b>prachi.dev</b></div>
              <div className="code-lines">
                <p><span className="code-purple">const</span> developer = {'{'}</p>
                <p className="indent"><span className="code-blue">name</span>: <span className="code-green">'Prachi'</span>,</p>
                <p className="indent"><span className="code-blue">focus</span>: <span className="code-green">'Web Dev'</span>,</p>
                <p className="indent"><span className="code-blue">learning</span>: <span className="code-green">'MERN'</span></p>
                <p>{'}'};</p>
                <p className="code-comment">// building one idea at a time ✦</p>
              </div>
            </div>
            <div className="float-chip chip-react"><Braces size={16} /> React</div>
            <div className="float-chip chip-python"><Terminal size={16} /> Python</div>
            <div className="float-chip chip-stack"><Layers3 size={16} /> Full-stack learner</div>
            <div className="hero-art-caption"><Sparkles size={15} /> LEARN · BUILD · REPEAT</div>
          </div>
        </section>

        <section className="section wrap" id="about">
          <SectionHeading eyebrow="01 / A LITTLE ABOUT ME" title={<>A learner with a <em>builder's mindset.</em></>} text="Growing my skills by exploring, experimenting, and creating." />
          <div className="about-layout">
            <div className="about-feature">
              <span className="quote-mark">“</span>
              <h3>Ideas become better when you build them.</h3>
              <p>{profile.about}</p>
              <div className="about-location"><span className="location-dot" /> Based in {profile.location}</div>
            </div>
            <div className="principles">
              <article><span>01</span><div><h3>Stay curious</h3><p>Keep exploring tools, concepts, and better ways to build.</p></div></article>
              <article><span>02</span><div><h3>Learn by doing</h3><p>Practise concepts through small projects and experiments.</p></div></article>
              <article><span>03</span><div><h3>Keep improving</h3><p>Build strong fundamentals one step at a time.</p></div></article>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="wrap">
            <SectionHeading eyebrow="02 / MY TOOLKIT" title={<>Skills in progress, <em>ideas in motion.</em></>} text="A transparent snapshot of the technologies I'm learning and practising." />
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <article className="skill-card" key={skill.name}>
                  <div className="skill-card-head"><span className="skill-index">0{index + 1}</span><Code2 size={20} /></div>
                  <h3>{skill.name}</h3>
                  <p>{skill.level}</p>
                  <span className="skill-pill">{skill.status}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section wrap" id="projects">
          <SectionHeading eyebrow="03 / SELECTED WORK" title={<>Small steps. <em>Real projects.</em></>} text="A couple of projects that represent my learning and creative interests." />
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-art project-art-${project.number}`}>
                  <div className="project-art-top"><span>{project.number} / PROJECT</span><Code2 size={20} /></div>
                  {project.number === '01' ? (
                    <div className="mini-browser"><div className="mini-browser-top"><i /><i /><i /></div><div className="mini-browser-content"><span>HELLO, I'M PRACHI</span><b>Designing my<br />digital space.</b><div className="mini-line" /><div className="mini-pills"><i /><i /><i /></div></div></div>
                  ) : (
                    <div className="photo-layout"><div className="photo-tile photo-large"><span>01</span></div><div className="photo-side"><div className="photo-tile"><span>02</span></div><div className="photo-tile"><span>03</span></div></div></div>
                  )}
                </div>
                <div className="project-content">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tech-list">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                  <div className="project-actions">
                    {project.github && <a href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> View code <ExternalLink size={14} /></a>}
                    {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15} /></a>}
                    {!project.github && !project.demo && <span className="link-pending">Project link to be added</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="wrap">
            <SectionHeading eyebrow="04 / MY JOURNEY" title={<>Learning is the <em>foundation.</em></>} text="Education and achievements that are part of my journey." />
            <div className="education-layout">
              <div className="education-list">
                {education.map((item, index) => (
                  <article className="education-card" key={item.title}>
                    <div className="education-icon"><GraduationCap size={21} /></div>
                    <div className="education-info"><span className="education-label">EDUCATION 0{index + 1}</span><h3>{item.title}</h3><p>{item.place}</p><span className="education-date">{item.date}</span></div>
                  </article>
                ))}
              </div>
              <div className="certificate-panel">
                <p className="eyebrow">CERTIFICATES & ACHIEVEMENTS</p>
                <h3>Always learning something new.</h3>
                {certificates.map((item) => (
                  <div className="certificate-item" key={item.title}>
                    <div className="certificate-icon"><Sparkles size={18} /></div>
                    <div><h4>{item.title}</h4><p>{item.issuer}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section wrap contact-section" id="contact">
          <div className="contact-panel">
            <div>
              <p className="eyebrow">05 / SAY HELLO</p>
              <h2>Have an opportunity?<br /><em>Let's connect.</em></h2>
              <p className="contact-text">For opportunities, collaboration, or a friendly hello, find me through email or social media.</p>
            </div>
            <div className="contact-links">
              <a className="contact-email" href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email} <ArrowUpRight size={16} /></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub <ArrowUpRight size={15} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <a className="brand" href="#home"><span className="brand-mark"><Code2 size={18} /></span><span>prachi<span className="brand-dot">.</span></span></a>
          <p>Designed with curiosity by {profile.name} · © {new Date().getFullYear()}</p>
          <a className="back-top" href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
