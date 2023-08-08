import About from "./components/about/About"
import Landing from "./components/landing/Landing"
import Navigation from "./components/nav/Navigation"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"

function App() {
  return (
    <>
      <Navigation />
      <Landing />
      <About />
      <Skills />
      <Projects />
    </>
  )
}

export default App
