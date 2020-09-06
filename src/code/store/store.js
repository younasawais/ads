import { createStore } from 'redux';
import { combineReducers }  from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import reducerPageContent from './reducerPageContent';
import reducerAddArticle from './reducerAddArticle';
import reducerManageArticles from './reducerManageArticles';
import reducerManageMenus from './reducerManageMenus';
import reducerModifyArticle from './reducerModifyArticle';
import reducerLogin from './reducerLogin';
import reducerHome from './reducerHome';

const rootReducer = combineReducers({
    pageContent     : reducerPageContent,
    addArticle      : reducerAddArticle,
    manageArticles  : reducerManageArticles,
    modifyArticle   : reducerModifyArticle,
    manageMenus     : reducerManageMenus,
    login           : reducerLogin,
    home            : reducerHome
  });

const store = createStore(
    rootReducer,
    devToolsEnhancer({trace: true}));

export default store;