import { Sparkles, Camera, TrendingUp } from "lucide-react";
import singleFry from "@/assets/single-fry.jpg";

const features = [
  {
    icon: Sparkles,
    title: "Golden & Crunchy",
    description: "Every fry looks perfect. Consistent shape, beautiful color, Instagram-ready straight from the fryer.",
  },
  {
    icon: Camera,
    title: "Social Media Gold",
    description: "Customers can't stop posting. The unique waffle pattern is irresistible to photograph.",
  },
  {
    icon: TrendingUp,
    title: "Algorithm-Friendly",
    description: "Food content performs best on social. Your exposure goes viral without paying for ads.",
  },
];

const WhySection = () => {
  return (
    <section id="why" className="py-24 md:py-32 bg-gradient-warm relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, hsl(var(--primary)) 0, hsl(var(--primary)) 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
            WHY <span className="text-primary">WAFFLE FRIES</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            It's not just food. It's your most powerful marketing tool.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="flex gap-5 p-6 bg-card rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-golden flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-dark" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img 
                src={singleFry} 
                alt="Perfect waffle fry close-up" 
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-6 py-4 rounded-2xl shadow-elevated">
              <p className="font-display text-3xl">100%</p>
              <p className="text-sm opacity-90">Photo-Ready</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
