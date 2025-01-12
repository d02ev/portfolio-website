import { AppNavbar } from './components/AppNavbar'
import { HeroSection } from './components/HeroSection'
import { About } from './components/About'
import { Links } from './components/Links'
import { Projects } from './components/Projects'
import './App.css'

function App() {
  return (
    <>
      <AppNavbar />
      <HeroSection />
      <About />
      <Links />
      <Projects />
    </>
  )
}

export default App
