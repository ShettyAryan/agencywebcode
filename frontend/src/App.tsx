import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Reasons } from './components/Reasons';
import { Services } from './components/Services';
import { Works } from './components/Works';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Reasons />
      <Services />
      <Works />
      <Testimonials />
      <CTA />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}