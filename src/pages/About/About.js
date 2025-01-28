import React from "react";
import styles from "./About.module.css"
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="styles.about">
            <h2>Sobre a loja DreLee</h2>
            <p>
                loja de artigos infantis e juvenil 
            </p>
            <Link to="/post/create" className="btn">
                Criar post
            </Link>
        </div>
    )
}

export default About;