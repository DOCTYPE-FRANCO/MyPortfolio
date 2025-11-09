import React from 'react' 
import Header from "./Header.jsx"
import Stack from "./Stack.jsx";
import Contact from './Contact.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Projects from './Projects.jsx';
import MatrixBackground from './MatrixBackground.jsx';
import ParticleNetworkBackground from './ParticleNetwork.jsx';
import MinimalMatrixBackground from './MinimalMatrix.jsx';
import WWM from './WWM.jsx';

function App() {

  return (
    
    <div className="min-h-screen w-full relative mx-auto overflow-hidden">
        <MatrixBackground />
        {/* Your Content/Components */}
        <div className="relative z-10">
          <Navbar />
          <Header />
          <Stack />
          <Projects />
          <WWM />
          <Contact />
          <Footer />
        </div>

  
    </div>
    
    
   
  )
}

export default App
