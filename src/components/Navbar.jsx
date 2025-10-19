import { useState } from 'react'
import { Github, Mail, Menu, X } from 'lucide-react'
import { site } from '../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">{site.name}</a>

          <ul className="hidden gap-8 md:flex text-sm text-neutral-300">
            {links.map(l => (
              <li key={l.href}><a className="hover:text-white transition-colors" href={l.href}>{l.label}</a></li>
            ))}
          </ul>

          <div className="hidden md:flex gap-3">
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-3 py-2 text-sm hover:bg-white/5">
              <Mail className="h-4 w-4" /> Contact
            </a>
            <a href={site.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-3 py-2 text-sm font-medium hover:bg-white/90">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm">
              {links.map(l => (
                <a key={l.href} className="rounded-xl px-3 py-2 hover:bg-white/5" href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
