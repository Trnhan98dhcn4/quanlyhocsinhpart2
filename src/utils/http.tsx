import axios from "axios";

const createHttpAxiosInstance = () => {
  return axios.create({
    baseURL: "http://localhost:4000",
    timeout: 10000,
  });
};

export default createHttpAxiosInstance;
