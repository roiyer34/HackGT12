import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GameCard from "@/components/GameCard";
import Navigation from "@/components/Navigation";
import { Play, BarChart3, Trophy, Users } from "lucide-react";
import heroImage from "@/assets/hero-sports.jpg";

const Home = () => {
  const featuredGames = [
    {
      homeTeam: "Lakers",
      awayTeam: "Warriors",
      homeScore: 112,
      awayScore: 108,
      status: "live" as const,
      time: "3rd Quarter",
      quarter: "Q3 - 8:42",
      trending: true,
    },
    {
      homeTeam: "Cowboys",
      awayTeam: "Eagles",
      homeScore: 21,
      awayScore: 14,
      status: "live" as const,
      time: "2nd Quarter",
      quarter: "Q2 - 5:23",
    },
    {
      homeTeam: "Heat",
      awayTeam: "Celtics",
      homeScore: 0,
      awayScore: 0,
      status: "upcoming" as const,
      time: "7:00 PM ET",
    },
  ];

  const stats = [
    { label: "Live Games", value: "12", icon: Play, color: "text-live" },
    { label: "Total Users", value: "2.3M", icon: Users, color: "text-primary" },
    { label: "Predictions Made", value: "15.7K", icon: BarChart3, color: "text-warning" },
    { label: "Accuracy Rate", value: "87%", icon: Trophy, color: "text-success" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Sports Analytics Dashboard" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Experience Sports
              <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Like Never Before
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Get real-time analytics, AI-powered insights, and immersive sports coverage 
              that transforms how you experience and understand your favorite games.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300">
                <Play className="mr-2 h-5 w-5" />
                Watch Live Games
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Analytics
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center bg-gradient-to-br from-card to-card/80 border-border/50">
                <CardContent className="p-6">
                  <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Games</h2>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Games
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGames.map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-primary-glow/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Game?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join millions of sports fans who use HoloStream to stay ahead of the game 
            with AI-powered insights and holographic-quality coverage.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;