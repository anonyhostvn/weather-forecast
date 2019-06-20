import React from 'react' ;
import './App.css';
import PublicRouter from './routes/routes';
import {Provider} from 'react-redux' ;
import {store, history} from './redux/store' ;
import {
  BrowserRouter,
  Route, 
  Switch
} from 'react-router-dom' ;
import HomeLayout from './container/home';

function App() {
  return (
    <Provider store={store} >
          <PublicRouter history={history}/>
    </Provider>
  );
}

export default App;
