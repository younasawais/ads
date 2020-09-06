import { createStore } from 'redux';
import { combineReducers }  from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import reducerPageContent from './reducerPageContent';
import reducerAddArticle from './reducerAddArticle';
import reducerManageArticles from './reducerManageArticles';
import reducerManageMenus from './reducerManageMenus';
import reducerModifyArticle from './reducerModifyArticle';

const rootReducer = combineReducers({
    pageContent     : reducerPageContent,
    addArticle      : reducerAddArticle,
    manageArticles  : reducerManageArticles,
    modifyArticle   : reducerModifyArticle,
    manageMenus     : reducerManageMenus
  });

const store = createStore(
    rootReducer,
    devToolsEnhancer({trace: true}));

export default store;