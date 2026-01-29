import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DestinationsGrid from './components/DestinationsGrid';
import SignatureExperiences from './components/SignatureExperiences';
import MembershipTiers from './components/MembershipTiers';

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <DestinationsGrid />
      <SignatureExperiences />
      <MembershipTiers />
    </main>
  );
}
