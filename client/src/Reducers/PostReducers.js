const initialPostReducer = []

const PostReducers = (state = initialPostReducer, action) =>{
    switch(action.type){
        case 'CREATE_POST': {
            return [...state,{...action.payload}]
        }
        case 'LIST_POSTS' : {
            return [...action.payload]
        }
        case 'DELETE_POST' : {
            return state.filter((ele) =>{
                return ele._id !== action.payload._id
            })
        }
        case 'UPDATE_POST' :{
            const result = state.map((ele) =>{
                if(ele._id === action.payload._id){
                    return {...action.payload}
                } else {
                    return {...ele}
                }
            })
            return result
        }
        default : {
            return [...state]
        }
    }
}

export default PostReducers