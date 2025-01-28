import React from "react"
import {NavLink} from "react-router-dom"
import style from "./Navbar.module.css"
import { useAuthentication } from "../hooks/useAuthentication"
import { useAuthValue } from "../context/AuthContext"

const Navbar = () =>{
    const {user} = useAuthValue();
    const {logout} = useAuthentication();
    return (
        <nav className={style.navbar}>
            <NavLink to="/" className={style.brand}>
                dre<span>Lee</span>
            </NavLink>
            <ul className={style.links_list}>
                <li>
                    <NavLink to="/" className={({isActive}) => (isActive ? style.active : "")}>
                        Home
                    </NavLink>
                </li>
                {!user &&(
                    <>
                        <li>
                    <NavLink to="/Login" className={({isActive}) => (isActive ? style.active : "")}>
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Register" className={({isActive}) => (isActive ? style.active : "")}>
                        Register
                    </NavLink>
                </li>
                    </>
                )}
                {user &&(
                    <>
                        <li>
                    <NavLink to="/Dashboard" className={({isActive}) => (isActive ? style.active : "")}>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Post/Create" className={({isActive}) => (isActive ? style.active : "")}>
                        Postar
                    </NavLink>
                </li>

                    </>
                )}
                <li>
                    <NavLink to="/About" className={({isActive}) => (isActive ? style.active : "")}>
                        About
                    </NavLink>
                </li>
                {user && (
                    <li>
                        <button onClick={logout}>Sair</button>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar;