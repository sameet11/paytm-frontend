const AppBar=()=>{
    return(
        <div className="flex justify-between w-full p-3 shadow-lg">
            <h1 className="text-xl font-bold">Payments App</h1>
            <div className="flex gap-2 p-1">
                <h2 className="mt-1
                ">Hello,User</h2>
                <div className="rounded-full bg-slate-400 h-8 w-8 flex justify-center items-center text-lg">
                    U
                </div>
            </div>
        </div>
    )
}
export default AppBar;