import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-zinc-50 dark:bg-zinc-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Prodigy Tech & Digital Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Prodigy Tech & Digital Services is a forward-thinking technology and digital solutions company based in Lagos, Nigeria. We help startups, SMEs and professionals build a strong digital footprint through professional web design, mobile app development, digital marketing, content creation and publishing solutions.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { label: "Office", value: "Lagos, Nigeria" },
                { label: "Service Coverage", value: "Nationwide & International" },
                { label: "Tagline", value: "Empowering Digital Growth" },
                { label: "Experience", value: "10+ years" }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-semibold text-sky-600 dark:text-sky-400">{stat.value}</div>
                  <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Request a Quote
              </a>
              <a
                href="#services"
                className="inline-flex items-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-4">
                <div className="w-full h-full mx-auto opacity-30 blur-lg filter bg-gradient-to-r from-sky-400 to-indigo-400" />
              </div>
              <img src="/images/about-image.jpg" alt="Our team at work" className="relative rounded-2xl shadow-xl" />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/10" />
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 text-center">Our Mission & Vision</h3>
          <div className="mt-6 max-w-3xl mx-auto text-center text-zinc-600 dark:text-zinc-400">
            <p className="mb-4"><strong>Mission:</strong> To empower individuals and businesses with innovative, affordable, and result-driven digital solutions that transform ideas into lasting impact.</p>
            <p><strong>Vision:</strong> To become a leading African brand in digital technology and creative innovation — bridging businesses with opportunities across the world through powerful digital presence.</p>
          </div>

          <h3 className="mt-12 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 text-center">Our Core Values</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Innovation", description: "We think ahead to deliver modern, scalable solutions." },
              { title: "Excellence", description: "We maintain the highest quality in everything we deliver." },
              { title: "Integrity", description: "We operate with transparency and professionalism." },
              { title: "Customer Success", description: "We grow only when our clients succeed." },
              { title: "Collaboration", description: "We partner with clients to achieve shared goals." }
            ].map((v, i) => (
              <div key={i} className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-sm ring-1 ring-zinc-900/5">
                <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{v.title}</h4>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
