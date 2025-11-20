import { Palette, Code, Users, Layers, Database, Zap } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'Wireframing', 'User Research'],
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML/CSS', 'JavaScript'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Database,
      title: 'Full-Stack Development',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Human-Computer Interaction',
      skills: ['User Research', 'Usability Testing', 'Accessibility', 'Information Architecture', 'Interaction Design', 'A/B Testing'],
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      icon: Layers,
      title: 'Design Systems',
      skills: ['Component Libraries', 'Style Guides', 'Design Tokens', 'Documentation', 'Brand Identity', 'Responsive Design'],
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      icon: Zap,
      title: 'Tools & Methods',
      skills: ['Git', 'Agile/Scrum', 'CI/CD', 'Testing', 'Performance Optimization', 'Design Thinking'],
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 glass-effect rounded-full text-purple-400 mb-6">
            <span className="flex items-center gap-2">
              <Zap size={16} className="animate-pulse" />
              Skills & Expertise
            </span>
          </div>
          <h2 className="text-gray-100 mb-4 text-4xl">
            My Creative 
            <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Arsenal
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive skill set spanning design, development, and user research, 
            enabling me to deliver complete digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all group hover:scale-105 relative overflow-hidden"
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className={`relative w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-gray-100 mb-5">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-400 rounded-lg hover:bg-white/10 hover:text-gray-300 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
