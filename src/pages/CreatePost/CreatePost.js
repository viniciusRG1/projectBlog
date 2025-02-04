import React from "react";
import styles from "./CreatePost.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

const CreatePost = () => {
    const [produto, setProduto] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tag, setTags] = useState([]);
    const [tamanho, setTamanho] = useState([]);
    const [formError, setFormError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
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
                <button className="btn">Registar produto</button>
                {/*
                {!loading && <button className="btn" >Registrar produto</button>}
                {loading && (<button className="btn" disabled>Aguarde...</button>)}
                {error && <p className="error">{error}</p>}
                 */}
            </form>
        
    </div>
    );
}


export default CreatePost;
