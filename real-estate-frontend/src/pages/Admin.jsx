import { useEffect, useState } from "react";
import { getContent, updateContent } from "../services/api";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const isAdmin = localStorage.getItem("admin");
    if (!isAdmin) {
      navigate("/login");
    } else {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    const res = await getContent();

    // ✅ Ensure structure always exists
    setData({
      hero: res.data?.hero || { title: "", subtitle: "" },
      about: res.data?.about || { description: "" },
      amenities: res.data?.amenities || [],
      faq: res.data?.faq || [],
    });
  };

  // 🔹 Hero & About
  const handleChange = (section, field, value) => {
    setData((prev) => ({
      ...prev,
      [section]: {
        ...(prev?.[section] || {}),
        [field]: value,
      },
    }));
  };

  // 🔹 Amenities
  const handleAmenityChange = (index, field, value) => {
    const updated = [...(data?.amenities || [])];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    setData({ ...data, amenities: updated });
  };

  const handleAddAmenity = () => {
    setData({
      ...data,
      amenities: [...(data?.amenities || []), { title: "", description: "" }],
    });
  };

  const handleDeleteAmenity = (index) => {
    const updated = (data?.amenities || []).filter((_, i) => i !== index);
    setData({ ...data, amenities: updated });
  };

  // 🔹 FAQ
  const handleFaqChange = (index, field, value) => {
    const updated = [...(data?.faq || [])];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    setData({ ...data, faq: updated });
  };

  const handleAddFaq = () => {
    setData({
      ...data,
      faq: [...(data?.faq || []), { question: "", answer: "" }],
    });
  };

  const handleDeleteFaq = (index) => {
    const updated = (data?.faq || []).filter((_, i) => i !== index);
    setData({ ...data, faq: updated });
  };

  // 🔹 Save
  const handleSave = async () => {
    await updateContent(data);
    alert("Updated successfully");
  };

  if (!data)
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-3xl font-bold mb-6">Admin Panel</h2>

        {/* HERO */}
        <h3 className="text-xl font-semibold mb-2">Hero Section</h3>
        <input
          className="w-full p-3 border rounded mb-3"
          value={data.hero?.title || ""}
          placeholder="Title"
          onChange={(e) => handleChange("hero", "title", e.target.value)}
        />
        <input
          className="w-full p-3 border rounded mb-4"
          value={data.hero?.subtitle || ""}
          placeholder="Subtitle"
          onChange={(e) => handleChange("hero", "subtitle", e.target.value)}
        />

        {/* ABOUT */}
        <h3 className="text-xl font-semibold mb-2">About Section</h3>
        <textarea
          className="w-full p-3 border rounded mb-4"
          value={data.about?.description || ""}
          placeholder="Description"
          onChange={(e) => handleChange("about", "description", e.target.value)}
        />

        {/* AMENITIES */}
        <h3 className="text-xl font-semibold mb-3">Amenities</h3>
        {(data.amenities || []).map((item, index) => (
          <div key={index} className="mb-4 border p-4 rounded">
            <input
              className="w-full p-2 border rounded mb-2"
              value={item.title || ""}
              placeholder="Title"
              onChange={(e) =>
                handleAmenityChange(index, "title", e.target.value)
              }
            />
            <input
              className="w-full p-2 border rounded mb-2"
              value={item.description || ""}
              placeholder="Description"
              onChange={(e) =>
                handleAmenityChange(index, "description", e.target.value)
              }
            />
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => handleDeleteAmenity(index)}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mb-6"
          onClick={handleAddAmenity}
        >
          Add Amenity
        </button>

        {/* FAQ */}
        <h3 className="text-xl font-semibold mb-3">FAQ</h3>
        {(data.faq || []).map((item, index) => (
          <div key={index} className="mb-4 border p-4 rounded">
            <input
              className="w-full p-2 border rounded mb-2"
              value={item.question || ""}
              placeholder="Question"
              onChange={(e) =>
                handleFaqChange(index, "question", e.target.value)
              }
            />
            <input
              className="w-full p-2 border rounded mb-2"
              value={item.answer || ""}
              placeholder="Answer"
              onChange={(e) => handleFaqChange(index, "answer", e.target.value)}
            />
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => handleDeleteFaq(index)}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mb-6"
          onClick={handleAddFaq}
        >
          Add FAQ
        </button>

        {/* SAVE BUTTON */}
        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          onClick={handleSave}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Admin;
