
import { useForm } from "react-hook-form"
import logo from "../assets/react.svg"
import { registerUserService } from "../services/userServices"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const Signup = () => {

  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm()

  const [emailError, setEmailError] = useState(null)

  const onSubmit = async (data) => {
    try {
      const response = await registerUserService(data)
      if(response.status === 201){
        console.log("Usuario registrado correctamente!")
        navigate("/login")
      }
    } catch (error) {
      console.error("Error al registrar el usuario", error.response.data.message) 
      setEmailError(error.response.data.message)
    }
  }

  return (
    <form onSubmit={handleSubmit ( onSubmit ) } className="m-auto d-grid gap-3 justify-content-center" style={{ maxWidth: "300px" }}>
      <img className="m-auto" src={logo} width="80" />
      <h1>Please Sign Up</h1>

      <input
        className="form-control"
        type="text"
        name="first_name"
        placeholder="John"
        {...register('first_name',{required: true})}
      />
      { errors.first_name && <small className="text-danger">This field is required</small> }
      <input
        className="form-control"
        type="text"
        name="last_name"
        placeholder="Doe"
        {...register('last_name',{required: true})}
      />
      { errors.last_name && <small className="text-danger">This field is required</small> }
      <input
        className="form-control"
        type="email"
        name="email"
        placeholder="name@example.com"
        {...register('email',{required: true})}
      />
      { errors.email && <small className="text-danger">This field is required</small> }
      <select
        className="form-select"
        name="gender"
        {...register('gender',{required: true})}
      >
        <option value="" default>Choose...</option>
        <option value="M">Male</option>
        <option value="F">Female</option>
      </select>
      { errors.gender && <small className="text-danger">This field is required</small> }
      <input
        className="form-control"
        type="password"
        name="password"
        placeholder="Password"
        {...register('password',{required: true})}
      />
      { errors.password && <small className="text-danger">This field is required</small> }
      <button className="btn btn-primary" type="submit">Signup</button>
      { emailError && <p className="text-danger">Este correo ya está registrado 💀</p> }
    </form>
  )
}
