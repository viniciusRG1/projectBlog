import React from "react";
import styles from "./CreatePost.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

const CreatePost = () => {
    const [produto, setProduto] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tag, setTags] = useState([]);
    const [tamanho, setTamanho] = useState([]);
    const [formError, setFormError] = useState("");
    const {user} = useAuthValue()
    const {insertDocument, response} = useInsertDocument("posts")
    const Navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("")

        const tamanhoArray = tamanho.split(",").map((tamanho) => tamanho.trim().toLowerCase())
        const tagArray = tag.split(",").map((tag) => tag.trim().toLowerCase());

        if(!produto || !image || !tag || !body || !tamanho){
            setFormError("campos incompletos ou em branco")
        }        

        try{
            new URL(image);
        }catch(error){
            setFormError("a imagem precisa de uma URL")
        }

        if(formError)
            return;

        insertDocument({
            produto,
            image,
            body,
            tagArray,
            tamanhoArray,
            uid: user.uid,
            createBy: user.displayName
        } 
        )
        Navigate("/")
    };
    return(

    <div className={styles.create_post}> 
        <h2>
            Adicionar roupas novas
        </h2>
            <p>não se esqueça de dar os detalhes das roupas </p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>roupa</span>
                    <input type="text" name="produto" required placeholder="escreva o nome da peça de roupa" onChange={(e) => setProduto(e.target.value)} value={produto}></input>
                </label>
                <label>
                    <span>URL da imagem</span>
                    <input type="text" name="image" required placeholder="foto da roupa" onChange={(e) => setImage(e.target.value)} value={image}></input>
                </label>
                <label>
                    <span>roupa</span>
                    <textarea name="body" required placeholder="especificações da roupa" onChange={(e) => setBody(e.target.value)} value={body}></textarea>
                </label>
                <label>
                    <span>Tags</span>
                    <input type="text" name="tag" required placeholder="insira tag para classificar o tipo da roupa" onChange={(e) => setTags(e.target.value)} value={tag}></input>
                </label>
                <label>
                    <span>Tamanhos</span>
                    <input type="text" name="tamanho" required placeholder="tamanhos da roupa " onChange={(e) => setTamanho(e.target.value)} value={tamanho}></input>
                </label>
                
                
                {!response.loading && <button className="btn" >Registrar produto</button>}
                {response.loading && (<button className="btn" disabled>Aguarde...</button>)}
                {response.error && <p className="error">{response.error}</p>}
                {formError && <p className="error">{formError}</p>}
                 
            </form>
        
    </div>
    );
}


export default CreatePost;
