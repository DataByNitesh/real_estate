const Amenities = ({ data }) => {
  return (
    <section className="py-20 px-6 md:px-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Amenities</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {data?.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="text-3xl mb-3">🏢</div>

            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
