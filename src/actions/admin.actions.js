import { ADMIN_LOGIN_CONSTANT, ADMIN__ALL__USERS__CONSTANT, ADMIN__PAYMENT__ALL_CONSTANT, ADMIN__PAYMENT__BYID_CONSTANT, ADMIN__SUBSCRIPTION__BYID_CONSTANT, ADMIN__UPDATE__PAYMENTBYID__CONSTANT, ADMIN__USER__FULL__DETAILS_CONSTANT } from "../constants/routes/adminRoutes.constant";
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

// subscription by id
export const subscriptionByIdAdmin = ({ adminToken, _id }) => {
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
        .get(ADMIN__SUBSCRIPTION__BYID_CONSTANT, config)
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

// paymenet by id
export const paymentByIdAdmin = ({ adminToken, _id }) => {
  return new Promise((resolve, reject) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${adminToken}`
        },
        params: {
          paymentId:_id,
        },
      };
      axiosInstance
        .get(ADMIN__PAYMENT__BYID_CONSTANT, config)
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

// paymenet by id
export const paymentAllAdmin = ({ adminToken }) => {
  return new Promise((resolve, reject) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${adminToken}`
        },
      };
      axiosInstance
        .get(ADMIN__PAYMENT__ALL_CONSTANT, config)
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

// get all users
export const allUsersAdmin = ({ adminToken }) => {
  return new Promise((resolve, reject) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${adminToken}`
        },
      };
      axiosInstance
        .get(ADMIN__ALL__USERS__CONSTANT, config)
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

// update payment by id
export const updatePaymentByIdAdmin = ({ adminToken, reviewStatus, id, userId, }) => {
  return new Promise((resolve, reject) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${adminToken}`
        },
        
      };
      const data ={
        reviewStatus,
        _id:id,
        userId,
      }
      axiosInstance
        .put(ADMIN__UPDATE__PAYMENTBYID__CONSTANT,data, config)
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