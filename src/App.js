import React from 'react';
import { gsap } from "gsap";
import Header from './section/Header';
import Hero from './section/Hero';
import Work from './section/Work';
import About from './section/About';
import Footer from './section/Footer';

function App() {

    return(
      <div>
        <Header />
        <Hero />
        <Work />
        <About />
        <Footer />
      </div>
    );
}


export default App;
