import { BUY_CAKE, CLOSE_PREVIEW, IS_AUTHENTICATED, REMOVE_AUTHENTICATION } from "./actionTypes"

export const buyCake = () =>{
    return {
        type: BUY_CAKE
    }
}

export const closePreview = () =>{
    return{
        type: CLOSE_PREVIEW
    }
}

export const isUserAuthenticated = () =>{
    return{
        type: IS_AUTHENTICATED
    }
}

export const removeAuthentication = () =>{
    return{
        type: REMOVE_AUTHENTICATION
    }
}



// action is an object with type property
// action creator is a function which returns an action