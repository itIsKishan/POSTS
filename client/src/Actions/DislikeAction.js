import axios from 'axios'
import swal from 'sweetalert'

export const dislikePos = (data) =>{
    return {
        type : 'DISLIKE_POST',
        payload : data
    }
}

// like a post
export const dislikePost = (id,body) =>{
    return(dispatch) =>{
        axios.put(`http://localhost:3077/api/posts/${id}`,body)
        .then((res) =>{
            dispatch(dislikePos(res.data))
        })
        .catch((err) =>{
            swal({
                title : `${err.message}`,
                icon : 'error'
            })
        })
    }
}