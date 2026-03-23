import React from 'react';
import { LangProvider } from './context/LangContext';

// Components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Offers from './components/Offers/Offers';
import Services from './components/Services/Services';
import Fleet from './components/Fleet/Fleet';
import Airport from './components/Airport/Airport';
import Plans from './components/Plans/Plans';
import TrustBar from './components/TrustBar/TrustBar';
import Reviews from './components/Reviews/Reviews';
import About from './components/About/About';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Map from './components/Map/Map';
import Footer from './components/Footer/Footer';
import GradientBar from './components/GradientBar';

function App() {
  return (
    <LangProvider>
      <div className="font-body">
        <Navbar />

        <main>
          <Hero />
          <GradientBar />

          <Offers />
          <GradientBar />

          <Services />
          <GradientBar />

          <Fleet />
          <GradientBar />

          <Airport />
          <GradientBar />

          <Plans />
          <GradientBar />

          <TrustBar />
          <GradientBar />

          <Reviews />
          <GradientBar />

          <About />
          <GradientBar />

          <FAQ />
          <GradientBar />

          <Contact />
          <GradientBar />

          <Map />
        </main>

        <Footer />
      </div>
    </LangProvider>
  );
}

export default App;
