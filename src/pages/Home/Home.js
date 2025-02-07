import styles from "./Home.module.css"
import {useNavigate} from "react-router-dom"
import {useState} from "react"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import PostDetail from "../../components/PostDetail"



const Home = () => {

    const [query, setQuery] = useState("")
    const {documents: posts, loading} = useFetchDocuments("posts")

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
                {loading && <p>Carregando...</p>}
                {posts && posts.map((posts)=>(
                    <PostDetail key={posts.id} post={posts} />
                ))}
                {posts && posts.length === 0 && (
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