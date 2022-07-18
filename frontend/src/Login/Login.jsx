import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import "./Login.css"
//import apiClient from "components/services/apiClient"


export default function Login() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    email: "",
    password: "",
  })
//   let pageDirect= "closed"
//   if (redirect) {
//     pageDirect = "redirect"
//   }
  
//   function setNav(){
//     setLoggedIn(true)
//   }

//   const handleOnInputChange = (event) => {
//     if (event.target.name === "email") {
//       if (event.target.value.indexOf("@") === -1) {
//         setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
//       } else {
//         setErrors((e) => ({ ...e, email: null }))
//       }
//     }

//     setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
//   }

//   const handleOnSubmit = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)
//     setErrors((e) => ({ ...e, form: null }))

//     try {
      
//       const { data, error } = await apiClient.loginUser({ email: form.email, password: form.password })
//       if (error)
//       {
//         setErrors((e) => ({ ...e, form: "Invalid username/password combination" }))
//       }
//       if (data?.user)
//       {
//         setAppState(data.user)
//         apiClient.setToken(data.token)
//         setAppState(data)
//         setIsLoading(false)
//         setLoggedIn(true)
//         setNav(true)
//         setRedirect(false)
//         setRedirectInfo("")
//         navigate("/nutrition");
//       }
//       setIsLoading(false);
//       // const res = await axios.post(`http://localhost:3001/auth/login`, form)
//       // if (res?.data) {
//       //   let nav = "/"
//       //   if (redirect){
//       //     nav = "/"+redirectInfo
//       //   }
//       //   setAppState(res.data)
//       //   setIsLoading(false)
//       //   setNav(true)
//       //   setRedirect(false)
//       //   setRedirectInfo("")
//       //   navigate(nav)
        
//       // } else {
//       //   setErrors((e) => ({ ...e, form: "Invalid username/password combination" }))
//       //   setIsLoading(false)
//       // }
//     } catch (err) {
//       console.log(err)
//       const message = err?.response?.data?.error?.message
//       setErrors((e) => ({ ...e, form: message ? String(message) : String(err) }))
//       setIsLoading(false)
//     }
//   }

  return (
    <div className="Login">
        
           
        
            <h1>HELLO THIS IS THE LOGIN</h1>
            <div className="login-card">
                <p className="switchR">
                    Don't have an account? Sign up <Link to="/register">here</Link>
                </p>
                <h2>Sign Up</h2>

                <div className="form">
                <div className="input-field">
                    <label htmlFor="email">Email or Username</label><br/>
                    <input
                    className="input-bar"
                    type="email"
                    name="email"
                    placeholder="user@gmail.com"
                    value={form.email}
                    //   onChange={handleOnInputChange}
                    />
                    {/* {errors.email && <span className="error">{errors.email}</span>} */}
                </div>

                <div className="input-field">
                    <label htmlFor="password">Password</label><br/>
                    <input
                    className="input-bar"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    //   onChange={handleOnInputChange}
                    />
                    {/* {errors.password && <span className="error">{errors.password}</span>} */}
                </div>

                {/* <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
                    {isLoading ? "Loading..." : "Login"}
                </button> */}
                <button className="login-btn">Sign In</button>
                <h2>Welcome back to TerraLearn!</h2>
                </div>

                <div className="footer">
                
                </div>
            </div>
         <div className="background-login">
        </div>
        <div className="background-login-two">
        </div>
    </div>
  )
}