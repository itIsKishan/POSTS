import axios from 'axios'
import swal from 'sweetalert'


export const crePost = (postData) =>{
    return {
        type : 'CREATE_POST',
        payload : postData
    }
}

export const lisPost = (allPosts) =>{
    return {
        type : 'LIST_POSTS',
        payload : allPosts
    }
}

export const delPost = (onePost) =>{
    return {
        type : 'DELETE_POST',
        payload : onePost
    }
}

export const updPost = (post) =>{
    return {
        type : 'UPDATE_POST',
        payload : post
    }
}
export const createPost = (data) =>{
    return ( dispatch) =>{
        axios.post('http://localhost:3077/api/posts',data)
        .then((res) =>{
            const result = res.data
            if(result.hasOwnProperty('error')){
                swal({
                    title : `${result.errors}`,
                    icon : 'error'
                })
            } else {
                dispatch(crePost(result))
            }

        })
        .catch((err) =>{
            swal({
                title : `${err.message}`,
                icon : 'error'
            })
        })
    }
}

// list all the posts
export const listPosts = () =>{
    return (dispatch) =>{
        axios.get('http://localhost:3077/api/posts')
        .then((posts) =>{
            const result = posts.data
            if(posts.hasOwnProperty('errors')){
                swal({
                    title : `${result.errors}`,
                    icon : 'error'
                })
            } else {
                dispatch(lisPost(result))
            }
        })
    }
}

// delete the post
export const deletePost = (id) =>{
    return (dispatch) =>{
        axios.delete(`http://localhost:3077/api/posts/${id}`)
        .then((res) =>{
            const result = res.data
            if(result.hasOwnProperty('errors')){
                swal({
                    title : `${result.errors}`,
                    icon : 'error'
                })
            } else {
                dispatch(delPost(result))
            }
        })
    }
}

// update the post
export const updatePost = (id,data) =>{
    return (dispatch) =>{
        axios.put(`http://localhost:3077/api/posts/${id}`,data)
        .then((res) =>{
            const result = res.data
            if(result.hasOwnProperty('errors')){
                swal({
                    title : `${result.errors}`,
                    icon : 'error'
                })
            } else{
                dispatch(updPost(result))
            }
        })
        .catch((err) =>{
            swal({
                title: `${err.message}`,
                icon : 'error'
            })
        })
    }
}

