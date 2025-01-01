import Header from './Header.jsx';
import hidePaddwordIcon from '../assets/hidePassword.png'
import showPasswordIcon from '../assets/showPassword.png'
import { useState, useRef } from 'react';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordIcon, setPasswordIcon] = useState(hidePaddwordIcon);
    const [formState, setFormState] = useState("Sign in");
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
        if (showPassword) {
            setPasswordIcon(hidePaddwordIcon);
        } else {
            setPasswordIcon(showPasswordIcon);
        }
    };
    const toggleFormState = () => {
        if (formState === "Sign in") {
            setFormState("Sign up");
        }
        else{
            setFormState("Sign in");
        }
    };  

    const handleSubmit=()=>{
        if(formState === "Sign in"){
            console.log(email.current.value);
            console.log(password.current.value);
        }
        else{
            console.log(name.current.value);
            console.log(email.current.value);
            console.log(password.current.value);
        }
    }
    



    return (
        <div className="w-full h-full">
            <Header />
            <div className=" w-11/12 mx-auto h-5/6 flex justify-center items-center relative">
                <div className="absolute z-0 rounded-2xl p-16 w-1/4 h-2/3 bg-black opacity-80">
                </div>
                <div className="relative z-10 px-16 py-10 w-1/4 h-2/3">
                    <h1 className="text-3xl text-white mb-5">{formState}</h1>
                    {formState === "Sign up" && <input ref={name} className=" h-12 my-2 w-full p-2 rounded-md bg-zinc-800 placeholder-zinc-500 focus:outline-none text-zinc-400" type="text" placeholder="Enter your name"/>}
                    <input ref={email} className=" h-12 my-2 w-full p-2 rounded-md bg-zinc-800 placeholder-zinc-500 focus:outline-none text-zinc-400" type="text" placeholder="Email or phone number"/>
                    <div className="relative h-12 my-2 w-full rounded-md bg-zinc-800 flex items-center">
                        <input ref={password} className="h-full w-11/12 p-2 rounded-md bg-zinc-800 placeholder-zinc-500 focus:outline-none text-zinc-400" type={showPassword ? "text" : "password"} placeholder="Password" />
                        <img className=" h-1/2 absolute right-2 cursor-pointer bg-white rounded-3xl" src={passwordIcon} alt="Password Icon" onClick={toggleShowPassword} />
                    </div>
                    <button className="h-12 mt-8 w-full p-2 rounded-md bg-red-600" onClick={handleSubmit}>{formState}</button>
                    <div className=" mt-1">
                        <input type="checkbox" className="hover:cursor-pointer accent-red-600 mr-1 " />
                        <label className="text-slate-400 text-xs">Remember me</label>
                    </div>
                    <div className="mt-8">
                        <p className="text-slate-400 text-sm mt-2">
                            {formState === "Sign in" ? "New to Netflix?" : "Already have an account?"}
                            &nbsp;
                            <span className=" text-md text-blue-600 hover:text-red-600 cursor-pointer" onClick={toggleFormState}>
                                {formState === "Sign in" ? "Sign up now." : "Sign in."}
                            </span>
                        </p>
                    <p className="text-slate-400 text-xs mt-4">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-blue-600 hover:text-red-600 cursor-pointer">Learn more.</span></p>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default Login;