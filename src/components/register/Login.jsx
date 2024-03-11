import { Link } from "react-router-dom"
import { useState } from "react"
import "../firebase/config"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const Login = () => {

  const [show, setShow] = useState(false)

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")

  function handleShow() {
    setShow(prev => !prev)
  }

  let auth = getAuth()

  function handleLogin(e) {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password).then(() => alert("Loginned has been successfully"))
    .catch((err) => alert(err))
  }

  return (
    <div className=" bg-beauty phone:bg-nature phone:flex phone:justify-center phone:items-center bg-cover h-[100vh] ">
      <form onSubmit={handleLogin} className=' backdrop-blur-[10px] p-7 overflow-hidden max-w-[450px] h-[100vh] phone:h-[500px]  rounded-[20px] mx-auto '>
        <h1 className=' text-[40px] font-bold text-center top-2 text-white '>Nice to see you</h1>
        <h3 className=' text-center text-[25px] text-white font-semibold opacity-55 '>Login now</h3>
        <label>
          <p className=' font-semibold text-white '>Email</p>
          <input required onChange={(e) => setEmail(e.target.value)} type="email" className=' w-[100%] h-[40px] bg-transparent border-b-white mt-2 pl-3 font-semibold placeholder:text-white outline-none text-white border-b-4 ' placeholder='Enter your email' />
        </label> <br /> <br />
        <label>
          <p className=' font-semibold text-white '>Password</p>
          <input required onChange={(e) => setPassword(e.target.value)} type={show ? "text" : "password"} className=' w-[100%] h-[40px] bg-transparent mt-2 pl-3 text-white font-semibold placeholder:text-white outline-none border-b-4 ' placeholder='Enter your password' />

          <button onClick={handleShow} type='button' className={`fa-solid ${show ? "fa-eye" : "fa-eye-slash"} relative phone:left-[270px] left-[360px] bottom-[30px] text-white`}></button>
        </label>

        <button type="submit" className=' w-[100%] h-[45px] bg-blue-700 text-white font-semibold rounded-[10px] hover:bg-blue-900 mt-4 '>Login</button>
        <p className=' text-white text-center font-semibold mt-4 '>Don't have account <Link className=' text-blue-500 ' to="/">Sign up now</Link> </p>
      </form>
    </div>
  )
}

export default Login