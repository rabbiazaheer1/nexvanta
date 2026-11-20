import { About } from './components/About'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Process } from './components/Process'
import { Services } from './components/Services'
import { TechStack } from './components/TechStack'
import { WhyChoose } from './components/WhyChoose'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--background-primary)] text-[var(--text-primary)]">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-[var(--brand-teal)]"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Process />
        <TechStack />
        <Blog />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
