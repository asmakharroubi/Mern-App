import { ADD_USER } from "../Constants/action-types";


const initialState = {users: []}

function UserReducer (state=initialState,action) {
    const {type,payload} = action


    switch (type) {
        case ADD_USER:

        return {
          ...state,
          users: [...state.users, payload],
        };
            
            
    
        default:
            return state
    }
}
export default UserReducer
