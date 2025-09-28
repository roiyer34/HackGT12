import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp } from "lucide-react";

interface GameCardProps {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: "live" | "upcoming" | "final";
  time: string;
  quarter?: string;
  trending?: boolean;
}

const GameCard = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  status,
  time,
  quarter,
  trending = false,
}: GameCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "live":
        return "bg-live text-white animate-pulse";
      case "upcoming":
        return "bg-warning text-black";
      case "final":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-secondary";
    }
  };

  return (
    <Card className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-card to-card/80 border-border/50">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Badge className={getStatusColor(status)} variant="secondary">
            {status === "live" && <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />}
            {status.toUpperCase()}
          </Badge>
          {trending && (
            <div className="flex items-center text-primary text-sm">
              <TrendingUp className="h-4 w-4 mr-1" />
              Trending
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-lg font-semibold">{awayTeam}</div>
              <div className="text-2xl font-bold text-primary">{awayScore}</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-lg font-semibold">{homeTeam}</div>
              <div className="text-2xl font-bold text-primary">{homeScore}</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            {time}
          </div>
          {quarter && (
            <div className="text-sm font-medium text-primary">
              {quarter}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;