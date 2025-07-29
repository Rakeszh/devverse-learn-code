import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Brain, 
  Trophy, 
  Users, 
  Zap, 
  Target,
  BookOpen,
  Gamepad2,
  Monitor
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Interactive Code Editor",
    description: "Practice coding with our built-in editor featuring syntax highlighting, live preview, and instant feedback.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Brain,
    title: "Smart Learning System",
    description: "AI-powered recommendations and adaptive learning paths that adjust to your pace and skill level.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Trophy,
    title: "Achievement System",
    description: "Earn badges, unlock rewards, and climb leaderboards as you complete challenges and projects.",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Users,
    title: "Community Learning",
    description: "Connect with fellow developers, share projects, and get help from our supportive community.",
    color: "text-warning",
    bgColor: "bg-warning/10"
  },
  {
    icon: Zap,
    title: "Real-time Feedback",
    description: "Get instant code reviews, hints, and explanations to accelerate your learning process.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Target,
    title: "Project-Based Learning",
    description: "Build real-world applications and add impressive projects to your developer portfolio.",
    color: "text-accent",
    bgColor: "bg-accent/10"
  }
];

const stats = [
  {
    icon: BookOpen,
    value: "500+",
    label: "Interactive Lessons",
    color: "text-primary"
  },
  {
    icon: Gamepad2, 
    value: "200+",
    label: "Coding Challenges",
    color: "text-secondary"
  },
  {
    icon: Monitor,
    value: "50+",
    label: "Real Projects",
    color: "text-accent"
  },
  {
    icon: Users,
    value: "10K+",
    label: "Active Learners",
    color: "text-warning"
  }
];

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="pt-6">
                  <IconComponent className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Platform Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform combines the best of interactive learning, gamification, and real-world projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-all duration-500 hover:-translate-y-1 bg-gradient-card border-border/50"
              >
                <CardHeader>
                  <div className={`w-fit p-3 rounded-lg ${feature.bgColor} mb-4`}>
                    <IconComponent className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};