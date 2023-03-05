import axios from "axios";
import { createAxiosInstance } from "../utils/axiosInstance.utils";
const axiosInstance = createAxiosInstance();

// login
export const login = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    try {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
        params: {
          email,
          password,
        },
      };
      axiosInstance.get("/user/login", config).then((response) => {
        resolve(response);
      });
    } catch (error) {
      reject(error);
    }
  });
};
