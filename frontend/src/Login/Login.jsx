import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import "./Login.css"
import apiClient from "components/services/apiClient"

export default function Login({ setAppState, message, loggedIn, setLoggedIn, redirect, redirectInfo, setRedirect, setRedirectInfo }) {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    email: "",
    password: "",
  })
  let pageDirect= "closed"
  if (redirect) {
    pageDirect = "redirect"
  }
  
  function setNav(){
    setLoggedIn(true)
  }

  const handleOnInputChange = (event) => {
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
      } else {
        setErrors((e) => ({ ...e, email: null }))
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors((e) => ({ ...e, form: null }))

    try {
      
      const { data, error } = await apiClient.loginUser({ email: form.email, password: form.password })
      if (error)
      {
        setErrors((e) => ({ ...e, form: "Invalid username/password combination" }))
      }
      if (data?.user)
      {
        setAppState(data.user)
        apiClient.setToken(data.token)
        setAppState(data)
        setIsLoading(false)
        setLoggedIn(true)
        setNav(true)
        setRedirect(false)
        setRedirectInfo("")
        navigate("/nutrition");
      }
      setIsLoading(false);
      // const res = await axios.post(`http://localhost:3001/auth/login`, form)
      // if (res?.data) {
      //   let nav = "/"
      //   if (redirect){
      //     nav = "/"+redirectInfo
      //   }
      //   setAppState(res.data)
      //   setIsLoading(false)
      //   setNav(true)
      //   setRedirect(false)
      //   setRedirectInfo("")
      //   navigate(nav)
        
      // } else {
      //   setErrors((e) => ({ ...e, form: "Invalid username/password combination" }))
      //   setIsLoading(false)
      // }
    } catch (err) {
      console.log(err)
      const message = err?.response?.data?.error?.message
      setErrors((e) => ({ ...e, form: message ? String(message) : String(err) }))
      setIsLoading(false)
    }
  }

  return (
    <div className="Login">
      <div className="card">
        <h2>Login</h2>

        {errors.form || message ? <span className="error">{errors.form || message}</span>: null}
        <h4 className={pageDirect}>You must be logged in to access the {redirectInfo} page.</h4>

        {Boolean(errors.form) && <span className="error">{errors.form}</span>}
        <br />

        <div className="form">
          <div className="input-field">
            <label htmlFor="email">Email</label><br/>
            <input
              type="email"
              name="email"
              placeholder="user@gmail.com"
              value={form.email}
              onChange={handleOnInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label><br/>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleOnInputChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
            {isLoading ? "Loading..." : "Login"}
          </button>
        </div>

        <div className="footer">
          <p>
            Don't have an account? Sign up <Link to="/register">here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}