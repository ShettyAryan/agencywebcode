import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Reasons } from './components/Reasons';
import { Services } from './components/Services';
import { Works } from './components/Works';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <Stats />
        <Reasons />
        <Services />
        <Works />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}