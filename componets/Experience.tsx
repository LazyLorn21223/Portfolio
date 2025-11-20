import { Briefcase, GraduationCap } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      type: 'work',
      title: 'Senior UI/UX Developer',
      organization: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Leading UI/UX development for enterprise applications, managing a team of 5 designers and developers. Implemented design systems and improved user satisfaction by 40%.',
      highlights: [
        'Led redesign of flagship product',
        'Established design system standards',
        'Mentored junior developers',
      ],
    },
    {
      type: 'work',
      title: 'Full-Stack Developer',
      organization: 'Digital Solutions Co.',
      period: '2020 - 2022',
      description: 'Developed and maintained full-stack web applications using React, Node.js, and PostgreSQL. Collaborated with UX team to ensure seamless user experiences.',
      highlights: [
        'Built 15+ web applications',
        'Improved application performance by 50%',
        'Implemented CI/CD pipelines',
      ],
    },
    {
      type: 'work',
      title: 'UI/UX Designer',
      organization: 'Creative Studio',
      period: '2019 - 2020',
      description: 'Designed user interfaces and conducted user research for various client projects. Specialized in mobile app design and responsive web applications.',
      highlights: [
        'Designed 20+ mobile applications',
        'Conducted 100+ user interviews',
        'Created comprehensive design systems',
      ],
    },
    {
      type: 'education',
      title: 'Master of Science in Human-Computer Interaction',
      organization: 'University of Technology',
      period: '2017 - 2019',
      description: 'Focused on user-centered design, interaction design, and usability evaluation. Thesis on "Adaptive Interfaces for Enhanced User Experience".',
      highlights: [
        'GPA: 3.9/4.0',
        'Research published in CHI conference',
        'Teaching Assistant for UX courses',
      ],
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      organization: 'State University',
      period: '2013 - 2017',
      description: 'Concentration in software engineering and web development. Active member of the Computer Science Society and UX Design Club.',
      highlights: [
        'Magna Cum Laude',
        'Winner of Hackathon 2016',
        'President of UX Design Club',
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 glass-effect rounded-full text-purple-400 mb-6">
            <span className="flex items-center gap-2">
              <Briefcase size={16} className="animate-pulse" />
              Experience & Education
            </span>
          </div>
          <h2 className="text-gray-100 mb-4 text-4xl">
            My Professional
            <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Combining education in Human-Computer Interaction 
            with practical experience in design and development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line with gradient */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20 group">
                {/* Timeline dot with gradient */}
                <div className={`absolute left-4 w-9 h-9 rounded-xl flex items-center justify-center glass-effect ${
                  exp.type === 'work' 
                    ? 'bg-gradient-to-br from-cyan-500 to-blue-500' 
                    : 'bg-gradient-to-br from-purple-500 to-pink-500'
                } shadow-lg group-hover:scale-110 transition-transform`}>
                  {exp.type === 'work' ? (
                    <Briefcase className="text-white" size={18} />
                  ) : (
                    <GraduationCap className="text-white" size={18} />
                  )}
                </div>

                <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all group-hover:scale-[1.02]">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <h3 className="text-gray-100">{exp.title}</h3>
                    <span className={`mt-2 sm:mt-0 px-3 py-1 rounded-lg text-sm ${
                      exp.type === 'work'
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                        : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    }`}>
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="text-gray-400 mb-4">{exp.organization}</div>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3 text-gray-400">
                        <span className="text-cyan-400 mt-1.5 flex-shrink-0">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
