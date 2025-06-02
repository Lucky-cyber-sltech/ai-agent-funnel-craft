
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Features } from "@/components/Features";
import { SocialProof } from "@/components/SocialProof";
import { LeadMagnet } from "@/components/LeadMagnet";
import { VideoDemo } from "@/components/VideoDemo";
import { BookingCTA } from "@/components/BookingCTA";
import { TrustSection } from "@/components/TrustSection";
import { StickyBar } from "@/components/StickyBar";
import { useEffect, useState } from "react";

const Index = () => {
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <ProblemSolution />
      <Features />
      <SocialProof />
      <LeadMagnet />
      <VideoDemo />
      <BookingCTA />
      <TrustSection />
      
      {showStickyBar && <StickyBar />}
    </div>
  );
};

export default Index;
