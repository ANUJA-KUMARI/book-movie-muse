import { Card } from "@/components/ui/card";
import { LinkedinIcon, TwitterIcon, BookOpenIcon } from "lucide-react";

const Founders = () => {
  const founders = [
    {
      name: "Sarah Johnson",
      role: "Co-Founder & Literature Enthusiast", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&h=400",
      bio: "Sarah holds a Master's in English Literature and has been leading book clubs for over 8 years. She specializes in contemporary fiction and classic literature.",
      favoriteBook: "To Kill a Mockingbird",
      booksRead: 347
    },
    {
      name: "David Chen",
      role: "Co-Founder & Film Critic",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400", 
      bio: "David combines his love for books and movies, often exploring film adaptations. He has a background in cinematography and comparative literature.",
      favoriteBook: "The Lord of the Rings",
      booksRead: 289
    },
    {
      name: "Elena Rodriguez",
      role: "Co-Founder & Community Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400",
      bio: "Elena brings people together through the power of storytelling. She manages our vibrant community and organizes monthly discussions and events.",
      favoriteBook: "One Hundred Years of Solitude", 
      booksRead: 412
    }
  ];

  return (
    <section id="founders" className="py-16 bg-literary-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold font-serif text-vintage-brown mb-4">
            Meet Our Founders
          </h2>
          <p className="text-xl text-muted-foreground font-handwriting">
            The passionate readers who started it all
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <Card key={index} className="bg-warm-cream handwritten-border literary-shadow overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-vintage-brown/80 to-transparent p-4">
                  <h3 className="text-2xl font-bold font-serif text-white">{founder.name}</h3>
                  <p className="text-literary-beige font-handwriting">{founder.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-foreground leading-relaxed mb-4">
                  {founder.bio}
                </p>
                
                <div className="space-y-2 mb-6 bg-literary-beige-dark rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-vintage-brown">Favorite Book:</span>
                    <span className="text-sm text-literary-red font-handwriting">{founder.favoriteBook}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-vintage-brown">Books Read:</span>
                    <span className="text-sm text-literary-red font-bold">{founder.booksRead}</span>
                  </div>
                </div>
                
                <div className="flex justify-center gap-3">
                  <div className="w-10 h-10 bg-literary-red rounded-full flex items-center justify-center cursor-pointer hover:bg-accent transition-colors">
                    <LinkedinIcon className="h-5 w-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-literary-red rounded-full flex items-center justify-center cursor-pointer hover:bg-accent transition-colors">
                    <TwitterIcon className="h-5 w-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-literary-red rounded-full flex items-center justify-center cursor-pointer hover:bg-accent transition-colors">
                    <BookOpenIcon className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;