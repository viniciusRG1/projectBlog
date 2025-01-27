import { useAuthentication } from "../../hooks/useAuthentication"
import style from "./Register.module.css"

import {useState, useEffect} from 'react'

const Register = () => {

    const [displayName, setDisplayname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const {createUser, authError, loading} = useAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")

    const user = {
        displayName,
        email,
        password
    }

    if(password !== confirmPassword){
        setError("senhas diferentes");
        return;
    }

    const res = await createUser(user)

    console.log(res)
    } 

    useEffect(() => {
        if(authError){
            setError(authError)
        }
    }, [authError])

    return(
        <div className={style.Register}><h1>Cadastra-se</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input type="text" 
                    name="displayName" 
                    required 
                    placeholder="nome do usuário"
                    value={displayName}
                    onChange={(e) => setDisplayname(e.target.value)}
                    />
                </label>
                <label>
                    <span>Email:</span>
                    <input type="email" 
                    name="email" 
                    required 
                    placeholder="email do usuário"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password" 
                    name="senha" 
                    required 
                    placeholder="senha do usuário"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password" 
                    name="senha" 
                    required 
                    placeholder="confirmar senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>
                {!loading && <button className="btn" >Cadastrar</button>}
                {loading && (<button className="btn" disabled>Aguarde...</button>)}
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    )
}

export default Register