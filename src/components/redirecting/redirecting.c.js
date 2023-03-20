import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RedirectingP } from "./redirecting.p"

export const RedirectingC = ()=>{

//   use navigate
const navigate = useNavigate();

// use effects
useEffect(()=>{
    handleNavigate("/")
},[])
// functions
const handleNavigate = (route)=>{
    navigate(route);
}
    return <RedirectingP handleNavigate={handleNavigate}></RedirectingP>
}