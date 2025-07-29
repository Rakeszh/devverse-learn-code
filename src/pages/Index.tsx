import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LearningPaths } from "@/components/LearningPaths";
import { Features } from "@/components/Features";
import { AuthModal } from "@/components/AuthModal";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [user, setUser] = useState<any>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { toast } = useToast();

  const handleAuth = (userData: any) => {
    setUser(userData);
    toast({
      title: "Welcome to DevVerse! 🚀",
      description: `Ready to start your coding journey, ${userData.name}?`,
    });
  };

  const handlePathSelect = (pathId: string) => {
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }
    
    toast({
      title: "Path Selected! 🎯",
      description: "Starting your learning journey...",
    });
  };

  const handleGetStarted = () => {
    if (!user) {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header user={user} onAuthClick={() => setIsAuthModalOpen(true)} />
      
      <main>
        <Hero onGetStarted={handleGetStarted} />
        <LearningPaths onPathSelect={handlePathSelect} />
        <Features />
      </main>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuth={handleAuth}
      />
    </div>
  );
};

export default Index;
