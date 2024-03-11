import { Route, Routes } from "react-router-dom"
import Signup from "./register/Signup"
import Login from "./register/Login"
const Page = () => {
    return (
        <Routes>
            <Route element={<Signup />} path="/" />
            <Route element={< Login />} path="/login" />
        </Routes>
    )
}

export default Page