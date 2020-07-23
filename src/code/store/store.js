import { createStore } from 'redux';
import { combineReducers }  from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import reducerPageContent from './reducerPageContent';
import reducerAddArticle from './reducerAddArticle';

const rootReducer = combineReducers({
    pageContent : reducerPageContent,
    addArticle : reducerAddArticle
  });

const store = createStore(
    rootReducer,
    devToolsEnhancer({trace: true}));

export default store;