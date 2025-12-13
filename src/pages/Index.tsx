import heroBackground from "@/assets/hero-fries.jpg";
import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <main 
      className="min-h-screen flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <img 
          src={logo} 
          alt="Waffle Fries Logo" 
          className="w-64 md:w-96 lg:w-[500px] mb-8"
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white tracking-wider">
          COMING SOON
        </h1>
      </div>
    </main>
  );
};

export default Index;
