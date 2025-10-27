import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-full border-b bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8">
              <img 
                src="/images/prodigy-logo.png" 
                alt="Prodigy Tech" 
                className="h-8 w-8 object-contain" 
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-sky-600">Prodigy Tech</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">Tech & Digital Services</div>
            </div>
          </Link>
          <nav className="flex gap-6">
            <Link href="#services" className="text-sm font-medium text-zinc-600 hover:text-sky-600 dark:text-zinc-200">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium text-zinc-600 hover:text-sky-600 dark:text-zinc-200">
              About
            </Link>
            <Link href="#portfolio" className="text-sm font-medium text-zinc-600 hover:text-sky-600 dark:text-zinc-200">
              Portfolio
            </Link>
            <Link href="#contact" className="text-sm font-medium text-zinc-600 hover:text-sky-600 dark:text-zinc-200">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
