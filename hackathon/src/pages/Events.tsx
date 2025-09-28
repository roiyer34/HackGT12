import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Calendar, Clock, MapPin, Star, Plus } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "NBA Finals Preview",
      date: "March 15, 2024",
      time: "7:00 PM ET",
      location: "Virtual Event",
      type: "Analysis",
      featured: true,
      description: "Deep dive into championship predictions and key matchups",
    },
    {
      title: "March Madness Bracket Challenge",
      date: "March 18, 2024",
      time: "12:00 PM ET",
      location: "Online Tournament",
      type: "Competition",
      featured: false,
      description: "Compete with other users in our bracket prediction challenge",
    },
    {
      title: "NFL Draft Predictions Workshop",
      date: "April 22, 2024",
      time: "3:00 PM ET",
      location: "Virtual Workshop",
      type: "Educational",
      featured: true,
      description: "Learn advanced analytics for predicting draft outcomes",
    },
  ];

  const eventTypes = [
    { name: "Analysis", color: "bg-primary text-primary-foreground" },
    { name: "Competition", color: "bg-warning text-black" },
    { name: "Educational", color: "bg-success text-white" },
  ];

  const getTypeColor = (type: string) => {
    const eventType = eventTypes.find(t => t.name === type);
    return eventType ? eventType.color : "bg-secondary";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Events</h1>
            <p className="text-muted-foreground">Join exclusive sports analytics events and competitions</p>
          </div>
          <Button className="bg-gradient-to-r from-primary to-primary-glow">
            <Plus className="mr-2 h-4 w-4" />
            Create Event
          </Button>
        </div>

        {/* Featured Events */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Star className="mr-2 h-6 w-6 text-warning" />
            Featured Events
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingEvents.filter(event => event.featured).map((event, index) => (
              <Card key={index} className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-card to-card/80 border-border/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-warning to-warning/70 flex items-center justify-center">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                      <Badge className={getTypeColor(event.type)} variant="secondary">
                        {event.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {event.location}
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Events */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">All Upcoming Events</h2>
          <div className="grid grid-cols-1 gap-4">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-gradient-to-r from-card to-card/80 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold">{event.title}</h3>
                        <Badge className={getTypeColor(event.type)} variant="secondary">
                          {event.type}
                        </Badge>
                        {event.featured && (
                          <Star className="h-4 w-4 text-warning fill-warning" />
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">
                        {event.description}
                      </p>
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-primary" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-primary" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-primary" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground ml-6">
                      Join Event
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-primary-glow/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Want to Host Your Own Event?</h3>
              <p className="text-muted-foreground mb-6">
                Create custom tournaments, analysis sessions, or educational workshops for the community.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300">
                <Plus className="mr-2 h-5 w-5" />
                Create Event
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Events;