import {takeEvery, all, fork, put, takeLatest, take , call} from 'redux-saga/effects' ;
import HomeAction from './actions' ;
import Axios from 'axios' ;

const url = 'api.openweathermap.org/data/2.5/weather?q=London' ;

const callApi = Axios.get(url).then(res => res.data).catch (err => console.log(err)) ;

function* WorkerRequestData (payload) {
    try {
        const data = yield call(callApi) ;
        yield put ({type : HomeAction.DATA_LOADED, payload : data}) ;
    }
    catch (e) {
        yield put ({type : HomeAction.API_ERROR, payload : e}) ;
    }
}

export function* WatcherRequestData () {
    while (true) {
        const action = yield take (HomeAction.DATA_REQUEST) ;
        yield WorkerRequestData(action.payload) ;
    }
}

export default function* rootSaga () {
    yield all ([
        fork (WatcherRequestData)
    ]) ;
}