import { VERIFY_OTP_ROUTE } from "../constants/routes/otpRoutes.constants";
import { createAxiosInstance } from "../utils/axiosInstance.utils";
const axiosInstance = createAxiosInstance();

// send otp for creating password
export const sendOTPForCreatingUser = ({ email }) => {
  return new Promise((resolve, reject) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    axiosInstance
      .post("/otp/creatUserOTP", { email }, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error)
      });
  });
};

// send otp for reseting password
export const sendOTPForResetingPassword = ({ email }) => {
  return new Promise((resolve, reject) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    axiosInstance
      .post("/otp/resetPasswordOTP", { email }, config)
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
      .get(VERIFY_OTP_ROUTE, config)
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
