import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Button from "./button";
import Heading from "./heading";
import Input from "./input";
import SubHeading from "./subheading";
import Warning from "./warning";
import { useNavigate } from "react-router-dom";

const Signup=()=>{
    const [firstname,setfirstname]=useState("");
    const [lastname,setlastname]=useState("");
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const router=useNavigate();
    const handleClick=async()=>{
        const response=await axios.post('https://paytm-backend-yohj.onrender.com/api/v1/user/signup',{
            username: username,
            password: password,
            firstName: firstname,
            lastName: lastname,
          
          })
          if(response.error&&!response.data){
            toast.error(response.error);
          }
          else{
            localStorage.setItem("token",response.data.token);
            router('/dashboard');
          }
    }
    return(
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <img src="logo.png" alt="logo"  className="h-20 w-20 mx-auto"/>
                <div className="rounded-lg bg-white w-80 text-center p-2 px-4">
                    <Heading label={"Sign up"}/>
                    <SubHeading label={"Enter your information to create an account"}/>
                    <Input label={"text"} placeholder={"John"} head={"First Name"} onChange={(e)=>setfirstname(e.target.value)}/>
                    <Input label={"text"} placeholder={"Doe"} head={"Last Name"} onChange={(e)=>setlastname(e.target.value)}/>
                    <Input label={"text"} placeholder={"John.Doe@gmail.com"} head={"Email"} onChange={(e)=>setusername(e.target.value)}/>
                    <Input label={"text"} placeholder={"1234"} head={"Password"} onChange={(e)=>setpassword(e.target.value)}/>
                    <Button label={"Signup"} onClick={handleClick}/>
                    <Warning label={"Already have an account?"} to={"/signin"} text={"Sign in"}/>
                </div>
            </div>
        </div>
    )
}
export default Signup;