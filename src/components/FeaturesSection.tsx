import { Package, Truck, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Pre-Cut & Ready",
    description: "Zero prep work. Just fry and serve.",
  },
  {
    icon: Truck,
    title: "Delivered Fresh",
    description: "Weekly deliveries to your door.",
  },
  {
    icon: CheckCircle2,
    title: "Always Perfect",
    description: "Every single fry looks amazing.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-warm relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
            PREMIUM FRIES. <span className="text-primary">ZERO WORK.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            We handle the perfection. You get the credit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center group"
            >
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <feature.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-golden text-dark font-display text-lg flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="mt-20 text-center">
          <div className="inline-block px-8 py-4 bg-dark rounded-2xl">
            <p className="font-display text-3xl md:text-4xl text-primary-foreground">
              ONE FRY. <span className="text-golden">ENDLESS BUZZ.</span>
            </p>
            <p className="text-primary-foreground/70 mt-2">
              Repeat customers. New fans. Free marketing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
