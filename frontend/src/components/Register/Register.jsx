import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import "./Register.css"
import { API_BASE_URL } from "../constants"

//import apiClient from "components/services/apiClient"


export default function Register(props) {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
    agreeToTerms: false,
  })
//   function setNav() {
//     setLoggedIn(true)
//   }
  

  const handleOnInputChange = (event) => {
    if (event.target.name === "password") {
      if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
        setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match" }))
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }))
      }
    }
    if (event.target.name === "passwordConfirm") {
      if (form.password && form.password !== event.target.value) {
        setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match" }))
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }))
      }
    }
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
      } else {
        setErrors((e) => ({ ...e, email: null }))
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  const handleOnSubmit = async () => {
    setIsLoading(true)
    setErrors((e) => ({ ...e, form: null }))

    if (form.passwordConfirm !== form.password) {
      setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }))
      setIsLoading(false)
      return
    } else {
      setErrors((e) => ({ ...e, passwordConfirm: null }))
    }

    try {
      const res = await axios.post(API_BASE_URL+"/auth/register", {
        username: form.username,
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        password: form.password,
      })

      if (res?.data?.user) {
        // let nav = "/"
        // if (redirect){
        //   nav = "/"+redirectInfo
        // }
        // setAppState(res.data)
        setIsLoading(false)
        // setNav(true)
        // setRedirect(false)
        // setRedirectInfo("")
        console.log("users data", res.data)
        props.setUser(res.data)
        navigate("/PostLoginlanding")
        props.setLoggedIn(true)
        
      } else {
        setErrors((e) => ({ ...e, form: "Something went wrong with registration" }))
        setIsLoading(false)
      }
    //   const { data, error } = await apiClient.signupUser({
    //     first_name: form.first_name,
    //      last_name: form.last_name,
    //      email: form.email,
    //      password: form.password,
    //     username: form.username
    //   })
    //   if (error)
    //   {
    //     setErrors((e) => ({ ...e, form: error }))
    //     setIsLoading(false);
    //   }
    //   if (data?.user)
    //   {
    //     setAppState(data.user);
    //     apiClient.setToken(data.token)
    //     setIsLoading(false)
    //     setLoggedIn(true)
    //     setNav(true)
    //     setRedirect(false)
    //     setRedirectInfo("")
    //     navigate("/nutriton")
    //   }
    } catch (err) {
      console.log(err)
      const message = err?.response?.data?.error?.message
      setErrors((e) => ({ ...e, form: message ? String(message) : String(err) }))
      setIsLoading(false)
    }
  }

  return (
    <div className="Register">
      <br></br>
      <div className="register-card">
       
        <p className="switchL">
            Already have an account? 
            <br></br>
            <Link className="underline" to="/login">Log in here</Link>
          </p>
           
          <h2 className="title-sign">Sign Up</h2>

        {errors.form && <span className="error">{errors.form}</span>}

          <div className="split-inputs">
          <div className="input-field">
              <label htmlFor="name">Username</label><br/>
              <input
              className="input-bar"
                type="text"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleOnInputChange}
              />
              <br/>
              {errors.username && <span className="error">{errors.username}</span>}
            </div>
            <div className="input-field">
              <label htmlFor="name">First Name</label><br/>
              <input
              className="input-bar"
                type="text"
                name="first_name"
                placeholder="Jane"
                value={form.first_name}
                onChange={handleOnInputChange}
              />
              <br/>
              {errors.first_name && <span className="error">{errors.first_name}</span>}
            </div>
            <div className="input-field">
              <label htmlFor="name">Last Name</label><br/>
              <input
              className="input-bar"
                type="text"
                name="last_name"
                placeholder="Doe"
                value={form.last_name}
                onChange={handleOnInputChange}
              />
              <br/>
              {errors.last_name && <span className="error">{errors.last_name}</span>}
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="email">Email</label><br/>
            <input
            className="input-bar"
              type="email"
              name="email"
              placeholder="jane@doe.io"
              value={form.email}
              onChange={handleOnInputChange}
            />
            <br/>
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label><br/>
            <input
            className="input-bar"
              type="password"
              name="password"
              placeholder="password"
              value={form.password}
              onChange={handleOnInputChange}
            />
            <br/>
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="passwordConfirm">Confirm Password</label><br/>
            <input
            className="input-bar"
              type="password"
              name="passwordConfirm"
              placeholder="confirm password"
              value={form.passwordConfirm}
              onChange={handleOnInputChange}
            />
            <br/>
            {errors.passwordConfirm && <span className="error">{errors.passwordConfirm}</span>}
          </div>

          <button className="register-btn" disabled={isLoading} onClick={handleOnSubmit}>
            {isLoading ? "Loading..." : "Sign Up"}
          </button>
          {/* <button className="register-btn">Sign Up</button> */}
          
          <h2 className="wel-R">Welcome to TerraLearn!</h2>
          
        </div>
        <div className="background-register">
        </div>
        <div className="background-register-two">
        </div>

    
      </div>
  )
}