import { GET_COURSE_CONSTANT } from "../constants/routes/courseRoutes.constants";
import { createAxiosInstance } from "../utils/axiosInstance.utils";
const axiosInstance = createAxiosInstance();

export const getCourse = ({token,courseId})=>{
    return new Promise((resolve, reject)=>{
      try{
        const config = {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          params: {
            courseId,
          }
        };
        axiosInstance.get(GET_COURSE_CONSTANT, config).then((response)=>{
          resolve(response.data);
        }).catch((error)=>{
          reject(error)
        })
      }catch(error){
        reject(error)
      }
    })
  }