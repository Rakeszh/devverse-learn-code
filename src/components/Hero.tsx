import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code2, Gamepad2, Trophy, Zap, ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-transparent" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 hidden lg:block">
        <div className="p-3 bg-card/50 backdrop-blur-sm rounded-lg animate-float">
          <Code2 className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-32 right-16 hidden lg:block">
        <div className="p-3 bg-card/50 backdrop-blur-sm rounded-lg animate-float" style={{ animationDelay: "1s" }}>
          <Trophy className="h-6 w-6 text-accent" />
        </div>
      </div>
      <div className="absolute top-40 right-20 hidden lg:block">
        <div className="p-3 bg-card/50 backdrop-blur-sm rounded-lg animate-float" style={{ animationDelay: "2s" }}>
          <Zap className="h-6 w-6 text-warning" />
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Badge variant="secondary" className="gap-2 px-4 py-2">
            <Gamepad2 className="h-4 w-4" />
            Gamified Learning
          </Badge>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Master{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Web Development
          </span>
          <br />
          Through Interactive
          <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Coding Adventures
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of developers on an epic journey through Frontend, Backend, and Full Stack development. 
          Earn XP, unlock achievements, and build real projects that matter.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button onClick={onGetStarted} variant="premium" size="lg" className="group">
            Start Your Journey
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="group">
            <Play className="h-4 w-4" />
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">10K+</div>
            <div className="text-sm text-muted-foreground">Active Developers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Coding Challenges</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Real Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};