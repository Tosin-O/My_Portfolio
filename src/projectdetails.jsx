import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  CheckCircle, 
  Zap, 
  BookOpen 
} from 'lucide-react';
import weatherImg from './assets/weather.png';
import weatherImg2 from './assets/weather2.png';
import weatherImg3 from './assets/weather3.png';

/* UTILS & SHARED COMPONENTS  */

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

const TargetIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);







const ProjectDetails = () => {
  const navigate = useNavigate();
    
    const project = {
        title: "Weather App",
        desc: "A sleek, responsive weather dashboard built with React that delivers real-time forecasts and environmental data for any location globally.",
        role: "Full-Stack Developer",
        timeline: "2 Weeks",
        problem: "Users often struggle with weather apps that are either too cluttered with ads or lack detailed information beyond simple temperature readings. I wanted to create a solution that was clean, minimalist, yet information-rich, providing critical data like humidity, wind speed, and 5-day forecasts at a glance.",
        features: [
            "Real-time weather data fetching via OpenWeatherMap API",
            "Automatic location detection using Geolocation API",
            "Dynamic background changing based on weather conditions (e.g., rainy, sunny)",
            "5-day forecast visualization",
            "Search functionality with autocomplete for cities",
            "Responsive design for mobile and desktop",
            "Toggle between Celsius and Fahrenheit"
        ],
        learned: "Building this project deepened my understanding of handling asynchronous API calls and managing complex state in React. I learned how to gracefully handle API errors and optimize performance by debouncing search inputs. Additionally, implementing the dynamic background required a thoughtful approach to CSS and state mapping.",
        stack: ["React", "OpenWeatherMap API", "Tailwind CSS", "Axios", "Phosphor Icons"],
        screenshots: [
            weatherImg, 
            weatherImg2, 
            weatherImg3
        ],
        demo: "https://weather-app-six-sigma-tgsrby31ss.vercel.app/",
        github: "https://github.com/Tosin-O/WeatherApp"
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 pt-24 pb-12 px-6 text-slate-200 font-sans selection:bg-purple-500/30 selection:text-purple-200">
            <div className="max-w-5xl mx-auto">
                {/* Back Button */}
                <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-purple-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Projects
        </button>

                {/* Hero Section */}
                <FadeIn>
                    <div className="mb-16">
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-8">
                            {project.desc}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 mb-10">
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noreferrer" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold flex items-center gap-2 transition-all">
                                    Live Demo <ExternalLink size={18} />
                                </a>
                            )}
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noreferrer" className="px-6 py-3 border border-white/20 hover:bg-white/10 text-white rounded-lg font-bold flex items-center gap-2 transition-all">
                                    GitHub Repo <Github size={18} />
                                </a>
                            )}
                        </div>

                        {/* Main Image */}
                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20 aspect-video relative">
                            <img src={project.screenshots[0]} alt="Main Screenshot" className="w-full h-full object-cover" />
                             <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                        </div>
                    </div>
                </FadeIn>

                {/* Content Grid */}
                <div className="grid md:grid-cols-3 gap-12">
                    {/* Main Content Column */}
                    <div className="md:col-span-2 space-y-16">
                        
                        <FadeIn delay={100}>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    <TargetIcon className="text-purple-500" /> The Problem
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    {project.problem}
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={200}>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                    <Zap className="text-purple-500" /> Key Features
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {project.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3 p-4 bg-slate-900/50 rounded-xl border border-white/5">
                                            <CheckCircle className="text-purple-400 shrink-0 mt-1" size={18} />
                                            <span className="text-gray-300 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={300}>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    <BookOpen className="text-purple-500" /> What I Learned
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-lg border-l-4 border-purple-500/50 pl-6">
                                    {project.learned}
                                </p>
                            </div>
                        </FadeIn>

                    </div>

                    {/* Sidebar Column */}
                    <div className="space-y-8">
                        <FadeIn delay={150}>
                            <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6">
                                <h4 className="text-white font-bold mb-4">Project Info</h4>
                                <div className="space-y-4 text-sm">
                                    <div className="flex justify-between py-2 border-b border-white/5">
                                        <span className="text-gray-500">Role</span>
                                        <span className="text-purple-300 font-medium">{project.role}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-white/5">
                                        <span className="text-gray-500">Timeline</span>
                                        <span className="text-purple-300 font-medium">{project.timeline}</span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={250}>
                            <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6">
                                <h4 className="text-white font-bold mb-4">Technologies</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-purple-900/30 border border-purple-500/20 text-purple-300 text-xs rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Extra Screenshots */}
                <FadeIn delay={400}>
                    <div className="mt-20">
                        <h3 className="text-2xl font-bold text-white mb-8">Project Gallery</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {project.screenshots.slice(1).map((img, i) => (
                                <div key={i} className="rounded-xl overflow-hidden border border-white/10 group">
                                    <img src={img} alt={`Screenshot ${i + 2}`} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default ProjectDetails;