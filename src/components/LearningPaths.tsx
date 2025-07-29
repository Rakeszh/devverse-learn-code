import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  MonitorSpeaker, 
  Server, 
  Globe, 
  Clock, 
  Trophy, 
  Users,
  ArrowRight,
  Star
} from "lucide-react";

const learningPaths = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Master HTML, CSS, JavaScript, React, and modern frontend frameworks",
    icon: MonitorSpeaker,
    difficulty: "Beginner Friendly",
    duration: "3-4 months",
    projects: 12,
    students: "15K+",
    xpReward: 2500,
    color: "text-primary",
    bgColor: "bg-primary/10",
    modules: [
      "HTML & Semantic Markup",
      "CSS & Responsive Design", 
      "JavaScript Fundamentals",
      "React & Component Architecture",
      "State Management & APIs"
    ],
    progress: 0
  },
  {
    id: "backend",
    title: "Backend Development", 
    description: "Learn Node.js, Express, databases, APIs, and server-side technologies",
    icon: Server,
    difficulty: "Intermediate",
    duration: "4-5 months",
    projects: 10,
    students: "12K+",
    xpReward: 3000,
    color: "text-accent",
    bgColor: "bg-accent/10",
    modules: [
      "Node.js & Express Basics",
      "Database Design & Management",
      "RESTful APIs & GraphQL",
      "Authentication & Security",
      "Deployment & DevOps"
    ],
    progress: 0
  },
  {
    id: "fullstack", 
    title: "Full Stack Mastery",
    description: "Combine frontend and backend skills to build complete web applications",
    icon: Globe,
    difficulty: "Advanced",
    duration: "6-8 months", 
    projects: 15,
    students: "8K+",
    xpReward: 5000,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    modules: [
      "Full Stack Architecture",
      "Advanced React Patterns",
      "Microservices & APIs",
      "Testing & Quality Assurance",
      "Production Deployment"
    ],
    progress: 0
  }
];

interface LearningPathsProps {
  onPathSelect: (pathId: string) => void;
}

export const LearningPaths = ({ onPathSelect }: LearningPathsProps) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Learning Paths
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Coding Adventure</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Structured learning paths designed to take you from beginner to professional developer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningPaths.map((path) => {
            const IconComponent = path.icon;
            return (
              <Card 
                key={path.id} 
                className="group hover:shadow-card transition-all duration-500 hover:-translate-y-2 bg-gradient-card border-border/50"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${path.bgColor}`}>
                      <IconComponent className={`h-6 w-6 ${path.color}`} />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {path.difficulty}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {path.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {path.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{path.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-muted-foreground" />
                      <span>{path.projects} Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{path.students} Students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-warning" />
                      <span>{path.xpReward} XP</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span>{path.progress}%</span>
                    </div>
                    <Progress value={path.progress} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Key Modules:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {path.modules.slice(0, 3).map((module, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-1 w-1 bg-primary rounded-full" />
                          {module}
                        </li>
                      ))}
                      {path.modules.length > 3 && (
                        <li className="text-primary">+{path.modules.length - 3} more modules</li>
                      )}
                    </ul>
                  </div>

                  <Button 
                    onClick={() => onPathSelect(path.id)}
                    className="w-full group"
                    variant={path.progress > 0 ? "outline" : "default"}
                  >
                    {path.progress > 0 ? "Continue Learning" : "Start Path"}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};