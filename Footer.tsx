import { Heart, Sparkles } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-gray-400">
            <span>© {currentYear} Portfolio. Crafted with</span>
            <Heart size={16} className="text-pink-500 fill-pink-500 animate-pulse" />
            <span>and a touch of</span>
            <Sparkles size={16} className="text-cyan-400" />
          </div>
          
          <div className="flex gap-8 text-gray-400">
            <a href="#home" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#home" className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Decorative gradient line */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
        
        <div className="mt-6 text-center text-gray-500">
          <p>Designed & Developed with passion for creating exceptional digital experiences</p>
        </div>
      </div>
    </footer>
  );
}
