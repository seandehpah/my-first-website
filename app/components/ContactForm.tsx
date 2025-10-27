import React from "react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">Let's Work Together</h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">Ready to transform your ideas into reality? Get in touch with us and let's create something amazing together.</p>

            <dl className="mt-8 space-y-6">
              <div>
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <svg className="h-7 w-6 text-zinc-600 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75" />
                  </svg>
                  <a href="mailto:hello@prodigytechdigital.com.ng" className="ml-3 text-zinc-600 dark:text-zinc-400">hello@prodigytechdigital.com.ng</a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Phone</dt>
                <dd className="flex">
                  <svg className="h-7 w-6 text-zinc-600 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25" />
                  </svg>
                  <a href="tel:+234" className="ml-3 text-zinc-600 dark:text-zinc-400">+234 (Lagos) — available on request</a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Address</dt>
                <dd className="flex">
                  <svg className="h-7 w-6 text-zinc-600 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="ml-3 text-zinc-600 dark:text-zinc-400">Lagos, Nigeria — Remote delivery worldwide</span>
                </dd>
              </div>
            </dl>

            <div className="mt-6">
              <a href="https://wa.me/" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white">
                Chat via WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">Name</label>
                <input type="text" id="name" name="name" className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:bg-zinc-800 dark:text-zinc-100" />
              </div>
              <div>
                <label htmlFor="business" className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">Business / Organization</label>
                <input type="text" id="business" name="business" className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:bg-zinc-800 dark:text-zinc-100" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">Email</label>
                <input type="email" id="email" name="email" className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:bg-zinc-800 dark:text-zinc-100" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">Phone</label>
                <input type="tel" id="phone" name="phone" className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:bg-zinc-800 dark:text-zinc-100" />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">Service Needed</label>
              <select id="service" name="service" className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:bg-zinc-800 dark:text-zinc-100">
                <option>Web & App Development</option>
                <option>Digital Marketing & Brand Visibility</option>
                <option>Creative & Content Solutions</option>
                <option>Book Publishing & ePublishing</option>
                <option>Business Digital Setup (domain, CRM, Google Business)</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 dark:bg-zinc-800 dark:text-zinc-100" />
            </div>

            <div>
              <button type="submit" className="w-full rounded-md bg-sky-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Submit & Request Quote</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
