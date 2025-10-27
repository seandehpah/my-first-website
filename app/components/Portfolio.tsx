import React from "react";

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with real-time inventory management",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      image: "/images/portfolio/ecommerce.jpg"
    },
    {
      title: "Healthcare Dashboard",
      description: "Analytics dashboard for healthcare providers with patient insights",
      tech: ["React", "D3.js", "Node.js", "MongoDB"],
      image: "/images/portfolio/healthcare.jpg"
    },
    {
      title: "FinTech App",
      description: "Mobile-first financial technology application for personal banking",
      tech: ["React Native", "GraphQL", "AWS", "Firebase"],
      image: "/images/portfolio/fintech.jpg"
    },
    {
      title: "AI-Powered CRM",
      description: "Customer relationship management system with AI insights",
      tech: ["Python", "TensorFlow", "FastAPI", "Vue.js"],
      image: "/images/portfolio/crm.jpg"
    },
    {
      title: "Smart City Platform",
      description: "IoT platform for managing smart city infrastructure",
      tech: ["IoT", "Kubernetes", "Go", "React"],
      image: "/images/portfolio/smartcity.jpg"
    },
    {
      title: "EdTech Solution",
      description: "Online learning platform with interactive content delivery",
      tech: ["Next.js", "WebRTC", "PostgreSQL", "Redis"],
      image: "/images/portfolio/edtech.jpg"
    }
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Our Portfolio
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Discover our latest projects and success stories
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-800 shadow-md transition-all hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <div className="h-full w-full bg-zinc-100 dark:bg-zinc-700" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {project.title}
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center rounded-full bg-sky-50 dark:bg-sky-900/30 px-2.5 py-0.5 text-xs font-medium text-sky-700 dark:text-sky-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/10 dark:ring-white/10" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
