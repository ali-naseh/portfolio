import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { FloatingShapes, GridPattern } from "@/components/background-animation"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 -z-20">
        <GridPattern />
        <FloatingShapes />
      </div>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
