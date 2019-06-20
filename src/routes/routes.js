import React from 'react' ;

import {
    Route, 
    Switch,
    BrowserRouter
} from 'react-router-dom' ;
import {ConnectedRouter} from 'connected-react-router' ;
import HomeLayout from '../container/home/index' ;
import {connect} from 'react-redux' ;

const RestrictRouter = ({component : Component , ...rest}) => {
    return (
        <Route
            {...rest}
            render={props =>
                <Component {...props}/>
            }
        />
    )
}

const PublicRouter = ({history}) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={HomeLayout}/>
            </Switch>
        </BrowserRouter>
    ) ;
}

export default connect(state => ({

}))(PublicRouter) ;