const initialLikeReducers = []

const LikeReducers = (state = initialLikeReducers,action) =>{
    if(action.type === 'LIKE_POST'){
        return [...state,{...action.payload}]
    } else {
        return [...state]
    }
}
export default LikeReducers