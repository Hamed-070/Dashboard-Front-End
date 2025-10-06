<<<<<<< HEAD
import axios , {AxiosResponse} from "../../node_modules/axios/index";
import React, { useRef, useState } from "react"
import {motion } from 'framer-motion' 
import { useNavigate } from "react-router-dom";


export default function Login(){
=======
import axios , {AxiosPromise, AxiosResponse} from "../../node_modules/axios/index";
import React, { useRef, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import { Routes , Route } from "react-router-dom";
import Home from "./Home";


export default function Login({ onLoginSuccess }: { onLoginSuccess: () => void }){
>>>>>>> another

    const [form , setForm] = useState({
        username:"" , 
        password:""
    }) ; 
    const [loading , setLoading] = useState<boolean>(false) ;     
    const [mg , setMg] = useState<string>('') ;  
<<<<<<< HEAD
    const naviage = useNavigate() ; 
=======
    const navigate = useNavigate() ; 
>>>>>>> another

    async function handelSubmit (e:React.FormEvent<HTMLFormElement>) {
        try{
            e.preventDefault() ; 
            setLoading(true) ; 
<<<<<<< HEAD
            const res = await axios.post(`http://localhost:8000/token/` , form) ; 
=======
            const res:AxiosResponse = await axios.post(`http://localhost:8000/token/` , form) ; 
>>>>>>> another
            console.log(res) ;  
            if (res.status === 200){
                localStorage.setItem('access' , res.data.access) ; 
                localStorage.setItem('refresh' , res.data.refresh) ; 
                localStorage.setItem('username' , form.username) ;   
<<<<<<< HEAD
                 
                naviage('/home') ; 

=======
                onLoginSuccess() ;
                navigate('/') ; 
>>>>>>> another
            }
        }catch(err:any){
            if(err.response.status === 401){
                setMg("Username is not Found !") ; 
            }

        }finally{
            setLoading(false) ; 
        }

    }

    function handelChange (e:React.ChangeEvent<HTMLInputElement>) {
        const {name , value} = e.target ; 
        setForm((prev) => ({...prev , [name] : value})) ; 
    }



    return(
<<<<<<< HEAD
        <div className="w-full h-full flex items-center justify-center bg-gray-300"> 
=======
        <div className="w-full h-screen flex items-center justify-center bg-gray-300"> 
            {/* <Routes>
                <Route path="/" element={<Home />} />
            </Routes> */}
>>>>>>> another

            {loading ? (
                <div className="w-full h-full flex items-center justify-center">
                    <h1 className="text-3xl">Loading...</h1>
                </div>
            ) : (

            <form onSubmit={(e) => handelSubmit(e)} className="bg-white p-5 border w-2/6 h-3/6 rounded-2xl shadow-xl flex flex-col items-center justify-center pt-10"> 

                <div className="h-1/6 w-full flex items-center justify-center">
                    <h1 className="text-5xl font-sans text-black" id="text" >Login</h1>
                </div>

                <div className="h-2/6 w-1/2 flex flex-col gap-4 items-center justify-center pt-5">
                    <input type="text" onChange={(e) => handelChange(e)} value={form.username} name="username" placeholder="Username" className="w-3/4 h-10 rounded-xl pl-3 border outline-none" />
                    <input type="password" onChange={(e) => handelChange(e)} value={form.password} name="password" placeholder="Password" className="w-3/4 h-10 rounded-xl pl-3 border outline-none" />
                </div>      

                <div className="h-1/6 w-full flex justify-center items-center pt-5">
                    <button type="submit" name="button" className="bg-green-400 text-white h-10 w-24 rounded-lg font-bold transition-transform hover:scale-110 ">Login</button>
                </div>

                <h1 className="text-xl text-red-500 mt-3">{mg}</h1>

            </form>
            )}
        
        </div>
    )

}

