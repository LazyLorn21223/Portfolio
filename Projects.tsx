import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform Redesign',
      description: 'Complete UI/UX redesign of a major e-commerce platform, improving conversion rates by 35% through user-centered design and extensive usability testing.',
      image: 'https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzYzNTU5ODgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['UI/UX', 'React', 'TypeScript', 'Figma'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'Healthcare Dashboard Application',
      description: 'Full-stack web application for healthcare professionals to manage patient data with a focus on accessibility and HIPAA compliance.',
      image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3NjM1MDMyODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Full-Stack', 'Node.js', 'PostgreSQL', 'Accessibility'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'Design System & Component Library',
      description: 'Comprehensive design system with 100+ components, documentation, and implementation guidelines for enterprise-level applications.',
      image: 'https://images.unsplash.com/photo-1587355760421-b9de3226a046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwZXhwZXJpZW5jZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjM1MTE1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Design Systems', 'Storybook', 'React', 'Documentation'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Mobile Banking App UX Research',
      description: 'Led comprehensive UX research project including user interviews, usability testing, and persona development for mobile banking application.',
      image: 'https://images.unsplash.com/photo-1657757996603-acec063f1d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2MzU1Mzc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['UX Research', 'HCI', 'User Testing', 'Personas'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'SaaS Platform Development',
      description: 'Built and designed a full-featured SaaS platform from scratch, including authentication, billing, and multi-tenant architecture.',
      image: 'https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzYzNTU5ODgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Full-Stack', 'Next.js', 'REST API', 'UI/UX'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Interactive Data Visualization Tool',
      description: 'Created an interactive data visualization platform that helps users explore complex datasets through intuitive visual interfaces.',
      image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3NjM1MDMyODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'D3.js', 'Data Viz', 'Frontend'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 glass-effect rounded-full text-cyan-400 mb-6">
            <span className="flex items-center gap-2">
              <Sparkles size={16} className="animate-pulse" />
              Featured Work
            </span>
          </div>
          <h2 className="text-gray-100 mb-4 text-4xl">
            Projects That
            <span className="block bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Made an Impact
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in UI/UX design, 
            frontend development, and full-stack web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all hover:scale-105"
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white flex items-center gap-1">
                  <Sparkles size={14} />
                  <span>Featured</span>
                </div>
              )}
              
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
              </div>
              
              <div className="p-6 relative">
                <h3 className="text-gray-100 mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                  >
                    <ExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
