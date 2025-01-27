import{
    getAuth,
    createUserWithEmailAndPassword,
    singInWithEmailAndPassword,
    updateProfile,
    signOut
}from 'firebase/auth'

import {db} from "../firebase/config";

import {useState, useEffect} from 'react'

export const useAuthentication = () => {
    const [ authError, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth();

    function checkIfIsCancelled(){
        if(cancelled){
            return;
        }
    }

    const createUser = async(data) => {
        checkIfIsCancelled()
        setError("")
        setLoading(true)

        try{
            const {user} = await createUserWithEmailAndPassword(auth, data.email, data.password)
            await updateProfile(user, {
                displayName: data.displayName
            })
            setLoading(false);
            return user
        }catch(authError){
            console.log(authError.message)
            console.log(typeof authError.message)

            let systemErrorMessage

            if(authError.message.includes("Password")){
                systemErrorMessage = "a senha precisa ter no mínimo 6 digitos"
            }else if(authError.message.includes("email-already")){
                systemErrorMessage = "email já cadastrado"
            }else{
                systemErrorMessage = "ocorreu algum erro tente novamente mais tarde"
            }
            setError(systemErrorMessage)
        }
        setLoading(false);
    };

    useEffect(()=>{
        return () => setCancelled(true);
    }, []);

    return{
        auth,
        createUser,
        authError,
        loading
    };
};