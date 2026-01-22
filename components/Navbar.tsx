"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import siteData from "@/data/site";

interface NavbarProps {
  onNavigateHome?: () => void;
  onNavigateToBlog?: () => void;
  currentView?: 'home' | 'blog-list' | 'blog-post';
}

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Portfolio", href: "#portfolio", id: "portfolio" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Blog", href: "#blog", id: "blog" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar({ onNavigateHome, onNavigateToBlog, currentView = 'home' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState("AAA");
  const [isTyping, setIsTyping] = useState(false);

  // Typewriter animation effect
  useEffect(() => {
    const fullName = siteData.name; // "Abdul Ahad Arif"
    
    // Start animation after a brief delay
    const startDelay = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (currentIndex <= fullName.length) {
          setDisplayedText(fullName.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typeInterval);
        }
      }, 100); // 100ms per character

      return () => clearInterval(typeInterval);
    }, 500); // Wait 500ms before starting

    return () => {
      clearTimeout(startDelay);
    };
  }, [currentView]); // Trigger animation when view changes

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateHome) {
                onNavigateHome();
              }
            }}
            className="text-2xl font-bold text-gray-900 dark:text-white transition-colors cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 flex-shrink-0 min-w-[200px]"
          >
            <span className={isTyping ? 'animate-pulse' : ''}>{displayedText || 'AAA'}</span>
            <span className="text-blue-600">.</span>
          </button>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6">
              {navItems.map((item) => {
                const isBlogItem = item.id === 'blog';
                const isHomeItem = item.id === 'home';
                const isSectionLink = !isBlogItem && !isHomeItem;
                
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      if (isBlogItem) {
                        e.preventDefault();
                        if (onNavigateHome) {
                          onNavigateHome();
                          // Scroll to blog section after navigation
                          setTimeout(() => {
                            const blogSection = document.getElementById('blog');
                            if (blogSection) {
                              blogSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }, 100);
                        }
                      } else if (isHomeItem && currentView !== 'home') {
                        e.preventDefault();
                        if (onNavigateHome) {
                          onNavigateHome();
                        }
                      } else if (isSectionLink && currentView !== 'home') {
                        e.preventDefault();
                        if (onNavigateHome) {
                          onNavigateHome();
                          // Scroll to section after navigation
                          setTimeout(() => {
                            const sectionId = item.href.replace('#', '');
                            const section = document.getElementById(sectionId);
                            if (section) {
                              section.scrollIntoView({ behavior: 'smooth' });
                            }
                          }, 100);
                        }
                      }
                    }}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isBlogItem = item.id === 'blog';
              const isHomeItem = item.id === 'home';
              const isSectionLink = !isBlogItem && !isHomeItem;
              
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    setIsOpen(false);
                    if (isBlogItem) {
                      e.preventDefault();
                      if (onNavigateHome) {
                        onNavigateHome();
                        setTimeout(() => {
                          const blogSection = document.getElementById('blog');
                          if (blogSection) {
                            blogSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }
                    } else if (isHomeItem && currentView !== 'home') {
                      e.preventDefault();
                      if (onNavigateHome) {
                        onNavigateHome();
                      }
                    } else if (isSectionLink && currentView !== 'home') {
                      e.preventDefault();
                      if (onNavigateHome) {
                        onNavigateHome();
                        setTimeout(() => {
                          const sectionId = item.href.replace('#', '');
                          const section = document.getElementById(sectionId);
                          if (section) {
                            section.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }
                    }
                  }}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              );
            })}
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
