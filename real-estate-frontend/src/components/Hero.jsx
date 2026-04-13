const Hero = ({ data }) => {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/home.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{data?.title}</h1>

        <p className="text-lg md:text-xl max-w-xl">{data?.subtitle}</p>

        <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg">
          Explore Properties
        </button>
      </div>
    </section>
  );
};

export default Hero;
