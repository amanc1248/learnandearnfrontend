import { FETCH_ALL_ACTIVE_SUSBCRIPTIONS_USER_ROUTE_CONSTANT, SUBSCRIPTION__BYID_CONSTANT } from "../constants/routes/subscriptionRoutes.constants";
import { createAxiosInstance } from "../utils/axiosInstance.utils";
const axiosInstance = createAxiosInstance();

// get all active subscriptions of the user
export const getAllActiveSubscriptionsOfUser = ({token}) => {
  return new Promise((resolve, reject) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      axiosInstance
        .get(FETCH_ALL_ACTIVE_SUSBCRIPTIONS_USER_ROUTE_CONSTANT, config)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};


// subscription by id
export const subscriptionById = ({ adminToken, _id }) => {
  return new Promise((resolve, reject) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${adminToken}`
        },
        params: {
          subscriptionId:_id,
        },
      };
      axiosInstance
        .get(SUBSCRIPTION__BYID_CONSTANT, config)
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
