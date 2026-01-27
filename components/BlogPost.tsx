"use client";

import { useState } from "react";
import Image from "next/image";
import blogs from "@/data/blogs";

interface BlogPostProps {
  postId: number;
  onBackToBlog: () => void;
  onViewPost: (id: number) => void;
}

export default function BlogPost({ postId, onBackToBlog, onViewPost }: BlogPostProps) {
  const [copied, setCopied] = useState(false);
  
  const post = blogs.find(blog => blog.id === postId);
  
  if (!post) {
    return (
      <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Post Not Found
          </h1>
          <button
            onClick={onBackToBlog}
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </button>
        </div>
      </section>
    );
  }

  const relatedPosts = blogs
    .filter(blog => blog.id !== postId && blog.category === post.category)
    .slice(0, 2);

  const handleShare = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleRelatedPostClick = (id: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => onViewPost(id), 300);
  };

  return (
    <>
      {/* Toast Notification - Fixed Right Side */}
      {copied && (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 animate-slideInRight">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-6 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[280px] border-2 border-white/20 backdrop-blur-sm">
            <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-lg">Success!</p>
              <p className="text-sm text-white/90">Link copied to clipboard</p>
            </div>
          </div>
        </div>
      )}

      <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back Button */}
        <button
          onClick={onBackToBlog}
          className="mb-8 inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </button>

        {/* Hero Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          
          {/* Category Badge */}
          <div className="absolute top-6 left-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-lg">
            {post.category}
          </div>
        </div>

        {/* Post Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {post.author}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full border border-blue-100 dark:border-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Share Button */}
          <div>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share Article
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-8"></div>

        {/* Post Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {/* Excerpt as Quote */}
          <div className="bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg mb-12">
            <p className="text-xl text-gray-800 dark:text-gray-300 italic border-l-4 border-blue-500 dark:border-blue-400 pl-6">
              {post.excerpt}
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
            <p className="text-xl text-gray-800 dark:text-gray-300 leading-relaxed">
              {post.content.introduction}
            </p>
          </div>

          {/* Body */}
          {post.content.body && (
            <div className="mb-12">
              <p className="text-xl text-gray-800 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {post.content.body}
              </p>
            </div>
          )}

          {/* Challenge */}
          {post.content.challenge && (
            <div className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                The Challenge
              </h2>
              <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
                {post.content.challenge}
              </p>
            </div>
          )}

          {/* Approach */}
          {post.content.approach && post.content.approach.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                My Approach
              </h2>
              <div className="space-y-6">
                {post.content.approach.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-800 dark:text-gray-300 leading-relaxed pt-1">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          {post.content.results && post.content.results.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Key Results
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {post.content.results.map((result, index) => (
                  <div
                    key={index}
                    className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
                        {result}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Conclusion */}
          {post.content.conclusion && (
            <div className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                Conclusion
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>
          )}
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Related Articles
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((blog) => (
                <div
                  key={blog.id}
                  onClick={() => handleRelatedPostClick(blog.id)}
                  className="relative group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  
                  <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    </div>
                    
                    <div className="p-5">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-all duration-300">
                        {blog.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                        {blog.excerpt}
                      </p>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-500/10 to-transparent dark:from-purple-500/10 rounded-tl-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Enjoyed this post?</h3>
          <p className="mb-6 text-white/90 text-lg">
            Check out more of my articles and experiences
          </p>
          <button
            onClick={onBackToBlog}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            View All Posts
          </button>
        </div>
      </div>
    </section>
    </>
  );
}
