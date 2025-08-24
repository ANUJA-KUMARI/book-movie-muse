import { Star, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BookOfTheMonth = () => {
  return (
    <section id="home" className="py-16 bg-literary-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold font-serif text-vintage-brown mb-4">
            Book of the Month
          </h2>
          <div className="flex items-center justify-center gap-2 text-literary-red mb-8">
            <Calendar className="h-5 w-5" />
            <span className="font-handwriting text-xl">Selected by our Founders</span>
          </div>
        </div>
        
        <Card className="max-w-4xl mx-auto bg-warm-cream handwritten-border literary-shadow overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&h=600" 
                  alt="The Alchemist book cover"
                  className="w-80 h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute -top-4 -right-4 bg-literary-gradient text-white p-3 rounded-full">
                  <Star className="h-6 w-6 fill-current" />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-3xl font-bold font-serif text-vintage-brown mb-2">
                  The Alchemist
                </h3>
                <p className="text-xl text-literary-red font-handwriting mb-4">
                  by Paulo Coelho
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-literary-red text-literary-red" />
                  ))}
                  <span className="ml-2 text-muted-foreground">(4.8/5)</span>
                </div>
              </div>
              
              <p className="text-foreground leading-relaxed">
                "A magical tale of Santiago, a shepherd boy who dreams of treasure and discovers 
                that the real treasure lies in the journey itself. This enchanting story speaks 
                to the dreamer in all of us and reminds us that our personal legends await."
              </p>
              
              <div className="space-y-3">
                <Button className="literary-gradient text-white hover:opacity-90 w-full">
                  Share Your Thoughts
                </Button>
                <p className="text-sm text-muted-foreground text-center font-handwriting">
                  Join the discussion with fellow book lovers
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BookOfTheMonth;