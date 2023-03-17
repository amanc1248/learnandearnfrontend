import { createAxiosInstance } from "../utils/axiosInstance.utils";
const axiosInstance = createAxiosInstance();

// reset user password
export const resetUserPassword = ({ email, password }) => {
    return new Promise((resolve, reject) => {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      axiosInstance
        .put("/user/resetPassword", { email, password }, config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error)
        });
    });
  };