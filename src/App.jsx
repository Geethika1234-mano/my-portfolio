import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-400">
        © {new Date().getFullYear()} Geethika Sewwandi. Built with React + Tailwind + Framer Motion.
      </footer>
    </div>
  )
}
