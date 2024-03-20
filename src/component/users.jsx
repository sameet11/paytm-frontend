import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import Button from "./button";

const Users=()=>{
    const router=useNavigate();
    const [users,setusers]=useState([]);
    const [filter,setfilter]=useState("");
    useEffect(()=>{
        const getusers=async()=>{
            const token=localStorage.getItem("token");
            if(!token){
                router('/signin');
            }
            const response=await axios.get(`https://paytm-topaz.vercel.app/api/v1/user/bulk?filter=${filter}`,{
                headers:{
                    authorization:`Bearer ${token}`
                }
            })
            if(response.data.error){
                toast.error(data.error);
            }
            else{
                setusers(response.data.user);
            }
        }
        getusers();
    },[filter])
    return <>
    <div className="font-bold mt-6 text-lg p-2">
        Users
    </div>
    <div className="my-2">
        <input onChange={(e) => {
            setfilter(e.target.value)
        }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
    </div>
    <div>
        {users.map(user => <User user={user} />)}
    </div>
</>
}

function User({user}) {
const navigate = useNavigate();

return <div className="flex justify-between p-2">
    <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-full text-xl">
                {user.firstName[0]}
            </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
            <div>
                {user.firstName} {user.lastName}
            </div>
        </div>
    </div>

    <div className="flex flex-col justify-center h-ful p-1">
        <Button onClick={(e) => {
            navigate("/send?id=" + user._id + "&name=" + user.firstName+" "+user.lastName);
        }} label={"Send Money"} />
    </div>
</div>
}

export default Users;