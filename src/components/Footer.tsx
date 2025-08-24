import { BookOpen, Mail, Users, Video } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-vintage-brown text-literary-beige py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-8 w-8 text-literary-red" />
              <h3 className="text-2xl font-bold font-serif">The Books and Movies Club</h3>
            </div>
            <p className="text-literary-beige-dark leading-relaxed mb-4">
              A vibrant community where literature and cinema converge. Join us in exploring 
              the magic of storytelling through books and their adaptations.
            </p>
            <div className="flex items-center gap-2 text-literary-red">
              <Users className="h-5 w-5" />
              <span className="font-handwriting">100+ Active Members</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold font-serif mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-literary-beige-dark hover:text-literary-red transition-colors">Book of the Month</a></li>
              <li><a href="#reviews" className="text-literary-beige-dark hover:text-literary-red transition-colors">Community Reviews</a></li>
              <li><a href="#founders" className="text-literary-beige-dark hover:text-literary-red transition-colors">Meet the Founders</a></li>
              <li><a href="#videos" className="text-literary-beige-dark hover:text-literary-red transition-colors">Video Library</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold font-serif mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-literary-beige-dark hover:text-literary-red transition-colors">Join the Club</a></li>
              <li><a href="#" className="text-literary-beige-dark hover:text-literary-red transition-colors">Submit a Review</a></li>
              <li><a href="#" className="text-literary-beige-dark hover:text-literary-red transition-colors">Suggest a Book</a></li>
              <li><a href="#" className="text-literary-beige-dark hover:text-literary-red transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-literary-beige-dark mt-8 pt-8 text-center">
          <p className="text-literary-beige-dark font-handwriting">
            © 2024 The Books and Movies Club. All rights reserved. | 
            <span className="text-literary-red"> Made with ❤️ for book lovers everywhere</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;