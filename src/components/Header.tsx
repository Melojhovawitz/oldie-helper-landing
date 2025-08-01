import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img 
            src="/lovable-uploads/dbb2e6d2-23f4-4290-b518-c86c8b079772.png" 
            alt="Oldie Helper Logo" 
            className="h-12 w-12"
          />
          <span className="text-2xl font-bold text-primary">Oldie Helper</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#jobs" className="text-foreground hover:text-primary transition-colors">
            Jobs
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/login")}
            className="hidden sm:inline-flex"
          >
            Login
          </Button>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => navigate("/signup")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;