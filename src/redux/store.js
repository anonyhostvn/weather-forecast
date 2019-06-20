import {createStore , combineReducers , applyMiddleware, compose} from 'redux' ;
import {createBrowserHistory} from 'history' ; 
import createSagaMiddleware from 'redux-saga' ; 
import {connectRouter, routerMiddleware} from 'connected-react-router' ;
import reducers from './reducer' ;

const history = createBrowserHistory() ;
const routeMiddleWare = routerMiddleware(history) ;
const sagaMiddleware = createSagaMiddleware();

const middleWares = [
    routeMiddleWare,
    sagaMiddleware
] ;

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : compose;

const store = createStore (
    combineReducers ({
        ...reducers, 
        router : connectRouter(history)
    }),
    composeEnhancers(applyMiddleware(...middleWares))
) ;

export {store , history} ;  