import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3500",
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjQzOWExNDc4OTAyMDc4YTliMDM2NCIsInNpZCI6IkVZbGprbVh1WmtiRU11V3A0SGo0aSIsImlhdCI6MTcyNzM4NzUxMCwiZXhwIjoxNzI3OTkyMzEwfQ.48_Mm5lr-eQ6w_mx9GJN35gom-Z3P1ERw42jzQGivaw"; // Hardcoded token for now
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
