import { Play, Eye, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "Book vs Movie: The Great Gatsby Discussion",
      thumbnail: "https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?auto=format&fit=crop&w=500&h=300",
      duration: "24:15",
      views: "1.2K",
      description: "Our founders discuss the differences between Fitzgerald's masterpiece and its film adaptations."
    },
    {
      id: 2, 
      title: "Monthly Book Club Meeting - October 2024",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&h=300",
      duration: "45:32",
      views: "856",
      description: "Join our lively discussion about this month's featured book and member recommendations."
    },
    {
      id: 3,
      title: "How to Write Compelling Book Reviews",
      thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=500&h=300", 
      duration: "18:47",
      views: "2.1K",
      description: "Tips and tricks from our community on crafting reviews that capture the essence of your reading experience."
    },
    {
      id: 4,
      title: "Author Interview: Local Writers Spotlight",
      thumbnail: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=500&h=300",
      duration: "35:22", 
      views: "743",
      description: "We sit down with emerging local authors to discuss their writing process and latest works."
    },
    {
      id: 5,
      title: "Classic Literature in Modern Times",
      thumbnail: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=500&h=300",
      duration: "29:18",
      views: "1.5K", 
      description: "Exploring why classic literature remains relevant and how to make it accessible to new readers."
    },
    {
      id: 6,
      title: "Behind the Scenes: Setting Up Our Book Club",
      thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=500&h=300",
      duration: "12:45",
      views: "934",
      description: "The founding story of our book club and how we built this amazing literary community."
    }
  ];

  return (
    <section id="videos" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">  
          <h2 className="text-5xl font-bold font-serif text-vintage-brown mb-4">
            Video Library
          </h2>
          <p className="text-xl text-muted-foreground font-handwriting">
            Watch our discussions, interviews, and literary insights
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <Card key={video.id} className="bg-warm-cream handwritten-border warm-shadow overflow-hidden hover:scale-105 transition-transform duration-300 group">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-literary-red rounded-full flex items-center justify-center cursor-pointer">
                    <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {video.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold font-serif text-vintage-brown mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Eye className="h-4 w-4" />
                    {video.views} views
                  </div>
                </div>
                
                <Button className="literary-gradient text-white hover:opacity-90 w-full">
                  <Play className="h-4 w-4 mr-2" />
                  Watch Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-literary-red text-literary-red hover:bg-literary-beige px-8 py-3 text-lg">
            View All Videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Videos;