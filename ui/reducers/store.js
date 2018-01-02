import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/rootreducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export default function configureStore() {
    return createStore(rootReducer, applyMiddleware(thunk, logger) )
}