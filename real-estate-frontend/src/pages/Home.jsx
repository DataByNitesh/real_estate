import { useEffect, useState } from "react";
import { getContent } from "../services/api";

import Hero from "../components/Hero";
import About from "../components/About";
import Amenities from "../components/Amenities";
import FAQ from "../components/FAQ";
import Navbar from "../components/Navbar";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getContent();
        setData(res.data);
      } catch (err) {
        console.log("Error fetching data");
      }
    };

    fetchData();
  }, []);

  // 🔹 Loading screen
  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="font-sans">
      {/* Navbar */}
      <Navbar />

      {/* HERO */}
      <Hero data={data.hero} />

      {/* ABOUT */}
      <About data={data.about} />

      {/* AMENITIES */}
      <Amenities data={data.amenities} />

      {/* FAQ */}
      <FAQ data={data.faq} />
    </div>
  );
};

export default Home;
