import experience from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-pink-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-100 dark:border-blue-800/50 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Experience
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
              Experience
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A journey through development, support, design, and digital
            experiences.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">

          {/* Timeline Line */}
          <div className="absolute left-[11px] sm:left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30" />

          <div className="space-y-8 sm:space-y-10">
            {experience.map((exp, index) => {
              const isWemasy = exp.company
                ?.toLowerCase()
                .includes("wemasy");

              const isABC = exp.company
                ?.toLowerCase()
                .includes("advance business");

              const isSJU = exp.company
                ?.toLowerCase()
                .includes("st. joseph");

              return (
                <div
                  key={exp.id}
                  className="relative pl-8 sm:pl-12 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-7 w-[23px] sm:w-[31px] flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

                      <div className="relative w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-white dark:bg-gray-900 border-[3px] border-blue-500 dark:border-blue-400 group-hover:border-purple-500 transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className="relative overflow-hidden rounded-2xl border border-gray-200/80 dark:border-gray-700/80 bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">

                    {/* Top Accent */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70" />

                    {/* Soft Background Glow */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative p-5 sm:p-7">

                      {/* Header */}
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                        <div>
                          <div className="flex items-center gap-3 mb-2">

                            {/* Small Icon */}
                            <div className="hidden sm:flex w-10 h-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-100 dark:border-blue-800/50">
                              <svg
                                className="w-5 h-5 text-blue-600 dark:text-blue-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={1.8}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                              </svg>
                            </div>

                            <div>
                              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                                {exp.position}
                              </h3>

                              <div className="mt-0.5 text-sm sm:text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                                {exp.company}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Period */}
                        <div className="self-start inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>

                          {exp.period}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-5 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">
                        {isWemasy
                          ? "Built and supported live web products, resolving production issues, integrations, and client-facing technical problems."
                          : isABC
                            ? "Provided IT support and managed website infrastructure, troubleshooting user issues, uptime, DNS, SSL, and CRM workflows."
                            : isSJU
                              ? "Freelance SEO support for university web platforms, improving page structure, analytics, and search visibility."
                              : exp.description}
                      </p>

                      {/* Tags */}
                      {exp.tags?.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] sm:text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-700 px-2.5 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* WEMASY Highlight */}
                      {isWemasy && (
                        <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700/70">
                          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                            <span className="w-2 h-2 rounded-full bg-green-500" />
                            Promoted from Part-time → Full-time within 3 months
                          </div>
                        </div>
                      )}

                      {/* ABC Highlight */}
                      {isABC && (
                        <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700/70">
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            IT Support · Website Administration · Infrastructure
                          </div>
                        </div>
                      )}

                      {/* SJU Highlight */}
                      {isSJU && (
                        <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700/70">
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            SEO · Google Analytics · Web Structure
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
