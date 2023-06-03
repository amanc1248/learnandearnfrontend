import { CREATE_PAYMENT_ROUTE_CONSTANT, GET_ALL_PAYMENTS_CONSTANT, GET_INREVIEW_PAYMENT_CONSTANT } from "../constants/routes/paymentRoutes.constants";
import { createAxiosInstance } from "../utils/axiosInstance.utils";
const axiosInstance = createAxiosInstance();

// create payment using bank transfer
export const createPayment = ({ createPaymentObject, token }) => {
  return new Promise((resolve, reject) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axiosInstance
        .post(CREATE_PAYMENT_ROUTE_CONSTANT, createPaymentObject, config)
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

// fetch payment of user in review status
export const getPaymentStatus = ({ token }) => {
  return new Promise((resolve, reject) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      axiosInstance.get(GET_INREVIEW_PAYMENT_CONSTANT, config).then((response)=>{
        resolve(response.data)
      }).catch((error)=>{
        console.log(error)
        reject(error)
      })
    } catch (e) {
      reject(e)
    }
  });
};

// fetch all payments of the user
export const fetchAllPayments = ({token})=>{
  return new Promise((resolve, reject)=>{
    try{
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      axiosInstance.get(GET_ALL_PAYMENTS_CONSTANT,config).then((response)=>{
        resolve(response.data)
      })
    }catch(e){
      console.error(e)
      reject(e);
    }
  })
}
