import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import singleFry from "@/assets/single-fry.jpg";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-dark text-primary-foreground relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={singleFry} 
          alt="" 
          className="w-full h-full object-cover blur-sm"
        />
      </div>
      <div className="absolute inset-0 bg-dark/80" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-7xl mb-4">
            SEE IT <span className="text-gradient-golden">FOR YOURSELF</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Get a free sample delivery and watch your customers pull out their phones.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:hi@wafflefries.net">
                <Mail className="h-5 w-5 mr-2" />
                Request Free Sample
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto">
            <a 
              href="tel:747-664-3799" 
              className="flex items-center justify-center gap-3 p-5 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/15 border border-primary-foreground/20 transition-all duration-300 group"
            >
              <Phone className="h-6 w-6 text-golden group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-sm text-primary-foreground/60">Call us</p>
                <p className="font-display text-xl">747-OMG-FRYZ</p>
              </div>
            </a>
            
            <a 
              href="mailto:hi@wafflefries.net" 
              className="flex items-center justify-center gap-3 p-5 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/15 border border-primary-foreground/20 transition-all duration-300 group"
            >
              <Mail className="h-6 w-6 text-golden group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-sm text-primary-foreground/60">Email us</p>
                <p className="font-display text-xl">hi@wafflefries.net</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
