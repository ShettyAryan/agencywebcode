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
import { SEO } from './components/SEO';

function HomePage() {
  return (
    <>
      <SEO 
        title="ConstructDev - Digital Solutions That Drive Success"
        description="Transform your vision into immersive digital experiences with ConstructDev. Expert web development, SEO optimization, branding, and AI integration services. Your trusted tech partner for cutting-edge solutions."
        url="/"
      />
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

function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact Us - Book a Meeting | ConstructDev"
        description="Book a meeting with ConstructDev to discuss your digital transformation needs. Get expert consultation on web development, SEO, branding, and AI integration services."
        url="/contact"
      />
      <Contact />
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
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}