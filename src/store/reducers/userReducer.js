import { IS_AUTHENTICATED, REMOVE_AUTHENTICATION } from "../actions/actionTypes"
const initiateState = {
    isAuthenticated : false
}

const userReducer = (state = initiateState, action) =>{
    switch(action.type){
        case IS_AUTHENTICATED:
            return{
                ...state,
                isAuthenticated : true
            }
    }

}