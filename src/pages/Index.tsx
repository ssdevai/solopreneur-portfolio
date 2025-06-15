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

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatUserName, setChatUserName] = useState<string | undefined>(undefined);
  const [chatContext, setChatContext] = useState<string | undefined>(undefined);

  // Custom handler to receive user info and open chat:
  const handleOpenChat = (name: string, subject: string, message: string) => {
    setChatUserName(name);
    // Compose the project context string:
    const summary =
      subject && message
        ? `"${subject.trim()}" — ${message.trim()}`
        : subject || message || "";
    setChatContext(summary);
    setIsChatOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact onOpenChat={handleOpenChat} />
      <Footer />
      <AIChatWidget
        open={isChatOpen}
        onOpenChange={setIsChatOpen}
        userName={chatUserName}
        projectContext={chatContext}
      />
    </div>
  );
};

export default Index;
