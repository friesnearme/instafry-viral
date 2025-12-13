import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center text-center px-4">
        <img 
          src={logo} 
          alt="Waffle Fries Logo" 
          className="w-64 md:w-96 lg:w-[500px] mb-8"
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-black tracking-wider">
          COMING SOON
        </h1>
      </div>
    </main>
  );
};

export default Index;
