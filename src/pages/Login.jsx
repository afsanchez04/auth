import { useForm } from "react-hook-form"
import logo from "../assets/react.svg"
import { loginUserService } from "../services/userServices"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"

export const Login = () => {

  const {login} = useAuthContext()

  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await loginUserService(data)
      if (response.status === 200) {
        const jwtToken = response.data.token
        login(jwtToken)
        //Redirigimos a dashboard
        navigate("/dashboard")
      }
    } catch (error) {
      console.error("Error al iniciar sesión", errors.message)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="m-auto d-grid gap-3 justify-content-center" style={{ maxWidth: "300px" }}>
      <img className="m-auto" src={logo} width="80" />
      <h1>Please Sign In</h1>

      <input
        className="form-control"
        type="email"
        name="email"
        placeholder="name@example.com"
        {...register('email', { required: true })}
      />
      {errors.email && <small className="text-danger">This field is required</small>}

      <input
        className="form-control"
        type="password"
        name="password"
        placeholder="Password"
        {...register('password', { required: true })}
      />
      {errors.password && <small className="text-danger">This field is required</small>}

      <button className="btn btn-primary" type="submit">Signup</button>

    </form>
  )
}
