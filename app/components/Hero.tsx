import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-br from-sky-400/40 to-blue-500/40 dark:from-sky-800/40 dark:to-blue-900/40" />
            <svg
              viewBox="0 0 800 600"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Add modern tech/digital illustrations here */}
              <path
                fill="currentColor"
                className="text-sky-600/20 dark:text-sky-400/20"
                d="M400,300 l100,-50 l100,50 l-100,50 z"
              />
              <circle
                cx="400"
                cy="300"
                r="150"
                className="fill-none stroke-current text-sky-600/20 dark:text-sky-400/20"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="lg:py-24">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl">
              Empowering Digital Growth
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              From website design to digital marketing, publishing, and brand management  we help you grow your business and presence online.
            </p>
            <div className="mt-10 flex gap-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="inline-flex items-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
