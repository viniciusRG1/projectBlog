import styles from './PostDetail.module.css'

import{Link} from 'react-router-dom'

const PostDetail = ({post}) =>{
    return(
        <div>
            <img src={post.image} alt={post.produto}/>
            <h2>{post.produto}</h2>
            <p>{post.createBy}</p>
            <div>
                {post.tag.map((tag)=>(
                    <p key={tag}><span>#</span>{tag}</p>
                ))}
            </div>
            <Link to={`/produtos/${post.id}`} className='btn btn-outline'>detalhes</Link>
        </div>
    )
}

export default PostDetail