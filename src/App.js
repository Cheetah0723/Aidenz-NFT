import "./App.css"

import Navbar from "./components/navbar"
import Home from "./sections/home"
import Roadmap from "./sections/roadmap"
// import About from "./sections/about"
// import Faq from "./sections/faq"
// import Team from "./sections/team"
// import Gallery from "./sections/gallery"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Roadmap />
      {/* <About />
      <Faq />
      <Team />
      <Gallery /> */}
    </div>
  )
}

export default App
