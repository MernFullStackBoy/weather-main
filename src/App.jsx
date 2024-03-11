import { BrowserRouter } from "react-router-dom"
import Page from "./components/page"
import { useEffect, useState } from "react"
import "./components/firebase/config"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import Weather from "./components/weather/Weather"

const App = () => {
  const [isLogin, setIslogin] = useState(false)

  let auth = getAuth()

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setIslogin(true)
      } else {
        setIslogin(false)
      }
    })
  }, [auth])


  return (
    <BrowserRouter>
      {!isLogin && <Page />}
      {isLogin && <Weather />}
    </BrowserRouter>
  )
}

export default App