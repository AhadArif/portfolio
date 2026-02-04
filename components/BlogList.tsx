"use client";

import { useState } from "react";
import Image from "next/image";
import blogs from "@/data/blogs";

interface BlogListProps {
  onViewPost: (id: number) => void;
  onBackToHome: () => void;
  initialCategory?: string;
}

export default function BlogList({ onViewPost, onBackToHome, initialCategory = "All" }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  
  const categories = [
    { name: "All", count: blogs.length },
    { name: "Achievements", count: blogs.filter(p => p.category === "Achievements").length },
    { name: "Design", count: blogs.filter(p => p.category === "Design").length },
    { name: "Tech", count: blogs.filter(p => p.category === "Tech").length },
    { name: "Insights", count: blogs.filter(p => p.category === "Insights").length },
  ];

  // Category icons mapping
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Achievements":
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
        );
      case "Design":
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        );
      case "Tech":
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        );
      case "Insights":
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18h6"></path>
            <path d="M10 22h4"></path>
            <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
          </svg>
        );
      default:
        return null;
    }
  };
  
  const filteredBlogs = selectedCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back Button */}
        <button
          onClick={onBackToHome}
          className="mb-8 inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-400 px-4 py-1 rounded-full text-sm mb-4 backdrop-blur-sm border border-blue-200 dark:border-blue-800">
            All Posts
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Check Out My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Blogs</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {filteredBlogs.length} {filteredBlogs.length === 1 ? 'post' : 'posts'} {selectedCategory !== "All" ? `in ${selectedCategory}` : ''}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-6 py-2.5 rounded-full transition-all duration-300 border-2 font-medium backdrop-blur-sm shadow-sm hover:shadow-lg transform hover:scale-105 ${
                selectedCategory === cat.name
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800/50 text-gray-900 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400'
              }`}
            >
              <span>{cat.name}</span>
              <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                selectedCategory === cat.name
                  ? 'bg-white/20 text-white'
                  : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => onViewPost(blog.id)}
              className="relative group cursor-pointer"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                {/* Blog Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-lg flex items-center gap-1.5">
                    {getCategoryIcon(blog.category)}
                    <span>{blog.category}</span>
                  </div>
                </div>

                {/* Blog Info */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-all duration-300">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-full border border-blue-100 dark:border-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Read More Button */}
                  <button className="w-full bg-gradient-to-r from-blue-500/90 to-purple-500/90 text-white px-4 py-2.5 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-purple-500/30">
                    <span className="text-sm font-medium">Read More</span>
                  </button>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-500/10 to-transparent dark:from-purple-500/10 rounded-tl-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No posts found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
