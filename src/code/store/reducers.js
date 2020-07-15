import { createStore } from 'redux';
import { combineReducers }  from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {articleContent1, articleContent2} from './initialize'

const pageContent = {
    menuItemNames   : [],
    bottomMenu      : {
                        names: ['Home', 'Services', 'Get In Touch', 'Careers', 'Work'],
                        links: ['home', 'services', 'get-in-touch', 'careers', 'work']
                    },
    menuId          : [],
    ArticleTags     : ['Pakistan', 'Geography', 'progress', 'space', 'science', 'military'],
    articleContent1 : articleContent1,
    articleContent2 : articleContent2,
    articleTitle    : 'Title of the Article',
    articleTitle2   : 'Short description article. Around 1 - 2 paragraphs',
    articleReference: 'The establishment of the devine idea',
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