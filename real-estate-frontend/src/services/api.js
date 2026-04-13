import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

export const getContent = () => API.get("/content");
export const updateContent = (data) => API.put("/content", data);

export const login = (data) => API.post("/auth/login", data);
