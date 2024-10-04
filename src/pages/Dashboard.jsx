import { useEffect, useState } from "react"
import { getMeUserService } from "../services/userServices"


export const Dashboard = () => {

  const [userData, setUserData] = useState({})
  const token = localStorage.getItem('token')

  useEffect(() => {
    
    const getUserData = async () => {
      try {
        const response = await getMeUserService(token)
        setUserData(response.data)  
      } catch (error) {
        console.error("Error al obtener datos del usuario", error.message)
      }
    }

    getUserData()

  }, [token])
  

  return (
    <>
      <h1>Dashboard</h1>
      {userData?.first_name && <p>Welcome {userData.first_name}</p>}
      {userData?.last_name && <p>Welcome {userData.last_name}</p>}
      {userData?.email && <p>Welcome {userData.email}</p>}
      <p>Rol: Admin</p>
      <p>Gender: Male</p>
    </>
  )
}
