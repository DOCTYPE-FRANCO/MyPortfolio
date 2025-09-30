import React from 'react' 
import Header from "./Header.jsx"
import Stack from "./Stack.jsx";
import Contact from './Contact.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Projects from './Projects.jsx';

function App() {

  return (
    
    <div className="min-h-screen w-full relative">
        {/* Dark Horizon Glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
          }}
        />
        {/* Your Content/Components */}
        <div className="relative z-10">
          <Navbar />
          <Header />
          <Stack />
          <Projects />
          <Contact />
          <Footer />
        </div>

  
    </div>
    
    
   
  )
}

export default App
