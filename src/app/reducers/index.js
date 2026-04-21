
import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import createSagaMiddleware from 'redux-saga';

import auth from '../reducers/auth';

//config
const sagaMiddleware = createSagaMiddleware();
const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['auth'],

};

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: [],

};
//setup for reducers

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),

});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default () => {

    let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware)) ;
    let persistor = persistStore(store);
    let runSaga = sagaMiddleware.run;

    return {store, persistor, runSaga};
};