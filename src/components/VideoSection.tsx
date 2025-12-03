const VideoSection = () => {
  return (
    <section className="py-24 md:py-32 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl md:text-7xl text-primary-foreground mb-4">
            SEE IT IN <span className="text-gradient-golden">ACTION</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Watch how our waffle fries become the star of every plate.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-elevated bg-card">
            <iframe
              src="https://www.youtube.com/embed/4srLj64mFMY"
              title="Waffle Fries Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-[9/16]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
