import { About } from '../components/About'
import { Blog } from '../components/Blog'
import { CaseStudies } from '../components/CaseStudies'
import { Contact } from '../components/Contact'
import { FAQ } from '../components/FAQ'
import { FinalCTA } from '../components/FinalCTA'
import { Hero } from '../components/Hero'
import { Industries } from '../components/Industries'
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
      <CaseStudies />
      <Industries />
      <Process />
      <TechStack />
      <Blog />
      <FAQ />
      <FinalCTA />
      <Contact />
    </main>
  )
}
