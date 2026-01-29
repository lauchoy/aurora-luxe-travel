import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DestinationsGrid from './components/DestinationsGrid';

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <DestinationsGrid />
    </main>
  );
}
