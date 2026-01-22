import siteData from "@/data/site";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Passionate About Creating
            <br />
            Digital <span className="text-blue-600 dark:text-blue-400">Excellence</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {siteData.description}
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Modern, responsive, and accessible web solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Pixel-perfect UI implementation from designs</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Performance optimization and SEO best practices</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Scalable architecture for growing businesses</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 backdrop-blur-sm border border-blue-200/20 dark:border-blue-500/20 p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {siteData.stats.yearsExperience}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Years Experience
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 backdrop-blur-sm border border-purple-200/20 dark:border-purple-500/20 p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {siteData.stats.recognitions}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Recognitions & Engagements
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-500/10 to-blue-500/10 dark:from-pink-500/20 dark:to-blue-500/20 backdrop-blur-sm border border-pink-200/20 dark:border-pink-500/20 p-8 rounded-2xl text-center col-span-2 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-pink-600 dark:text-pink-400 mb-2">
                {siteData.stats.projects}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Completed Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
