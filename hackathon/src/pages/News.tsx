import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Clock, Zap, TrendingUp, Trophy, Star, Play, RefreshCw, Sparkles } from "lucide-react";

const News = () => {
  const gameResults = [
    {
      id: 1,
      homeTeam: "Lakers",
      awayTeam: "Warriors",
      homeScore: 112,
      awayScore: 108,
      status: "Final",
      quarter: "OT",
      time: "2 hours ago",
      highlights: ["LeBron 35 pts", "Curry 41 pts", "Game-winner OT"],
      aiSummary: "Epic overtime thriller saw Curry drop 41 points but LeBron's clutch 35-point performance led Lakers to victory. Game-winning shot in OT sealed dramatic comeback.",
      trending: true,
    },
    {
      id: 2,
      homeTeam: "Celtics",
      awayTeam: "Heat",
      homeScore: 118,
      awayScore: 95,
      status: "Final",
      quarter: "4th",
      time: "4 hours ago",
      highlights: ["Tatum 42 pts", "Brown 28 pts", "23-point lead"],
      aiSummary: "Dominant performance by the Celtics duo. Tatum exploded for 42 points while Brown added 28. Celtics controlled the game from start to finish.",
      trending: false,
    },
    {
      id: 3,
      homeTeam: "Cowboys",
      awayTeam: "Eagles",
      homeScore: 28,
      awayScore: 21,
      status: "Final",
      quarter: "4th",
      time: "1 day ago",
      highlights: ["Dak 3 TDs", "Parsons 2 sacks", "Division lead"],
      aiSummary: "Cowboys take control of NFC East with crucial division win. Dak Prescott threw 3 touchdowns while Micah Parsons' defense dominated Eagles' offense.",
      trending: false,
    },
  ];

  const hotTopics = [
    {
      title: "MVP Race Heating Up",
      description: "Jokic, Tatum, and Doncic leading the pack as season enters final stretch",
      category: "NBA",
      time: "1 hour ago",
      engagement: "15.2K discussions",
      ai_insight: "Statistical analysis shows Jokic maintaining slight edge with triple-double consistency and team record impact.",
    },
    {
      title: "Trade Deadline Buzz",
      description: "Multiple contenders eyeing veteran players for playoff push",
      category: "NBA",
      time: "3 hours ago",
      engagement: "8.7K discussions",
      ai_insight: "Teams with cap space showing increased activity. Role players with playoff experience seeing highest demand.",
    },
    {
      title: "Playoff Picture Shifts",
      description: "Western Conference sees major shake-up after recent results",
      category: "NBA",
      time: "5 hours ago",
      engagement: "12.4K discussions",
      ai_insight: "Current win percentages suggest 4 teams battling for final 2 playoff spots. Remaining schedule analysis favors Lakers and Warriors.",
    },
  ];

  const aiInsights = [
    {
      type: "Prediction",
      content: "Based on current form and remaining schedule, Lakers have 73% chance of making playoffs",
      confidence: 73,
      icon: TrendingUp,
    },
    {
      type: "Trend Alert",
      content: "Celtics' defensive rating improved 15% over last 10 games - championship indicator",
      confidence: 89,
      icon: Zap,
    },
    {
      type: "Performance",
      content: "Curry averaging 42% from three in clutch time this month - historic pace",
      confidence: 95,
      icon: Star,
    },
  ];

  const quickHighlights = [
    {
      title: "LeBron's Overtime Magic",
      description: "35 points including game-winner",
      team: "Lakers",
      duration: "2:45",
      views: "847K",
    },
    {
      title: "Curry's 41-Point Explosion",
      description: "9 three-pointers in losing effort",
      team: "Warriors", 
      duration: "3:12",
      views: "1.2M",
    },
    {
      title: "Tatum's Career Night",
      description: "42 points on perfect shooting",
      team: "Celtics",
      duration: "2:58",
      views: "692K",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Sports News & AI Summary</h1>
            <p className="text-muted-foreground">AI-powered insights and real-time game analysis</p>
          </div>
          <Button className="bg-gradient-to-r from-primary to-primary-glow">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Feed
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Game Results */}
            <Card className="bg-gradient-to-br from-card to-card/80 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Trophy className="mr-2 h-5 w-5 text-primary" />
                    Recent Game Results
                  </div>
                  <Badge className="bg-live text-white animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                    LIVE UPDATES
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {gameResults.map((game) => (
                  <div key={game.id} className="p-6 bg-gradient-to-r from-muted/30 to-transparent rounded-lg border border-border/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="text-lg font-semibold">{game.awayTeam}</div>
                          <div className="text-2xl font-bold text-primary">{game.awayScore}</div>
                          {game.trending && <Star className="h-5 w-5 text-warning fill-warning" />}
                        </div>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="text-lg font-semibold">{game.homeTeam}</div>
                          <div className="text-2xl font-bold text-primary">{game.homeScore}</div>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <Badge variant="outline">{game.status}</Badge>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {game.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2 flex items-center">
                        <Sparkles className="h-4 w-4 mr-1 text-primary" />
                        AI Summary
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{game.aiSummary}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {game.highlights.map((highlight, index) => (
                        <Badge key={index} variant="secondary" className="bg-primary/20 text-primary">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Hot Topics */}
            <Card className="bg-gradient-to-br from-card to-card/80 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-warning" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {hotTopics.map((topic, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-muted/20 to-transparent rounded-lg border border-border/30 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{topic.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{topic.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <Badge variant="outline" className="text-xs">{topic.category}</Badge>
                          <span>{topic.time}</span>
                          <span className="text-primary">{topic.engagement}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg border-l-4 border-l-primary">
                      <p className="text-sm text-muted-foreground">
                        <span className="text-primary font-medium">AI Insight:</span> {topic.ai_insight}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Insights */}
            <Card className="bg-gradient-to-br from-card to-card/80 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="mr-2 h-5 w-5 text-primary" />
                  AI Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {aiInsights.map((insight, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-lg border border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <insight.icon className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm font-medium text-primary">{insight.type}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {insight.confidence}% confident
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{insight.content}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Highlights */}
            <Card className="bg-gradient-to-br from-card to-card/80 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Play className="mr-2 h-5 w-5 text-primary" />
                  Quick Highlights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickHighlights.map((highlight, index) => (
                  <div key={index} className="group cursor-pointer hover:bg-muted/20 p-3 rounded-lg transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-lg flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary-glow/30 transition-all duration-300">
                        <Play className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium mb-1">{highlight.title}</h4>
                        <p className="text-xs text-muted-foreground mb-1">{highlight.description}</p>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <Badge variant="secondary" className="text-xs">{highlight.team}</Badge>
                          <span>{highlight.duration}</span>
                          <span className="text-primary">{highlight.views} views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;