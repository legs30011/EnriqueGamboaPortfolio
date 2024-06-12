import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PixelArtBackground from './components/PixelArt';
import ThreeDVisual from './components/ThreeVisuals';
import WorkExperience from './components/WorkExperience';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Header />
          <About />
          <WorkExperience />
          <Projects />
          <ThreeDVisual />
          <div className="relative z-0"></div>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
