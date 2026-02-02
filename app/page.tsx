"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BlogHome from "@/components/BlogHome";
import BlogList from "@/components/BlogList";
import BlogPost from "@/components/BlogPost";

type ViewType = 'home' | 'blog-list' | 'blog-post';

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  // Smooth scroll to top when view changes
  useEffect(() => {
    if (currentView !== 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentView]);

  // Navigation functions
  const showBlogList = () => {
    setCurrentView('blog-list');
  };

  const showBlogPost = (postId: number) => {
    setSelectedPostId(postId);
    setCurrentView('blog-post');
  };

  const backToHome = () => {
    setCurrentView('home');
    setSelectedPostId(null);
  };

  const backToBlog = () => {
    setCurrentView('blog-list');
  };

  // Render based on current view
  if (currentView === 'blog-list') {
    return (
      <>
        <Navbar 
          onNavigateHome={backToHome} 
          onNavigateToBlog={showBlogList}
          currentView={currentView}
        />
        <main className="pt-16">
          <BlogList
            onViewPost={showBlogPost}
            onBackToHome={backToHome}
          />
        </main>
        <Footer onNavigateHome={backToHome} onNavigateToBlog={showBlogList} currentView={currentView} />
      </>
    );
  }

  if (currentView === 'blog-post' && selectedPostId !== null) {
    return (
      <>
        <Navbar 
          onNavigateHome={backToHome} 
          onNavigateToBlog={backToBlog}
          currentView={currentView}
        />
        <main className="pt-16">
          <BlogPost
            postId={selectedPostId}
            onBackToBlog={backToBlog}
            onViewPost={showBlogPost}
          />
        </main>
        <Footer onNavigateHome={backToHome} onNavigateToBlog={showBlogList} currentView={currentView} />
      </>
    );
  }

  // Default home view with blog section
  return (
    <>
      <Navbar 
        onNavigateHome={backToHome} 
        onNavigateToBlog={showBlogList}
        currentView={currentView}
      />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Experience />
        <BlogHome onViewAll={showBlogList} onViewPost={showBlogPost} />
        <CTA />
        <Contact />
      </main>
      <Footer onNavigateHome={backToHome} onNavigateToBlog={showBlogList} currentView={currentView} />
    </>
  );
}
