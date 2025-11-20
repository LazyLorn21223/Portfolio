import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2, Palette } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Floating icons */}
          <div className="absolute top-0 left-10 animate-float opacity-30">
            <Code2 size={48} className="text-cyan-400" />
          </div>
          <div className="absolute top-20 right-20 animate-float opacity-30" style={{ animationDelay: '1s' }}>
            <Palette size={40} className="text-purple-400" />
          </div>
          <div className="absolute bottom-20 left-1/4 animate-float opacity-30" style={{ animationDelay: '2s' }}>
            <Sparkles size={36} className="text-pink-400" />
          </div>

          <div className="mb-8 inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-gray-300">Available for work</span>
          </div>
          
          <h1 className="mb-6 max-w-4xl mx-auto">
            <span className="block text-gray-400 text-2xl mb-4">Hello, I'm</span>
            <span className="block text-5xl sm:text-6xl md:text-7xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              UI/UX Developer
            </span>
            <span className="block text-gray-200 text-3xl sm:text-4xl md:text-5xl mt-4">
              & Designer
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful, intuitive digital experiences through the perfect blend of 
            <span className="text-cyan-400"> Human-Computer Interaction</span>, 
            <span className="text-purple-400"> Frontend Magic</span>, and 
            <span className="text-pink-400"> Full-Stack Innovation</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <span className="relative z-10 text-white flex items-center gap-2">
                Explore My Work
                <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 glass-effect text-gray-200 rounded-xl hover:bg-white/10 transition-all hover:scale-105"
            >
              Let's Connect
            </button>
          </div>

          <div className="flex justify-center gap-6 mb-16">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition-all hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-white/10 transition-all hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:hello@example.com"
              className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center text-gray-400 hover:text-pink-400 hover:bg-white/10 transition-all hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-cyan-400 transition-all animate-bounce hover:scale-110"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
