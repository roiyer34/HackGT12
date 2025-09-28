import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import GameCard from "@/components/GameCard";
import { Clock, Activity, RefreshCw } from "lucide-react";

const PlayByPlay = () => {
  const liveGames = [
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
  ];

  const playByPlayData = [
    { time: "8:42", quarter: "Q3", event: "Stephen Curry makes 3-pointer from 28 feet", team: "Warriors", type: "score" },
    { time: "8:58", quarter: "Q3", event: "LeBron James defensive rebound", team: "Lakers", type: "rebound" },
    { time: "9:12", quarter: "Q3", event: "Anthony Davis blocks shot", team: "Lakers", type: "block" },
    { time: "9:27", quarter: "Q3", event: "Draymond Green personal foul", team: "Warriors", type: "foul" },
    { time: "9:45", quarter: "Q3", event: "Russell Westbrook makes layup", team: "Lakers", type: "score" },
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case "score":
        return "🏀";
      case "rebound":
        return "📥";
      case "block":
        return "🚫";
      case "foul":
        return "⚠️";
      default:
        return "📊";
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case "score":
        return "border-l-success";
      case "block":
        return "border-l-primary";
      case "foul":
        return "border-l-warning";
      default:
        return "border-l-muted";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Live Games</h1>
            <p className="text-muted-foreground">Real-time play-by-play analysis and insights</p>
          </div>
          <Button className="bg-gradient-to-r from-primary to-primary-glow">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Live Games Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-to-br from-card to-card/80 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="mr-2 h-5 w-5 text-live" />
                  Live Games
                  <Badge className="ml-2 bg-live text-white animate-pulse">
                    {liveGames.length}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {liveGames.map((game, index) => (
                  <GameCard key={index} {...game} />
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Play by Play Feed */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-card to-card/80 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-primary" />
                    Lakers vs Warriors - Live Play by Play
                  </div>
                  <Badge className="bg-live text-white animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                    LIVE
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {playByPlayData.map((play, index) => (
                    <div 
                      key={index} 
                      className={`p-4 rounded-lg border-l-4 ${getEventColor(play.type)} bg-gradient-to-r from-muted/30 to-transparent transition-all duration-300 hover:from-muted/50`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-2xl">{getEventIcon(play.type)}</span>
                            <Badge variant="outline" className="text-xs">
                              {play.quarter} - {play.time}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {play.team}
                            </Badge>
                          </div>
                          <p className="text-sm leading-relaxed">{play.event}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-lg">
                  <div className="flex items-center justify-center text-center">
                    <Activity className="mr-2 h-5 w-5 text-primary animate-pulse" />
                    <span className="text-sm text-muted-foreground">
                      Live updates - New plays appear automatically
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayByPlay;