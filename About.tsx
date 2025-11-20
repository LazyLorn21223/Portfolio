import { ImageWithFallback } from './figma/ImageWithFallback';
import { TrendingUp, Award, Users, Zap } from 'lucide-react';

export function About() {
  const stats = [
    { icon: TrendingUp, label: 'Experience', value: '5+ Years' },
    { icon: Award, label: 'Completed', value: '50+ Projects' },
    { icon: Users, label: 'Worldwide', value: '15+ Clients' },
    { icon: Zap, label: 'Satisfaction', value: '100%' },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-2 glass-effect rounded-full text-cyan-400 mb-6">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                About Me
              </span>
            </div>
            
            <h2 className="text-gray-100 mb-6 text-4xl">
              Turning Ideas Into 
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Beautiful Reality
              </span>
            </h2>
            
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I'm a passionate <span className="text-cyan-400">UI/UX Developer and Designer</span> with a strong foundation in 
                Human-Computer Interaction. My work focuses on creating digital experiences that are not only 
                visually stunning but also intuitively crafted for real users.
              </p>
              <p>
                With expertise spanning from <span className="text-purple-400">frontend wizardry</span> to 
                <span className="text-pink-400"> full-stack architecture</span>, I bring a unique perspective to every project. 
                I understand both the technical constraints and the design possibilities, allowing me to create 
                solutions that are both beautiful and bulletproof.
              </p>
              <p>
                My approach combines <span className="text-cyan-400">user research</span>, 
                <span className="text-purple-400"> interaction design</span>, and 
                <span className="text-pink-400"> modern development practices</span> to deliver products that 
                users love and businesses value. Great design should be invisible—it just works.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all group hover:scale-105"
                  >
                    <Icon className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform" size={24} />
                    <div className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-500">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative group">
              {/* Gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1657757996603-acec063f1d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2MzU1Mzc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Workspace"
                  className="rounded-3xl shadow-2xl w-full h-96 object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent rounded-3xl opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
