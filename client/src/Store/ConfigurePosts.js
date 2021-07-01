import PostReducers from "../Reducers/PostReducers";
import LikeReducers from "../Reducers/LikeReducers";
import { createStore,combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import disLikeReducers from "../Reducers/DislikeReducers";

const  configureStore = () =>{
    const store = createStore(combineReducers({
        posts : PostReducers,
        likes : LikeReducers,
        dislikes : disLikeReducers
    }),applyMiddleware(thunk))

    return store
}

export default configureStore