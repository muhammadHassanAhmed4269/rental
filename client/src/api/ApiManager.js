import axios from "axios";

const ApiManager = axios.create({
  baseURL: "https://rental-mate-backend.vercel.app",
  withCredentials: true,
});

export default ApiManager;
