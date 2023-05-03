import { ADMIN_LOGIN_CONSTANT, ADMIN__USER__FULL__DETAILS_CONSTANT } from "../constants/routes/adminRoutes.constant";
import { createAxiosInstance } from "../utils/axiosInstance.utils";
const axiosInstance = createAxiosInstance();

// admin login
export const adminLogin = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          email,
          password,
        },
      };
      axiosInstance
        .get(ADMIN_LOGIN_CONSTANT, config)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    } catch (error) {
      reject(error);
    }
  });
};


// user full details
export const userFullDetails = ({ adminToken, _id, email }) => {
  return new Promise((resolve, reject) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${adminToken}`
        },
        params: {
          userId:_id,
          email,
        },
      };
      axiosInstance
        .get(ADMIN__USER__FULL__DETAILS_CONSTANT, config)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    } catch (error) {
      reject(error);
    }
  });
};
