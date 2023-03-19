import { createAxiosInstance } from "../utils/axiosInstance.utils";
const axiosInstance = createAxiosInstance();

// login
export const login = ({ email, password }) => {
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
      axiosInstance.get("/user/login", config).then((response) => {
        resolve(response);
      }).catch((error)=>{
        reject(error)
      })
    } catch (error) {
      reject(error);
    }
  });
};

// check login
export const checkLogin = ({token})=>{
  return new Promise((resolve, reject)=>{
    try{
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      };
      axiosInstance.get("/user/checkLogin", config).then((response)=>{
        resolve(response.data);
      }).catch((error)=>{
        reject(error)
      })
    }catch(error){
      reject(error)
    }
  })
}