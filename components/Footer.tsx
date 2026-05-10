import siteData from "@/data/site";

interface FooterProps {
  onNavigateHome?: () => void;
  onNavigateToBlog?: () => void;
  currentView?: 'home' | 'blog-list' | 'blog-post';
}

export default function Footer({ onNavigateHome, onNavigateToBlog, currentView = 'home' }: FooterProps = {}) {
  const currentYear = new Date().getFullYear();

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (currentView !== 'home' && onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (currentView !== 'home' && onNavigateHome) {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBlogClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onNavigateToBlog) {
      onNavigateToBlog();
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (currentView !== 'home' && onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const section = document.getElementById('contact');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById('contact');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <a 
              href="#home" 
              onClick={handleLogoClick}
              className="text-2xl font-bold mb-4 inline-block hover:text-blue-400 transition-colors cursor-pointer"
            >
              {siteData.name.split(" ")[0]}.
            </a>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {siteData.subtitle}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Currently Working
                    Open to future opportunities
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{siteData.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
              <h4 className="font-semibold text-lg">Quick Links</h4>
            </div>
            <ul className="space-y-3">
              <li>
                <a href="#about" onClick={(e) => handleSectionClick(e, 'about')} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group cursor-pointer">
                  <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  About Me
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group cursor-pointer">
                  <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  Portfolio Links
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleSectionClick(e, 'portfolio')} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group cursor-pointer">
                  <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  My Work
                </a>
              </li>
              <li>
                <a href="#experience" onClick={(e) => handleSectionClick(e, 'experience')} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group cursor-pointer">
                  <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleSectionClick(e, 'contact')} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group cursor-pointer">
                  <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Let's Connect */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Let's Connect</h4>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Feel free to reach out on any platform. I'm always happy to chat about tech, projects, or opportunities!
            </p>
            <div className="space-y-3">
              {siteData.social.github && (
                <a
                  href={siteData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">GitHub</div>
                    <div className="text-sm text-white">@AhadArif</div>
                  </div>
                </a>
              )}
              {siteData.social.linkedin && (
                <a
                  href={siteData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">LinkedIn</div>
                    <div className="text-sm text-white">AhadArif</div>
                  </div>
                </a>
              )}
              {siteData.social.twitter && (
                <a
                  href={siteData.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Twitter</div>
                    <div className="text-sm text-white">@Ahad95Arif</div>
                  </div>
                </a>
              )}
              <a
                href={`mailto:${siteData.email}`}
                className="flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-sm text-white">{siteData.email}</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center p-6 bg-gray-800/30 rounded-lg">
              <div className="text-3xl mb-2">☕</div>
              <div className="text-sm text-gray-400">Fueled by Coffee</div>
            </div>
            <div className="text-center p-6 bg-gray-800/30 rounded-lg">
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-sm text-gray-400">Always Learning</div>
            </div>
            <div className="text-center p-6 bg-gray-800/30 rounded-lg">
              <div className="text-3xl mb-2">�</div>
              <div className="text-sm text-gray-400">Strategist</div>
            </div>
            <div className="text-center p-6 bg-gray-800/30 rounded-lg">
              <div className="text-3xl mb-2">🎨</div>
              <div className="text-sm text-gray-400">Design Lover</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} {siteData.name}. • Built with ❤️, 😪 , and ☕</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Resume</a>
              <span>•</span>
              <a href="#blog" onClick={handleBlogClick} className="hover:text-white transition-colors cursor-pointer">Blog</a>
              <span>•</span>
              <a href="#contact" onClick={handleContactClick} className="hover:text-white transition-colors cursor-pointer">Say Hi 👋</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
