import axios from "axios";
import { createAxiosInstance } from "../utils/axiosInstance.utils";
const axiosInstance = createAxiosInstance();

// send otp
export const sendOTP = ({ email }) => {
  return new Promise((resolve, reject) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    axiosInstance
      .post("/otp/", { email }, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error)
      });
  });
};

// verify otp
export const verifyOTP = ({ otp, email }) => {
  return new Promise((resolve, reject) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
      params: {
        otp,
        email,
      },
    };

    axiosInstance
      .get("/otp/", config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error)
      });
  });
};

// create new user
export const createUser = ({name, email, password})=>{
  return new Promise((resolve, reject)=>{
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    axiosInstance.post("/user",{name,email, password},config).then((response)=>{
      resolve(response);
    }).catch((error)=>{
      reject(error)
    })
  })
}
