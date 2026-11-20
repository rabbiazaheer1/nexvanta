import { About } from '../components/About'
import { Blog } from '../components/Blog'
import { Contact } from '../components/Contact'
import { FinalCTA } from '../components/FinalCTA'
import { Hero } from '../components/Hero'
import { Process } from '../components/Process'
import { Services } from '../components/Services'
import { TechStack } from '../components/TechStack'
import { WhyChoose } from '../components/WhyChoose'

export function HomePage() {
  return (
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
  )
}
