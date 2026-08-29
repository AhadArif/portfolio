export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
      <div className="absolute inset-0 opacity-30 animate-gradient-pulse">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white/20 rounded-lg rotate-12 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border-4 border-white/20 rounded-full animate-pulse" style={{ animationDelay: '500ms' }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-lg -rotate-12 backdrop-blur-sm"></div>
      <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-white/10 rounded-full backdrop-blur-sm"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-md rounded-full mb-8 animate-gentle-bounce shadow-2xl border-2 border-white/30">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Let's Connect and Create Something
            <br />
            Amazing
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10 drop-shadow">
            I'm always excited to discuss new opportunities, collaborate on interesting
            projects, or just have a chat about web development and design. Feel free
            to reach out!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg transition-all duration-300 hover:bg-gray-100 font-medium inline-flex items-center gap-2 shadow-2xl hover:scale-110 hover:shadow-white/50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg transition-all duration-300 hover:bg-white/20 backdrop-blur-sm font-medium inline-flex items-center gap-2 shadow-2xl hover:scale-110"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              View My Work
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 border-t border-white/30">
            <div className="backdrop-blur-sm bg-white/10 p-6 sm:p-8 rounded-xl border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2 drop-shadow-lg">2+</div>
              <div className="text-white/80 text-sm sm:text-base">Experience</div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 p-6 sm:p-8 rounded-xl border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2 drop-shadow-lg">10+</div>
              <div className="text-white/80 text-sm sm:text-base">Projects Built</div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 p-6 sm:p-8 rounded-xl border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2 drop-shadow-lg">2</div>
              <div className="text-white/80 text-sm sm:text-base">Internships</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
