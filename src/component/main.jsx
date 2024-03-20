import { useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Main=()=>{
    const router=useNavigate();
    useEffect(()=>{
       const checkUser=async()=>{
        const token=localStorage.getItem("token");
        if(!token){
            router('/signup')
            return;
        }
        const response= await axios.get('https://paytm-backend-yohj.onrender.com/api/v1/user/me',{
            headers:{
                authorization:`Bearer ${token}`
            }
        })
        if(response.data.data="Verified"){
            router('/dashboard');
        }
        else{
            router('/signup');
        }
       }
       checkUser() 
    },[]);
    return(
<div className="w-full h-full"><img src="logo.png" alt="logo" className="w-fit h-fit" /></div>
    );
}
export default Main;