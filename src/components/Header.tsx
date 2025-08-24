import { BookOpen, Users, Video, Home } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-warm-cream border-b-4 border-literary-red py-6 warm-shadow">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-8 w-8 text-literary-red" />
            <h1 className="text-4xl font-bold font-serif text-vintage-brown">
              The Books and Movies Club
            </h1>
            <BookOpen className="h-8 w-8 text-literary-red" />
          </div>
          <p className="text-lg text-muted-foreground font-handwriting">
            Where stories come alive through shared experiences
          </p>
          
          <nav className="mt-6">
            <ul className="flex flex-wrap justify-center gap-8 text-lg font-medium">
              <li>
                <a href="#home" className="flex items-center gap-2 text-vintage-brown hover:text-literary-red transition-colors">
                  <Home className="h-5 w-5" />
                  Home
                </a>
              </li>
              <li>
                <a href="#reviews" className="flex items-center gap-2 text-vintage-brown hover:text-literary-red transition-colors">
                  <BookOpen className="h-5 w-5" />
                  Book Reviews
                </a>
              </li>
              <li>
                <a href="#founders" className="flex items-center gap-2 text-vintage-brown hover:text-literary-red transition-colors">
                  <Users className="h-5 w-5" />
                  Founders
                </a>
              </li>
              <li>
                <a href="#videos" className="flex items-center gap-2 text-vintage-brown hover:text-literary-red transition-colors">
                  <Video className="h-5 w-5" />
                  Videos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;