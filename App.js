import React from 'react';
import {View,Text,StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import { createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './store/Reducer/index';


import Router from './component/Router';

// import Viewitems from "./components/Viewitems";


export default class store extends React.Component {

render(){
    return(
        <Provider store={createStore(reducers,applyMiddleware(thunk))}>
          <Router/>
        </Provider> 
    );
}
}