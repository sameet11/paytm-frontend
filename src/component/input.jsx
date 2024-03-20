const Input=({label,placeholder,head,onChange})=>{
    return(
        <div className="pb-1">
        <h2 className="text-md font-bold pb-1 text-left">{head}</h2>
        <input type={label} placeholder={placeholder} className="border rounded-lg p-1 w-full" onChange={onChange} />
        </div>
    )
}
export default Input;