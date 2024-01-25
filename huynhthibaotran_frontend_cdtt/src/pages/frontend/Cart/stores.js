import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ShopApp from './reducers'
import { localStorageMiddleware } from './middleware/localStorage';
const persistedState = JSON.parse(localStorage.getItem('reduxState')) || {};
const store =  createStore(
    ShopApp,
    persistedState,
    applyMiddleware(thunkMiddleware, localStorageMiddleware));
export default store;
