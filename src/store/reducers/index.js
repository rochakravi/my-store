import { BUY_CAKE, CLOSE_PREVIEW } from "../actions/actionTypes"

const initialState = {
    isPreview: false,
    numOfCakes: 10
}

const buyReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
                isPreview : true
            }
        case CLOSE_PREVIEW:
            return{
                ...state,
                isPreview : false
            }
        default : 
            return state ;
    }
}

export default buyReducer ;