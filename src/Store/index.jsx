import {createStore} from 'redux';

import RootReducer from '../redux/rootReducer';
//root reducer

//root reducer will be passed
export const store=createStore(RootReducer);