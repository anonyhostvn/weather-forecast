import HomeAction from './actions' ;

const initialState = {
    reciveData : false,
    data : {}  
}

function HomeReducers (state = initialState , action) {
    if (action.type === HomeAction.DATA_LOADED) {
        const newState = state ;
        newState.reciveData = true ;
        newState.data = action.payload ;
        return newState ;
    }

    return state ;
}

export default HomeReducers ;