import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { site } from '../data/site'

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(59,130,246,0.15),rgba(0,0,0,0))]" />
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}
          className="text-4xl md:text-6xl font-semibold tracking-tight">
          Hi, I’m <span className="text-blue-400">Geethika Sewwandi</span> —<br className="hidden md:block" />
          I build elegant UIs and fast data apps.
        </motion.h1>

        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.7, delay:0.1}}
          className="mt-6 max-w-2xl text-neutral-300">
          Front-end engineer focused on React, performance, and delightful product experiences.
        </motion.p>

        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8, delay:0.2}}
          className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-4 py-2 font-medium hover:bg-white/90">
            See my work <ArrowRight className="h-4 w-4" />
          </a>
          <a href="/Geethika_Sewwandi_CV.pdf" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 hover:bg-white/5">
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  )
}
