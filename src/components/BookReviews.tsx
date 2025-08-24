import { Heart, MessageCircle, Share2, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const BookReviews = () => {
  const reviews = [
    {
      id: 1,
      user: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&h=150",
      book: "Pride and Prejudice",
      author: "Jane Austen",
      rating: 5,
      review: "A timeless masterpiece that never gets old. Austen's wit and social commentary are as relevant today as they were centuries ago.",
      bookCover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=300&h=400",
      likes: 24,
      comments: 8
    },
    {
      id: 2,
      user: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
      book: "1984",
      author: "George Orwell",
      rating: 5,
      review: "Chilling and prophetic. This dystopian nightmare feels uncomfortably close to reality in today's world.",
      bookCover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=300&h=400",
      likes: 31,
      comments: 12
    },
    {
      id: 3,
      user: "Sophia Chen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
      book: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      rating: 4,
      review: "A captivating tale of love, ambition, and secrets. Evelyn Hugo is a character you won't soon forget!",
      bookCover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=300&h=400",
      likes: 18,
      comments: 6
    },
    {
      id: 4,
      user: "Michael Brown",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
      book: "The Midnight Library",
      author: "Matt Haig",
      rating: 4,
      review: "A beautiful exploration of life's infinite possibilities. Makes you appreciate every moment and choice.",
      bookCover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=400",
      likes: 27,
      comments: 9
    }
  ];

  return (
    <section id="reviews" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold font-serif text-vintage-brown mb-4">
            Community Reviews
          </h2>
          <p className="text-xl text-muted-foreground font-handwriting">
            Discover what our members are reading and loving
          </p>
        </div>
        
        <div className="mood-board-grid">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-warm-cream handwritten-border warm-shadow hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={review.avatar} alt={review.user} />
                    <AvatarFallback>{review.user[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-vintage-brown">{review.user}</h4>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < review.rating ? 'fill-literary-red text-literary-red' : 'text-muted'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <img 
                    src={review.bookCover} 
                    alt={review.book}
                    className="w-full h-48 object-cover rounded-md mb-3"
                  />
                  <h5 className="font-bold text-lg text-vintage-brown font-serif">{review.book}</h5>
                  <p className="text-literary-red font-handwriting">by {review.author}</p>
                </div>
                
                <p className="text-foreground mb-4 leading-relaxed">
                  "{review.review}"
                </p>
                
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="text-literary-red hover:bg-literary-beige">
                      <Heart className="h-4 w-4 mr-1" />
                      {review.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-literary-red hover:bg-literary-beige">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {review.comments}
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" className="text-literary-red hover:bg-literary-beige">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="literary-gradient text-white hover:opacity-90 px-8 py-3 text-lg">
            Share Your Review
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookReviews;