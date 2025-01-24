import React from "react"
import {NavLink} from "react-router-dom"
import style from "./Navbar.module.css"

const Navbar = () =>{
    return (
        <nav className={style.navbar}>
            <NavLink to="/" className={style.brand}>
                mini<span>Blog</span>
            </NavLink>
            <ul className={style.links_list}>
                <li>
                    <NavLink to="/" className={({isActive}) => (isActive ? style.active : "")}>
                        Home
                    </NavLink>
                </li>
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
                <li>
                    <NavLink to="/About" className={({isActive}) => (isActive ? style.active : "")}>
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;