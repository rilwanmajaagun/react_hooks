import {applyMiddleware, createStore} from 'redux';
import rootReducer from './Reducers/rootReducer';
import thunk from "redux-thunk"
import logger from 'redux-logger'

const middleware = [thunk]

if(process.env.NODE_ENV === "development"){
    middleware.push(logger)
}
export default createStore(rootReducer, applyMiddleware(...middleware))