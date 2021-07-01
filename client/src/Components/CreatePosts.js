import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../Actions/PostAction'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import { TextField} from '@material-ui/core'
const useStyles = makeStyles((theme) =>({
    root : {
        '& > *' : {
            margin : theme.spacing(1)
        }
    }
}))

const CreatePostsComponent = () =>{

    const dispatch = useDispatch()
    const classes = useStyles()
    const [name, setName ] = useState('')
    const [post, setPost] = useState('')

    const handleChange = (e) =>{
        const value = e.target.name
        if(value === 'name'){
            setName(e.target.value)
        } else if(value === 'text'){
            setPost(e.target.value)
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const data = {
            name : name,
            description : post
        }
        console.log('snap',data)
        setPost('')
        setName('')
        dispatch(createPost(data))

    }
    return(
        <div className = {classes.root}>
            <h1>Create Posts</h1>
            <form >
                <TextField value = {name} label = 'Name' color = 'secondary' variant = 'outlined' type = 'text' onChange = {(e) =>{handleChange(e)}} name = 'name'/><br/><br/>
                <TextField value = {post} label = 'Text' color = 'secondary' variant = 'outlined' type = 'textarea' onChange = {(e) =>{handleChange(e)}} name = 'text'/><br/><br/>
                <Button onClick = {(e) => {handleSubmit(e)}} color = 'primary' variant = 'contained' href = '#contained-buttons'>Add a Public Post</Button>
            </form>
        </div>
    )
    
}

export default CreatePostsComponent