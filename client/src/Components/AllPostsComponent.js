import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import swal from 'sweetalert'
import { dislikePost } from '../Actions/DislikeAction'
import { likePost } from '../Actions/LikeAction'
import { deletePost , listPosts} from '../Actions/PostAction'
import UpdateComponent from './UpdatePostsComponent'
import { TextField,Button,makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) =>({
    root : {
        '& > *' : {
            margin : theme.spacing(1)
        }
    }
}))

const AllPostsComponent = () =>{
    const classes = useStyles()

    // form values
    const [value, setValue] = useState('')
    const [modalIsOpen,setModalisopen] = useState(false)
    const [name,setName] = useState('')
    const [id,setId] = useState('')
    const [description,setDescription] = useState('')
    // dispatching the action to get list of all posts
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(listPosts())
    },[])
    const handleModal = (e,id,name,description) =>{
        setModalisopen(!modalIsOpen)
        setId(id)
        setName(name)
        setDescription(description)
    }
    
    const handleValueChange = (e) =>{
        setValue(e.target.value)
    }

    // fetching all the post in store
    const allPost = useSelector((store) =>{
        return store.posts
    })
    const filterAllPost = allPost.filter((post) =>{
        return post.name.toLowerCase().includes(value)
    })

    // delte the post
    const handleDelete = (e,id) =>{
        swal({
            title : 'Are you sure,you want to delete this post',
            buttons : true
        })
        .then((verifyDelete) =>{
            if(verifyDelete){
                dispatch(deletePost(id))
            }
        })
    }

    // handle like post
    const handleLike = (e,id,likeCount) =>{
        const result = likeCount + 1
        const data = {
            likes : result
        }
        // console.log('data',data)
        dispatch(likePost(id,data))
    }
    const handleDislike = (e,id,dislikeCount) =>{
        const result = dislikeCount + 1
        const data = {
            dislikes : result
        }
        dispatch(dislikePost(id,data))
    }
    return(
        <div className = {classes.root}>
            <h1>Total posts - {allPost.length}</h1>
            <TextField label = 'Search post by name..' variant = 'outlined' color = 'secondary' type = 'text' value = {value} onChange = {(e) =>{handleValueChange(e)}}/>
            {
                filterAllPost.map((ele) =>{
                    return (
                        <div key = {ele._id}>
                            <h3>{ele.name}</h3>
                            <p>{ele.description}</p>
                            <Button color = 'primary' variant = 'contained'  onClick = {(e) =>{handleLike(e,ele._id,ele.likes)}}>Like</Button>{ele.likes}
                            <Button color = 'primary' variant = 'contained'  onClick = {(e) =>{handleDislike(e,ele._id,ele.dislikes)}}>DisLike</Button>{ele.dislikes}
                            <Button color = 'default' variant = 'contained' onClick = {(e) =>{handleModal(e,ele._id,ele.name,ele.description)}}>Edit</Button>
                            <Button color = 'secondary' variant = 'contained' href = '#contained-buttons' onClick = {(e) =>{handleDelete(e,ele._id)}}>Delete</Button>
                        </div>
                    )
                })
            }
           <UpdateComponent modalIsOpen = {modalIsOpen} id = {id} name = {name} description = {description} setName = {setName} setDescription = {setDescription} handleModal = {handleModal}/>
        </div>
    )
}

export default AllPostsComponent