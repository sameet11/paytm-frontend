import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const Send=()=>{
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [amount,setamount]=useState("");
  const id=queryParams.get('id');
  const name=queryParams.get('name');
  const router=useNavigate();

  const handletransfer= async()=>{
    const token=localStorage.getItem("token");
    if(!token){
        router('/siginin');
    }
    const response= await axios.post('https://paytm-backend-yohj.onrender.com/api/v1/account/transfer',{
        to:id,
        amount:parseInt(amount),
    },{
        headers:{
            authorization:`Bearer ${token}`
        }
    })
    if(response.data.data){
        toast.success(`Money sent to ${name}`);
        setTimeout(()=>{
            router('/dashboard');
        },2000)
    }
    else{
        console.log(response.data)
        toast.error(response.data.error);
    }
  }
    return <div className="bg-slate-300 h-screen flex justify-center items-center">
        <div className="bg-white h-fit w-1/3 rounded-lg p-10">
            <div className="mb-20">
                <h1 className="text-3xl font-bold text-center mt-1">Send Money</h1>
            </div>
            <div className="flex gap-4 item-center">
                <div className="rounded-full w-14 flex items-center h-14 justify-center bg-green-500 text-white text-2xl font-semibold">
                    {name[0].toUpperCase()}
                </div>
                <h2 className="font-bold text-xl mt-2">{name.toUpperCase()}</h2>
            </div>
            <p className="font-semibold">Amount (in Rs)</p>
            <input type="text" name="" id="" placeholder="Enter Amount" className="w-full rounded-lg p-2 border mb-4" onChange={(e)=>{
                setamount(e.target.value);
            }} required/>
            <button className="bg-green-500 w-full p-2 rounded-lg text-white hover:bg-green-900" onClick={handletransfer}>Initiate Transfer</button>
        </div>
    </div>
}
export default Send;