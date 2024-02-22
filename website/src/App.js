import About from "./components/About";
import Technologies from "./components/Technologies";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Technologies />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;