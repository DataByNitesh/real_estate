const About = ({ data }) => {
  return (
    <section className="py-20 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
      {/* IMAGE */}
      <img
        src="/images/about.jpeg"
        alt="About"
        className="w-full md:w-1/2 rounded-lg shadow"
      />

      {/* CONTENT */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">About Project</h2>

        <p className="text-gray-600 leading-relaxed">{data?.description}</p>

        <ul className="mt-4 space-y-2 text-gray-700">
          <li>✔ Prime Location</li>
          <li>✔ Luxury Living</li>
          <li>✔ Modern Design</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
