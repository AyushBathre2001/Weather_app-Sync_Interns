let data = []

export const fetchReducer = (state = data,action)=>{
    if(action.type === "SET_WEATHER"){
        return action.data
    }
    else{
        return state
    }
}