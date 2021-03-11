import {createStore,applyMiddleware} from 'redux';

import RootReducer from '../redux/rootReducer';
import thunk from 'redux-thunk';


//root reducer

//root reducer will be passed
export const store=createStore(RootReducer,applyMiddleware(thunk));