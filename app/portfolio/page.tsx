import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio Links | Abdul Ahad Arif",
  description:
    "A curated set of content and design portfolio folders for Clevertize blogs and Wemasy design work.",
  keywords: ["portfolio", "content design", "clevertize", "wemasy", "google drive"],
};

const portfolioLinks = [
  {
    title: "Content & Blogs",
    subtitle: "St Joseph's University SEO + Clevertize writing",
    description:
      "A collection of content, SEO, and blog work shaped through the internship and later content-focused work for Clevertize.",
    href: "https://drive.google.com/drive/u/1/folders/1tLF0aerT1o424s0nEXMmvomYaqEJdiEH",
    image: "/images/blog-4.png",
    tag: "Content",
  },
  {
    title: "Design Portfolio",
    subtitle: "Wemasy design and visual work",
    description:
      "Design-focused portfolio materials and visual assets created for Wemasy.",
    href: "https://drive.google.com/drive/folders/1AO0jWwqclp7fJ9zT5xN_J0Ig_ydZqS7G?usp=drive_link",
    image: encodeURI(
      "/images/Have you noticed how some websites feel easier to manage than others___It_s rarely about having fewer tools._It_s about how clearly everything works togethe(.jpg"
    ),
    tag: "Design",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        <div className="absolute inset-0 pointer-events-none opacity-70">
          <div className="absolute -top-10 left-1/4 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-cyan-200 backdrop-blur">
                Portfolio Links
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                Content and design work, collected in one place.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Use these links to view my selected content, blog, and design folders on Google Drive.
                If you want the site to feature direct file embeds later, I can wire those in once the
                individual public file links are available.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Back Home
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {portfolioLinks.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
                    {item.tag}
                  </div>
                </div>

                <div className="space-y-4 p-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                    <p className="mt-1 text-sm font-medium text-cyan-200">{item.subtitle}</p>
                  </div>
                  <p className="text-sm leading-6 text-slate-300">{item.description}</p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                    >
                      Open Folder
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300 backdrop-blur">
            These links are the fastest way to review the work right now. If you send direct public file URLs for the
            images you want featured, I can turn this into a richer gallery page with actual embeds instead of folder links.
          </div>
        </div>
      </section>
    </main>
  );
}
