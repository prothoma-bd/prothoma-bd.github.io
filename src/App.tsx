import { useState, useEffect } from 'react';
import portfolioData from '../data.json';
import type { PortfolioData } from './types';
import { Background } from './components/Layout/Background';
import { Hero } from './components/Sections/Hero';
import { Skills } from './components/Sections/Skills';
import { Projects } from './components/Sections/Projects';
import { Experience } from './components/Sections/Experience';
import { Education } from './components/Sections/Education';
import { Contact } from './components/Sections/Contact';

function App() {
  const [data, setData] = useState<PortfolioData | null>(null);

  useEffect(() => {
    setData(portfolioData as PortfolioData);
  }, []);

  if (!data) return <div className="flex justify-center items-center h-screen text-white bg-deep-space">Loading...</div>;

  return (
    <div className="min-h-screen font-sans text-white selection:bg-neon-purple/30">
      <Background />

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-deep-space/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            {data.personalInfo.name.toUpperCase()}
          </h1>
          <nav>
            <ul className="flex space-x-8 text-sm font-medium tracking-wide">
              <li><a href="#about" className="hover:text-cyan-glow transition-colors">ABOUT</a></li>
              <li><a href="#experience" className="hover:text-cyan-glow transition-colors">EXPERIENCE</a></li>
              <li><a href="#projects" className="hover:text-cyan-glow transition-colors">PROJECTS</a></li>
              <li><a href="#contact" className="hover:text-cyan-glow transition-colors">CONTACT</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 space-y-16">
        <Hero
          name={data.personalInfo.name}
          title={data.personalInfo.title}
          summary={data.personalInfo.summary}
          email={data.personalInfo.email}
          image={data.personalInfo.image}
        />

        <Skills skills={data.skills} />

        {/* Temporary placeholders for other sections to maintain structure */}
        <Experience experience={data.experience} />

        <Projects projects={data.projects} />

        <Education education={data.education} />

        <Contact
          email={data.personalInfo.email}
          phone={data.personalInfo.phone}
          location={data.personalInfo.location}
        />
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {data.personalInfo.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
