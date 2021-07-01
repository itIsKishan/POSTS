import React from 'react'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'
import { updatePost } from '../Actions/PostAction'
import { Button,TextField } from '@material-ui/core'
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
}
  
const UpdateComponent = (props) =>{
    const {modalIsOpen, handleModal, id, name, description, setName,
        setDescription} = props

    const dispatch = useDispatch()
    const handleNameChange = (e) =>{
        setName(e.target.value)
    }
    const handleBodyChange = (e) =>{
        setDescription(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const data = {
            name : name,
            description : description
        }
        dispatch(updatePost(id,data))
        handleModal()
        setName('')
        setDescription('')
    }
    return(
        <div>
             <Modal isOpen = {modalIsOpen} ariaHideApp = {false} style = {customStyles}>
                <h2>Edit Post</h2>
                <form >
                    <input type = 'text' value = {name} onChange = {handleNameChange} placeholder = 'Name'/><br/><br/>
                    <input type = 'text' value = {description} onChange = {handleBodyChange} placeholder = 'Type Something..'/><br/><br/>
                    <Button color = 'primary' variant = 'contained' onClick = {(e) =>{handleSubmit(e)}} >Save</Button>
                    <Button color = 'primary' variant = 'contained' onClick = {(e) =>{handleModal(e)}}>Cancel</Button>
                </form>
            </Modal>
        </div>
    )
}
export default UpdateComponent