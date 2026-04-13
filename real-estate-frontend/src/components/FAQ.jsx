const FAQ = ({ data }) => {
  return (
    <section className="py-20 px-6 md:px-16">
      <h2 className="text-3xl font-bold text-center mb-10">FAQs</h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {data?.map((item, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <p className="font-semibold">{item.question}</p>
            <p className="text-gray-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
