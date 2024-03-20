import Heading from "./heading";
import SubHeading from "./subheading";
import Input from "./input";
import Warning from "./warning";
import Button from "./button";
const Signin=()=>{
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
        <img src="logo.png" alt="logo"  className="h-20 w-20 mx-auto"/>
            <div className="rounded-lg bg-white w-80 text-center p-2 px-4">
                <Heading label={"Sign In"}/>
                <SubHeading label={"Enter your credentials to access your account"}/>
                <Input label={"text"} placeholder={"John.Doe@gmail.com"} head={"Email"}/>
                <Input label={"text"} placeholder={"1234"} head={"Password"}/>
                <Button label={"Signin"}/>
                <Warning label={"Dont't have an account?"} to={"/signup"} text={"Sign up"}/>
            </div>
        </div>
    </div>
    )
}
export default Signin;