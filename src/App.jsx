import { AppNavbar } from './components/AppNavbar'
import { HeroSection } from './components/HeroSection'
import { About } from './components/About'
import { Links } from './components/Links'
import { Projects } from './components/Projects'
import { DownloadResume } from './components/DownloadResume'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <AppNavbar />
      <HeroSection />
      <About />
      <Links />
      <Projects />
      <DownloadResume />
      <Footer />
    </>
  )
}

export default App
