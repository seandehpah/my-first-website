import React from "react";

const services = [
  {
    title: "Web & App Development",
    description: "Comprehensive web and mobile solutions for businesses looking to establish a strong digital presence.",
    features: [
      "Website design (corporate, eCommerce, portfolio, NGO, personal)",
      "Web app and mobile app development",
      "Hosting & backend management",
      "Domain registration and business email setup",
      "Website maintenance and SEO optimization"
    ]
  },
  {
    title: "Digital Marketing & Brand Visibility",
    description: "Strategic digital marketing solutions to enhance your brand presence and reach your target audience effectively.",
    features: [
      "Social media account creation & management (FB, IG, X, LinkedIn, TikTok)",
      "Paid ads (Google Ads, Meta Ads)",
      "Email marketing campaigns",
      "Content writing & digital flyer design",
      "Brand storytelling and visual content strategy",
      "Analytics and performance tracking"
    ]
  },
  {
    title: "Creative & Content Solutions",
    description: "Professional content creation and design services to enhance your brand communication and visual identity.",
    features: [
      "Copywriting (web content, blog posts, business bios)",
      "Graphic design and branding materials",
      "Product or service video ads (shorts, reels, promo videos)",
      "Corporate presentations and pitch deck design"
    ]
  },
  {
    title: "Book Publishing & ePublishing",
    description: "Complete publishing services to help authors bring their books to market professionally and effectively.",
    features: [
      "Book editing, formatting & cover design",
      "Publishing to Amazon KDP & IngramSpark",
      "Author brand page setup & social media integration",
      "Marketing campaigns for published books"
    ]
  },
  {
    title: "Business Enhancement Add-ons",
    description: "Additional services designed to optimize and streamline your business operations in the digital space.",
    features: [
      "Business profile and proposal writing",
      "CRM setup (HubSpot, Zoho, etc.)",
      "Business automation and chatbot integration",
      "Google Business Profile setup",
      "Basic IT support & website recovery"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-zinc-50 dark:bg-zinc-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Comprehensive digital solutions to help your business thrive in the digital era
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-white/10">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{service.title}</h3>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">{service.description}</p>
              <ul className="mt-6 space-y-2">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-5 w-5 flex-none text-sky-600 dark:text-sky-400 mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-zinc-600 dark:text-zinc-400">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#contact" className="inline-flex items-center rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
            Get Started with Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
