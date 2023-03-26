import { CHANGE_EMAIL_OTP_ROUTE } from "../constants/routes/otpRoutes.constants";
import { createAxiosInstance } from "../utils/axiosInstance.utils";
const axiosInstance = createAxiosInstance();

// chnage email otp
export const changeEmailOTP = ({ email, token }) => {
    return new Promise((resolve, reject) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        };
        axiosInstance.post(CHANGE_EMAIL_OTP_ROUTE, {email}, config).then((response) => {
          resolve(response);
        }).catch((error)=>{
          reject(error)
        })
      } catch (error) {
        reject(error);
      }
    });
  };