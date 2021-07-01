const initialDisLikeReducers = []

const disLikeReducers = (state = initialDisLikeReducers,action) =>{
    if(action.type === 'DISLIKE_POST'){
        return [...state,{...action.payload}]
    } else {
        return [...state]
    }
}
export default disLikeReducers