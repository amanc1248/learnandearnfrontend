import { CREATE_PAYMENT_ROUTE_CONSTANT } from "../constants/routes/paymentRoutes.constants";
import { createAxiosInstance } from "../utils/axiosInstance.utils";
const axiosInstance = createAxiosInstance();

// create payment using bank transfer
export const createPayment = ({ createPaymentObject, token }) => {
  return new Promise((resolve, reject) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const data = createPaymentObject;
      axiosInstance
        .post(CREATE_PAYMENT_ROUTE_CONSTANT, data, config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};
