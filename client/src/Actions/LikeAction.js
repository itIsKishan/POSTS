import axios from 'axios'
import swal from 'sweetalert'

export const likePos = (data) =>{
    return {
        type : 'LIKE_POST',
        payload : data
    }
}

// like a post
export const likePost = (id,body) =>{
    return(dispatch) =>{
        axios.put(`http://localhost:3077/api/posts/${id}`,body)
        .then((res) =>{
            dispatch(likePos(res.data))
        })
        .catch((err) =>{
            swal({
                title : `${err.message}`,
                icon : 'error'
            })
        })
    }
}