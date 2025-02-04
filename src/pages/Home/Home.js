import styles from "./Home.module.css"
import {useNavigate, Link} from "react-router-dom"
import {useState} from "react"



const Home = () => {

    const [query, setQuery] = useState("")
    const [post] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <div className={styles.home}>
            <h1>
                catálogo
            </h1>
            <form onSubmit={handleSubmit} className={styles.search}>
                <input type="text" placeholder="busque por tipo de roupa" onChange={(e) => setQuery(e.target.value)}/>
                <button className="btn btn-dark">buscar</button>
            </form>
            <h1>
                roupas
                {post && post.length === 0 && (
                    <div className={styles.nopost}>
                        <p>não temos essa variedade de roupa no momento</p>
                        <p>por favor falar com o atendente para mais informações</p>
                    </div>
                )}
            </h1>
        </div>
    )
}

export default Home;