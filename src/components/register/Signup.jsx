import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../firebase/config"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const Signup = () => {

    const [email, setEmail] = useState("")

    const [pass, setPass] = useState("")

    const [show, setShow] = useState(false)

    function handleShow() {
        setShow(prev => !prev)

    }

    function signUp(e) {
        e.preventDefault()

        createUserWithEmailAndPassword(getAuth(), email, pass)
            .then(() => alert("Account has been created successfully"))
            .catch(() => alert("Something went wrong"))
    }

    return (
        <div className=' phone:flex phone:justify-center phone:items-center phone:bg-nature bg-beauty h-[100vh] bg-cover '>
            <form onSubmit={signUp} className=' backdrop-blur-[10px] p-7 max-w-[450px] overflow-hidden h-[100vh] phone:h-[550px] rounded-[20px] mx-auto '>
                <h1 className=' text-[40px] font-bold text-center top-2 text-white '>Welcome</h1>
                <h3 className=' text-center text-[25px] text-white font-semibold opacity-55 '>Sign up now</h3>
                <label>
                    <p className=' font-semibold text-white '>Username</p>
                    <input type="text" className=' w-[100%] h-[40px]  bg-transparent mt-2 pl-3 font-semibold placeholder:text-white outline-none border-b-4 text-white ' placeholder='Enter your name' />
                </label> <br /> <br />
                <label>
                    <p className=' text-white font-semibold '>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className=' w-[100%] h-[40px] bg-transparent mt-2 pl-3 font-semibold placeholder:text-white text-white border-b-4 outline-none ' placeholder='Enter your email' />
                </label> <br /> <br />
                <label>
                    <p className=' text-white font-semibold '>Password</p>
                    <input onClick={(e) => setPass(e.target.value)} type={show ? "text" : "password"} className=' w-[100%] h-[40px] bg-transparent border-b-4 text-white mt-2 pl-3 font-semibold placeholder:text-white outline-none ' placeholder='Enter your password' />
                    <button onClick={handleShow} type='button' className={`fa-solid ${show ? "fa-eye" : "fa-eye-slash"} relative left-[360px] phone:left-[270px] bottom-[30px] text-white`}></button>
                </label>

                <button type='submit' className=' w-[100%] h-[45px] bg-blue-700 text-white font-semibold rounded-[10px] hover:bg-blue-900 mt-4 '>Sign up</button>
                <p className=' text-white text-center font-semibold mt-4 '>Do you have already account <Link className=' text-blue-500 ' to="/login">Login now</Link> </p>
            </form>
        </div>
    )
}

export default Signup