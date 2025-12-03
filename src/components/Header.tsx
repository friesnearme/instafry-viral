import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Waffle Fries Logo" className="h-12 w-auto" />
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#why" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Why Waffle Fries
          </a>
          <a href="#benefits" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Benefits
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:747-664-3799" className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            <span className="font-medium">747-OMG-FRYZ</span>
          </a>
          <Button variant="default" size="sm" asChild>
            <a href="#contact">Get Free Sample</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
