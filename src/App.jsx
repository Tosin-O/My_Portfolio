import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ChevronDown, 
  ExternalLink, 
  Code, 
  Database, 
  Layout, 
  Server, 
  Smartphone, 
  Terminal, 
  Cpu, 
  Globe,
  Monitor,
  GraduationCap,
  Send
} from 'lucide-react';

/* --- UTILS & HOOKS --- */

// Custom hook for scroll animations
const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isVisible];
};

// Smooth scroll handler
const handleSmoothScroll = (e, href) => {
  e.preventDefault();
  const targetId = href.replace('#', '');
  const element = document.getElementById(targetId);
   
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

// Reusable Section Heading
const SectionHeading = ({ title, subtitle, center = true }) => (
  <div className={`mb-16 ${center ? 'text-center' : 'text-left'}`}>
    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 mb-4">
      {title}
    </h2>
    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
      {subtitle}
    </p>
    <div className={`h-1 w-24 bg-purple-500 rounded-full mt-4 ${center ? 'mx-auto' : ''}`}></div>
  </div>
);

// FadeIn Wrapper Component
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
   
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* --- DATA --- */

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const SKILLS = [
  { icon: Layout, name: 'React', category: 'Frontend', level: 'Expert' },
  { icon: Code, name: 'TypeScript', category: 'Languages', level: 'Expert' },
  { icon: Layout, name: 'Tailwind CSS', category: 'Frontend', level: 'Expert' },
  { icon: Server, name: 'Node.js', category: 'Backend', level: 'Advanced' },
  { icon: Database, name: 'PostgreSQL', category: 'Backend', level: 'Advanced' },
  { icon: Terminal, name: 'Rust', category: 'Systems', level: 'Intermediate' },
  { icon: Globe, name: 'Next.js', category: 'Frontend', level: 'Advanced' },
  { icon: Cpu, name: 'System Design', category: 'Concepts', level: 'Advanced' },
  { icon: Smartphone, name: 'React Native', category: 'Mobile', level: 'Intermediate' },
  { icon: Monitor, name: 'Java Swing', category: 'Desktop', level: 'Intermediate' },
];

const EXPERIENCES = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "TechCorp",
    date: "2022 - Present",
    desc: [
      "Led development of a high-traffic, customer-facing web application.",
      "Mentored junior engineers and improved team coding standards.",
      "Architected and implemented a new microservices-based backend."
    ],
    stack: ["React", "Node.js", "AWS", "GraphQL"]
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Innovate Solutions",
    date: "2020 - 2022",
    desc: [
      "Developed and maintained features for a large scale SaaS platform.",
      "Contributed to a 20% improvement in application performance.",
      "Collaborated in an agile team to ship features bi-weekly."
    ],
    stack: ["Python", "Django", "PostgreSQL", "Vue.js"]
  },
  {
    id: 3,
    role: "Software Development Intern",
    company: "StartUp Co",
    date: "Summer 2019",
    desc: [
      "Assisted in building a new feature for the company's mobile app.",
      "Wrote unit and integration tests to ensure code quality."
    ],
    stack: ["React Native", "Firebase"]
  },
  {
    id: 4,
    role: "B.S. in Computer Science",
    company: "University of Technology",
    date: "2016 - 2020",
    desc: [
      "Graduated with honors, focusing on algorithms, data structures, and AI."
    ],
    type: "education"
  }
];

