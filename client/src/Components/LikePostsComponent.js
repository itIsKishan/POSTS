import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { listPosts } from '../Actions/PostAction'
const LikePostsComponent = () =>{
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(listPosts())
    },[])
    const allPost = useSelector((store) =>{
        return store.posts
    })
    const result = allPost.filter((ele) =>{
        return ele.likes > 0
    })
    return(
        <div>
            <h1>Liked Posts</h1>
            {
               result.map((ele,i) =>{
                   return(
                       <div key = {ele._id}>
                           <h3>{`${i + 1}. ${ele.name}`}</h3>
                           <p>{ele.description}</p>
                       </div>
                   )
               })
            }
        </div>
    )
}
export default LikePostsComponent