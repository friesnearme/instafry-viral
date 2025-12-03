import { Button } from "@/components/ui/button";
import heroFries from "@/assets/hero-fries.jpg";
import { Instagram, Camera, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroFries} 
          alt="Premium waffle fries" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/40" />
      </div>

      {/* Floating Icons */}
      <div className="absolute top-32 left-10 md:left-20 text-golden opacity-30 animate-float">
        <Instagram className="h-16 w-16 md:h-24 md:w-24" />
      </div>
      <div className="absolute bottom-32 right-10 md:right-20 text-golden opacity-30 animate-float animation-delay-300">
        <Camera className="h-12 w-12 md:h-20 md:w-20" />
      </div>
      <div className="absolute top-1/3 right-10 md:right-32 text-golden opacity-20 animate-float animation-delay-500">
        <TrendingUp className="h-10 w-10 md:h-16 md:w-16" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-primary-foreground leading-none mb-6 opacity-0 animate-slide-up drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            THE MOST{" "}
            <span className="text-gradient-golden">INSTAGRAMMABLE</span>{" "}
            FRIES ON EARTH
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto opacity-0 animate-slide-up animation-delay-200">
            Serve it before they taste it. Watch the posts, shares, and tags roll in.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-slide-up animation-delay-400">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">Get Free Sample</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#why">See Why It Works</a>
            </Button>
          </div>

          {/* Social Proof Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-6 opacity-0 animate-fade-in animation-delay-500">
            <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-golden text-2xl font-display">500+</span>
              <span className="text-primary-foreground/70 text-sm">Restaurants Served</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-golden text-2xl font-display">1M+</span>
              <span className="text-primary-foreground/70 text-sm">Social Posts Generated</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-golden text-2xl font-display">$0</span>
              <span className="text-primary-foreground/70 text-sm">Ad Spend Required</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-golden rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
