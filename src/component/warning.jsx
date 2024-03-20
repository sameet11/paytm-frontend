import { Link } from "react-router-dom";
const Warning=({label,to,text})=>{
    return(
        <div className="flex justify-center gap-1 mx-auto pt-3">
        <p>{label}</p>
        <Link className="underline" to={to}>{text}</Link>
        </div>
    )
}
export default Warning;