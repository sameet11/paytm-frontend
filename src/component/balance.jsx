import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Balance=()=>{
    const router=useNavigate();
    const [balance,setbalance]=useState("")
    useEffect(()=>{
        const GetBalance=async()=>{
            const token=localStorage.getItem("token");
            if(!token){
                router('/signin');
            }
            const response=await axios.get('https://paytm-topaz.vercel.app/api/v1/account/balance',{
                headers:{
                    authorization:`Bearer ${token}`
                }
            })
            if(!response.data.Balance){
                toast.error(response.data.error);
            }
            else{
                setbalance(response.data.Balance + '');
            }
        }
        GetBalance();
    },[])
    return(
        <div className="flex gap-2 p-3 mt-2">
            <h1 className="text-xl font-bold">Your Balance</h1>
            <h2 className="text-xl font-semibold">Rs. {balance}</h2>
        </div>
    )
}
export default Balance;