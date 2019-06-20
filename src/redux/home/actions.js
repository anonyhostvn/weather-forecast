const HomeAction = {
    DATA_REQUEST : "DATA_REQUEST", 
    DATA_LOADED : "DATA_LOADED" ,
    API_ERROR : "API_ERROR" ,
    requestData : api => dispatch => dispatch ({
        type : HomeAction.DATA_REQUEST,
        payload : api
    }) , 
    loadedData : data => dispatch => dispatch({
        type : HomeAction.DATA_LOADED,
        payload : data
    })
}

export default HomeAction ;