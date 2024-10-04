import { NavLink } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"


export const Header = () => {

    const { isAuth, logout } = useAuthContext()

    return (
        <nav className="navbar navbar-expand-sm bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                        </li>
                        {
                            isAuth
                                ? (
                                    <>

                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/secret">Secret</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink onClick={logout} className="nav-link" to="/">Logout</NavLink>
                                        </li>
                                    </>
                                )
                                : (
                                    <>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/login">Login</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/signup">Signup</NavLink>
                                        </li>
                                    </>
                                )
                        }



                    </ul>
                </div>
            </div>
        </nav>
    )
}
