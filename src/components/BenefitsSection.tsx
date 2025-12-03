import { Users, MessageSquare, Star, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Users,
    stat: "3x",
    label: "More Social Posts",
    description: "Tagged friends bring new customers",
  },
  {
    icon: MessageSquare,
    stat: "47%",
    label: "More Foot Traffic",
    description: "From social media discovery",
  },
  {
    icon: Star,
    stat: "2x",
    label: "More Reviews",
    description: "Happy customers share their experience",
  },
  {
    icon: DollarSign,
    stat: "$0",
    label: "Ad Spend",
    description: "Your product does the marketing",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 md:py-32 bg-dark text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-golden/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl mb-4">
            BECOME <span className="text-gradient-golden">"THE PLACE WITH THOSE FRIES"</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            All without spending a dollar on ads
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div 
              key={benefit.label}
              className="group p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-golden/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-golden flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="h-6 w-6 text-dark" />
              </div>
              
              <p className="font-display text-5xl text-golden mb-2">
                {benefit.stat}
              </p>
              <p className="font-semibold text-lg mb-2">
                {benefit.label}
              </p>
              <p className="text-primary-foreground/60 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
