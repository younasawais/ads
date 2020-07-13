import { createStore } from 'redux';
import { combineReducers }  from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';

const pageContent = {
    menuItemNames   : [],
    menuId          : [],
    ArticleTags     : [],
    articleContent1 : '',
    articleContent2 : '',
    articleTitle    : '',
    articleReference: '',
    articleId       : '' 
}

function article(state = pageContent, action){
    switch(action.type){
        case 'test' :
            let val = action.payload.val;
            const copyState = Object.assign(state);
            copyState.articleId = val;  
            console.log(copyState);
            return {...copyState}
        default: return state
    }
}

const rootReducer = combineReducers({
    article : article
  });

const store = createStore(
    rootReducer,
    devToolsEnhancer({trace: true}));

export default store;