const PROJECTS = [
  {
    title: "SchoolHub",
    desc: "A desktop-style UI for managing school-related tasks, built with React and TypeScript.",
    tags: ["React", "TypeScript", "UI/UX"],
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "#",
    demo: "#"
  },
  {
    title: "Java Swing Management",
    desc: "Comprehensive management systems for various business needs, developed using Java Swing.",
    tags: ["Java", "Swing", "SQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "#",
    demo: null
  },
  {
    title: "Plated Journey App",
    desc: "A mobile application concept for food lovers to explore and document their culinary experiences.",
    tags: ["Mobile Dev", "API", "UI Design"],
    image: "https://images.unsplash.com/photo-1543362906-ac1b782b513a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "#",
    demo: "#"
  },
  {
    title: "Rust OS Kernel",
    desc: "An experimental operating system kernel written from scratch in Rust, exploring low-level systems programming.",
    tags: ["Rust", "Systems", "Kernel"],
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "#",
    demo: "#"
  }
];

/* --- COMPONENTS --- */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 shadow-lg border-b border-purple-900/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
            T
          </div>
          Tosin.
        </div>
         
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-gray-300 hover:text-purple-400 font-medium text-sm transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <button className="px-4 py-2 rounded-full border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 transition-colors text-sm font-medium">
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <div className="text-2xl">✕</div> : <div className="text-2xl">☰</div>}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-purple-900/30 py-4 px-6 flex flex-col space-y-4 shadow-2xl">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-purple-400 block py-2 border-b border-white/5 cursor-pointer"
              onClick={(e) => {
                setIsOpen(false);
                handleSmoothScroll(e, link.href);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
   
  const phrases = ["I solve problems.", "I build things for the web.", "I am a Full Stack Developer."];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const currentPhrase = phrases[textIndex];
     
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        if (displayText.length === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, phrases]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="z-10 text-center px-4 max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-purple-400 font-medium mb-4 text-lg md:text-xl tracking-wide">Hi, my name is</p>
        </FadeIn>
         
        <FadeIn delay={200}>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Obisanya Oluwatosin<span className="text-purple-500">.</span>
          </h1>
        </FadeIn>
         
        <FadeIn delay={400}>
          <div className="h-16 md:h-24 flex items-center justify-center">
            <span className="text-3xl md:text-6xl text-gray-400 font-bold font-mono">
              {displayText}
              <span className="animate-pulse text-purple-500">|</span>
            </span>
          </div>
        </FadeIn>
         
        <FadeIn delay={600}>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Innovative Full Stack Developer passionate about creating seamless and impactful web solutions. 
            Eager to leverage modern technologies to solve real-world problems.
          </p>
        </FadeIn>

        <FadeIn delay={800}>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button 
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-900/20"
            >
              View My Work
            </button>
            <button className="px-8 py-4 bg-transparent border border-purple-500 text-purple-300 hover:bg-purple-500/10 rounded-lg font-bold text-lg transition-all flex items-center gap-2">
              <span className="text-xl">⇩</span> Download CV
            </button>
          </div>
        </FadeIn>

        <FadeIn delay={1000}>
          <div className="mt-12 flex justify-center gap-6">
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <a key={i} href="#" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:-translate-y-1">
                <Icon size={28} />
              </a>
            ))}
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-10 animate-bounce text-purple-500/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative">
       <div className="absolute right-0 top-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[100px] pointer-events-none"></div>
       
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <FadeIn>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 p-4 rounded-2xl">
                 <div className="aspect-[4/5] bg-slate-800 rounded-lg overflow-hidden relative">
                   {/* Placeholder for Profile Image */}
                   <div className="absolute inset-0 flex items-center justify-center text-slate-700 bg-slate-900">
                     <span className="text-6xl">👤</span>
                   </div>
                   <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Profile" 
                      className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                    />
                  </div>
              </div>
            </div>
          </FadeIn>

          {/* Text Side */}
          <FadeIn delay={200}>
            <div>
              <p className="text-purple-400 font-bold tracking-widest text-sm mb-4 uppercase">About Tosin</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Crafting digital experiences with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">purpose</span> and passion.
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                I'm a multi-disciplinary software engineer with a love for building intuitive, efficient, and beautiful applications. My journey is driven by a deep-seated curiosity that spans from user-centric frontends to robust backend systems.
              </p>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                I believe great software is born at the intersection of powerful engineering and thoughtful design, which is why I have a deep appreciation for UI/UX principles.
              </p>

              <div className="mb-8">
                <p className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">My Stack Includes</p>
                <div className="flex flex-wrap gap-3">
                  {['Web Development', 'Mobile Apps', 'Rust', 'UI/UX Design', 'Systems Programming'].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-purple-900/30 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button 
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-bold shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 transition-all transform hover:-translate-y-1"
              >
                Let's Connect →
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-950/50 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <FadeIn>
          <SectionHeading 
            title="Tech Stack & Skills" 
            subtitle="A curated list of technologies I leverage to build modern, efficient, and scalable applications." 
          />
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {SKILLS.map((skill, index) => (
            <FadeIn key={skill.name} delay={index * 50}>
              <div className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-slate-800/60 hover:border-purple-500/30 transition-all duration-300 group aspect-square">
                <div className="mb-4 p-3 rounded-xl bg-purple-900/20 text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-colors">
                  <skill.icon size={32} />
                </div>
                <h3 className="text-white font-semibold mb-1">{skill.name}</h3>
                <p className="text-xs text-gray-500">{skill.category}</p>
                 
                {/* Dot indicator */}
                <div className={`absolute top-3 right-3 w-2 h-2 rounded-full ${
                   skill.level === 'Expert' ? 'bg-green-400' : 
                   skill.level === 'Advanced' ? 'bg-blue-400' : 'bg-purple-400'
                } shadow-[0_0_8px_currentColor]`}></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <SectionHeading 
            title="My Journey" 
            subtitle="Tracing my path of growth, challenges, and achievements in the world of technology."
          />
        </FadeIn>

        <div className="relative mt-20">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 to-transparent opacity-30"></div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <FadeIn key={exp.id} delay={index * 100}>
                <div className={`flex flex-col md:flex-row gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                   
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-purple-500 z-10 shadow-[0_0_10px_#a855f7] mt-6 md:mt-0"></div>

                  {/* Content Card */}
                  <div className="md:w-1/2 pl-8 md:pl-0">
                    <div className={`bg-slate-900/40 border border-white/5 p-6 rounded-2xl hover:border-purple-500/20 transition-all ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-purple-400 font-bold text-sm tracking-wider uppercase">{exp.date}</span>
                        {exp.type === 'education' && <GraduationCap size={16} className="text-gray-500" />}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-gray-400 mb-4 font-medium">{exp.company}</p>
                       
                      <ul className="space-y-2 mb-6">
                        {exp.desc.map((item, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-400">
                            <span className="mr-2 text-purple-500">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      {exp.stack && (
                        <div className="flex flex-wrap gap-2">
                          {exp.stack.map(tech => (
                            <span key={tech} className="px-2 py-1 bg-purple-900/20 text-purple-300 text-xs rounded border border-purple-500/10">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                   
                  {/* Empty side for layout balance */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950/50">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionHeading 
            title="My Creative Works" 
            subtitle="A collection of projects where I've turned complex problems into elegant, user-centric solutions." 
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <FadeIn key={index} delay={index * 150}>
              <div className="group relative bg-slate-900 border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/20 h-full flex flex-col">
                 
                {/* Image Container */}
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-800 text-purple-300 text-xs font-semibold rounded-full border border-purple-500/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-white/5">
                      {project.demo && (
                       <a href={project.demo} className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold rounded-lg transition-colors">
                         Live Demo <ExternalLink size={14} />
                       </a>
                      )}
                    <a href={project.github} className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-gray-300 text-sm font-bold rounded-lg transition-colors">
                      GitHub <Code size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/10 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="bg-slate-800/50 backdrop-blur-lg border border-white/10 p-8 md:p-16 rounded-3xl text-center shadow-2xl relative overflow-hidden">
             {/* Decorative glow */}
             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
             
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
               Let's build something <span className="text-purple-400">great</span> together.
             </h2>
             <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
               I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
             </p>

             {/* The Mailto Button */}
             <a 
               href="mailto:codewithtosin@gmail.com?subject=Project%20Inquiry&body=Hi%20Tosin,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20wanted%20to%20connect."
               className="inline-flex group relative px-8 py-4 bg-slate-950 text-white rounded-full font-bold text-lg overflow-hidden border border-purple-500/30 hover:border-purple-500 transition-colors"
             >
               <span className="relative z-10 flex items-center gap-3">
                 <Mail className="group-hover:text-purple-400 transition-colors" />
                 Say Hello
               </span>
               <div className="absolute inset-0 bg-purple-900/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
             </a>

             <div className="mt-12 pt-12 border-t border-white/5">
               <p className="text-gray-500 text-sm mb-6">Or find me on other platforms</p>
               <div className="flex justify-center gap-6">
                 {[
                   { icon: Github, href: "#" },
                   { icon: Linkedin, href: "#" },
                   { icon: Send, href: "#" }
                 ].map((social, i) => (
                   <a 
                     key={i} 
                     href={social.href} 
                     className="w-12 h-12 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 hover:border-transparent transition-all duration-300 transform hover:scale-110"
                   >
                     <social.icon size={20} />
                   </a>
                 ))}
               </div>
             </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 bg-slate-950 border-t border-white/5 text-center">
    <div className="flex justify-center gap-8 mb-4">
        {['Home', 'About', 'Projects', 'Contact'].map(item => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => handleSmoothScroll(e, `#${item.toLowerCase()}`)}
              className="text-gray-500 hover:text-purple-400 text-sm transition-colors cursor-pointer"
            >
              {item}
            </a>
        ))}
    </div>
    <div className="flex justify-center gap-4 text-gray-600 mb-4">
      <Github size={18} />
      <Linkedin size={18} />
    </div>
    <p className="text-gray-600 text-sm">
      © 2024 Obisanya Oluwatosin. All Rights Reserved.
    </p>
  </footer>
);

/* --- APP COMPONENT --- */

const App = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-purple-500/30 selection:text-purple-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;