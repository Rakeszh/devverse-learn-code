import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code2, Trophy, Zap } from "lucide-react";

interface HeaderProps {
  user?: {
    name: string;
    xp: number;
    level: number;
    avatar?: string;
  };
  onAuthClick: () => void;
}

export const Header = ({ user, onAuthClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Code2 className="h-8 w-8 text-primary" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full animate-pulse" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              DevVerse
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Paths
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Community
          </a>
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-card">
                <Zap className="h-4 w-4 text-warning" />
                <span className="text-sm font-medium">{user.xp} XP</span>
              </div>
              <Badge variant="secondary" className="gap-1">
                <Trophy className="h-3 w-3" />
                Level {user.level}
              </Badge>
              <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
            </div>
          ) : (
            <Button onClick={onAuthClick} variant="hero" size="sm">
              Get Started
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};