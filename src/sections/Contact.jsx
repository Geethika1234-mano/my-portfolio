import { Mail, Linkedin } from 'lucide-react'
import { site } from '../data/site'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="rounded-3xl border border-white/10 bg-neutral-900 p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Let’s build something</h2>
            <p className="mt-2 text-neutral-300">Open to freelance and collaborations. Say hello!</p>
          </div>
          <div className="flex gap-3">
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-4 py-2 font-medium hover:bg-white/90">
              <Mail className="h-4 w-4" /> Email me
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 hover:bg-white/5">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
