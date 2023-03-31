import { ADD_USER } from "../Constants/action-types"


export const addUser = (payload)=>{
    return{
        type : ADD_USER,
        payload:payload,
    }
}