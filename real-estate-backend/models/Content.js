import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  hero: {
    title: String,
    subtitle: String,
  },
  about: {
    description: String,
  },
  amenities: [
    {
      title: String,
      description: String,
    },
  ],
  faq: [
    {
      question: String,
      answer: String,
    },
  ],
});

export default mongoose.model("Content", contentSchema);
