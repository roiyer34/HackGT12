import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Area, AreaChart } from "recharts";
import { TrendingUp, TrendingDown, Target, Users, Trophy, Activity, Zap, Eye } from "lucide-react";

const Analytics = () => {
  const teamPerformanceData = [
    { name: "Lakers", wins: 42, losses: 18, winRate: 70 },
    { name: "Warriors", wins: 38, losses: 22, winRate: 63 },
    { name: "Celtics", wins: 45, losses: 15, winRate: 75 },
    { name: "Heat", wins: 35, losses: 25, winRate: 58 },
    { name: "Nuggets", wins: 41, losses: 19, winRate: 68 },
  ];

  const playerStatsData = [
    { name: "LeBron", points: 28.5, assists: 8.2, rebounds: 8.8 },
    { name: "Curry", points: 31.2, assists: 6.8, rebounds: 4.2 },
    { name: "Tatum", points: 26.8, assists: 5.5, rebounds: 7.1 },
    { name: "Butler", points: 22.4, assists: 6.1, rebounds: 6.3 },
    { name: "Jokic", points: 25.1, assists: 9.8, rebounds: 11.2 },
  ];

  const gameOutcomesData = [
    { month: "Jan", home: 65, away: 35 },
    { month: "Feb", home: 58, away: 42 },
    { month: "Mar", home: 62, away: 38 },
    { month: "Apr", home: 59, away: 41 },
    { month: "May", home: 67, away: 33 },
  ];

  const viewershipData = [
    { name: "Live Stream", value: 45, color: "hsl(var(--primary))" },
    { name: "Highlights", value: 30, color: "hsl(var(--primary-glow))" },
    { name: "Analysis", value: 15, color: "hsl(var(--warning))" },
    { name: "News", value: 10, color: "hsl(var(--success))" },
  ];

  const engagementTrend = [
    { time: "12AM", viewers: 15000, engagement: 72 },
    { time: "3AM", viewers: 8000, engagement: 45 },
    { time: "6AM", viewers: 12000, engagement: 58 },
    { time: "9AM", viewers: 25000, engagement: 78 },
    { time: "12PM", viewers: 35000, engagement: 85 },
    { time: "3PM", viewers: 28000, engagement: 82 },
    { time: "6PM", viewers: 45000, engagement: 92 },
    { time: "9PM", viewers: 52000, engagement: 95 },
  ];

  const keyMetrics = [
    { label: "Total Views", value: "2.8M", change: "+12.5%", trend: "up", icon: Eye },
    { label: "Active Users", value: "847K", change: "+8.2%", trend: "up", icon: Users },
    { label: "Engagement Rate", value: "87.3%", change: "+5.1%", trend: "up", icon: Activity },
    { label: "Prediction Accuracy", value: "91.2%", change: "+2.8%", trend: "up", icon: Target },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Comprehensive sports performance and viewership analytics</p>
          </div>
          <Button className="bg-gradient-to-r from-primary to-primary-glow">
            <Zap className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="bg-gradient-to-br from-card to-card/80 border-border/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                    <p className="text-2xl font-bold">{metric.value}</p>
                    <div className="flex items-center mt-2">
                      {metric.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-success mr-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-destructive mr-1" />
                      )}
                      <span className={`text-sm ${metric.trend === "up" ? "text-success" : "text-destructive"}`}>
                        {metric.change}
                      </span>
                    </div>
                  </div>
                  <metric.icon className="h-8 w-8 text-primary opacity-80" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Team Performance */}
          <Card className="bg-gradient-to-br from-card to-card/80 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="mr-2 h-5 w-5 text-primary" />
                Team Win Rates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={teamPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="winRate" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Player Performance */}
          <Card className="bg-gradient-to-br from-card to-card/80 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-primary" />
                Player Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={playerStatsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="points" fill="hsl(var(--primary))" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="assists" fill="hsl(var(--primary-glow))" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="rebounds" fill="hsl(var(--warning))" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Home vs Away Performance */}
          <Card className="bg-gradient-to-br from-card to-card/80 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart className="mr-2 h-5 w-5 text-primary" />
                Home vs Away Wins
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={gameOutcomesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Line type="monotone" dataKey="home" stroke="hsl(var(--primary))" strokeWidth={3} />
                  <Line type="monotone" dataKey="away" stroke="hsl(var(--warning))" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Content Distribution */}
          <Card className="bg-gradient-to-br from-card to-card/80 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="mr-2 h-5 w-5 text-primary" />
                Content Views
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={viewershipData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {viewershipData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {viewershipData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span>{item.name}</span>
                    </div>
                    <span className="font-medium">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Real-time Insights */}
          <Card className="bg-gradient-to-br from-card to-card/80 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="mr-2 h-5 w-5 text-primary" />
                Live Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Peak Viewing Time</span>
                  <Badge className="bg-primary text-primary-foreground">9 PM</Badge>
                </div>
                <p className="text-xs text-muted-foreground">Highest engagement during prime time games</p>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-success/10 to-success/5 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Trending Team</span>
                  <Badge className="bg-success text-white">Celtics</Badge>
                </div>
                <p className="text-xs text-muted-foreground">75% win rate driving viewership</p>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-warning/10 to-warning/5 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Hot Topic</span>
                  <Badge className="bg-warning text-black">MVP Race</Badge>
                </div>
                <p className="text-xs text-muted-foreground">Most discussed storyline today</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Engagement Trend */}
        <Card className="bg-gradient-to-br from-card to-card/80 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-primary" />
              Daily Engagement Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={engagementTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="viewers" 
                  stroke="hsl(var(--primary))" 
                  fill="hsl(var(--primary) / 0.3)"
                  strokeWidth={2}
                />
                <Area 
                  type="monotone" 
                  dataKey="engagement" 
                  stroke="hsl(var(--primary-glow))" 
                  fill="hsl(var(--primary-glow) / 0.2)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;