
import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AIChatWidget from "@/components/AIChatWidget";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact onOpenChat={() => setIsChatOpen(true)} />
      <Footer />
      <AIChatWidget open={isChatOpen} onOpenChange={setIsChatOpen} />
      <Toaster />
    </div>
  );
};

export default Index;
