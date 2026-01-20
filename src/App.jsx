import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToSection from './utils/ScrollToSection';

import HotjarInitializer from './utils/HotjarInitializer';

import AbejaSeguidora from './components/AbejaSeguidora/AbejaSeguidora';
import CodyChat from './components/CodyChat';

import Navbar from './components/Navbar/Navbar';

import DesarrolloWeb from './pages/servicios/DesarrolloWeb';
import DisenoUIUX from './pages/servicios/DisenoUIUX';
import AplicacionesPWA from './pages/servicios/AplicacionesPWA';
import AutomatizacionAPIs from './pages/servicios/AutomatizacionAPIs';
import Ejemplos from './pages/servicios/Ejemplos';
import InvitacionesDigitales from './pages/servicios/InvitacionesDigitales';
import BioLinks from './pages/servicios/BioLinks';

import Hero from './components/Hero';
import CintaLogos from './components/CintaLogos/CintaLogos';
import Servicios from './components/Servicios/Servicios';
import Elegirnos from './components/Elegirnos/Elegirnos';
import Proyectos from './components/Proyectos/Proyectos';
import Testimonios from './components/Testimonios/Testimonios';

import TerminosCondiciones from './pages/TerminosCondiciones';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import Nosotros from './pages/Nosotros';
import Agendar from './pages/Agendar';

import Footer from './components/Footer/Footer';

function Home() {
  return (
    <>
      <ScrollToSection />

      <section id="inicio">
        <Hero />
      </section>

      <CintaLogos />

      <section id="servicios">
        <Servicios />
      </section>

      <Elegirnos />

      <section id="proyectos">
        <Proyectos />
      </section>

      <Testimonios />

      <section id="contacto">
        <div style={{ height: '1px' }} />
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <HotjarInitializer />
      <AbejaSeguidora />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios/desarrollo-web" element={<DesarrolloWeb />} />
          <Route path="/servicios/diseno-ui-ux" element={<DisenoUIUX />} />
          <Route path="/servicios/pwa" element={<AplicacionesPWA />} />
          <Route path="/servicios/automatizacion-apis" element={<AutomatizacionAPIs />} />
          <Route path="/servicios/ejemplos" element={<Ejemplos />} />
          <Route path="/servicios/invitaciones-digitales" element={<InvitacionesDigitales />} />
          <Route path="/servicios/bio-links" element={<BioLinks />} />
          <Route path="/terminos-y-condiciones" element={<TerminosCondiciones />} />
          <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/agendar" element={<Agendar />} />
        </Routes>
      </main>

      {/* <CodyChat /> */}
      <Footer />
    </Router>
  );
}

export default App;
