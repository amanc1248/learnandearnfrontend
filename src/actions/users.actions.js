import {
  CHANGE_USER_EMAIL_ROUTE,
  CHANGE_USER_PASSWORD_ROUTE,
  GET_USER_DATA,
  IS_USER_PRO,
} from "../constants/routes/userRoutes.constants";
import { createAxiosInstance } from "../utils/axiosInstance.utils";
const axiosInstance = createAxiosInstance();

// reset user password
export const resetUserPassword = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axiosInstance
      .put("/user/resetPassword", { email, password }, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// change email
export const changeUserEmail = ({ id, email, newEmail, token }) => {
  return new Promise((resolve, reject) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const data = {
      id,
      email,
      newEmail,
    };
    axiosInstance
      .put(CHANGE_USER_EMAIL_ROUTE, data, config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// change user password
export const changeUserPassword = ({
  email,
  token,
  newPassword,
  currentPassword,
}) => {
  return new Promise((resolve, reject) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const data = {
      email,
      newPassword,
      currentPassword,
    };
    axiosInstance
      .put(CHANGE_USER_PASSWORD_ROUTE, data, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};

// get user data
export const getUserData = ({token})=>{
  return new Promise((resolve, reject)=>{
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      axiosInstance.get(GET_USER_DATA, config).then((response)=>{
        console.log(response);
        resolve(response.data)
      }).catch((error)=>{
        console.error(error)
        reject(error);
      })
    } catch (error) {
      reject(error)
    }
  })
}

// check if user is pro
export const checkIsUserPro = ({
  email,
  token,
}) => {
  return new Promise((resolve, reject) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axiosInstance
      .get(IS_USER_PRO, config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};