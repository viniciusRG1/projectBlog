import style from "./Register.module.css"

import {useState, useEffect} from 'react'

const Register = () => {
    return(
        <div><h1>Cadastra-se</h1>
            <form>
                <label>
                    <span>Nome:</span>
                    <input type="text" 
                    name="displayName" 
                    required 
                    placeholder="nome do usuário"/>
                </label>
                <label>
                    <span>Email:</span>
                    <input type="email" 
                    name="email" 
                    required 
                    placeholder="email do usuário"/>
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password" 
                    name="senha" 
                    required 
                    placeholder="senha do usuário"/>
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password" 
                    name="senha" 
                    required 
                    placeholder="confirmar senha"/>
                </label>
                <button className="btn">Cadastrar</button>
            </form>
        </div>
    )
}

export default Register