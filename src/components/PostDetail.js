import styles from './PostDetail.module.css'

import{Link} from 'react-router-dom'

const PostDetail = ({posts}) =>{
    return(
        <div className={styles.post_detail}>
            <img src={posts.image} alt={posts.body}/>
            <h2>{posts.produto}</h2>
            <p className={styles.createBy}>{posts.createBy}</p>
            <div>
                {posts.tag.map((tag)=>(
                    <p key={tag} className={styles.tag}><span>#</span>{tag}</p>
                ))}
            </div>
            <Link to={`/produtos/${posts.id}`} className='btn btn-outline'>detalhes</Link>
        </div>
    )
}

export default PostDetail