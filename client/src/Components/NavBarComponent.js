import React from 'react'
import {Link, Route} from 'react-router-dom'
import AllPostsComponent from './AllPostsComponent'
import CreatePostsComponent from './CreatePosts'
import DislikeComponent from './DislikePostsComponent'
import LikePostsComponent from './LikePostsComponent'
import {Tab,Tabs,AppBar} from '@material-ui/core'

const NavBarComponent = () =>{
    const [value, setValue] = React.useState(0)
    const handleValue = (e,newValue) =>{
        setValue(newValue)
    }
    return(
        
        <div>
            <AppBar position = 'static'>
            <Tabs value = {value} onChange = {handleValue}>
                <Tab label = 'create'/>
                <Tab label = 'Posts'/>
                <Tab label = 'Liked Posts' />
                <Tab label = 'Disliked Posts' />
            </Tabs>
            </AppBar>
            { value  === 0 && <CreatePostsComponent/>}
            { value  === 1 && <AllPostsComponent/>}
            { value  === 2 && <LikePostsComponent/>}
            { value  === 3 && <DislikeComponent/>}
        </div>
    )
}
export default NavBarComponent