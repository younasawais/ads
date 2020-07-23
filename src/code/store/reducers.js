import { createStore } from 'redux';
import { combineReducers }  from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {articleContent1, articleContent2, articleMenuItems} from './initialize';

const pageContent = {
    articleMenuItems   :   articleMenuItems,
    bottomMenu      : {
                        names: ['Home', 'Services', 'Get In Touch', 'Careers', 'Work'],
                        links: ['home', 'services', 'get-in-touch', 'careers', 'work',]
                    },
    adminMenu      : {
                        names: ['Manage Articles', 'Manage menus', 'Settings', 'Add Article',],
                        links: ['manage-articles', 'manage-menus', 'settings', 'add-article'],
                        component : ['ManageArticles', 'ManageMenus', 'SettingsCms', 'AddArticles']
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

const addArticle = { 
    checkBoxCreateMenu      : false,
    addSubItemToNewMenu     : false
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

function addNewArticle(state = addArticle, action){
    switch(action.type){
        case 'createNewMenu' :
            const copyState = Object.assign(state);
            copyState.checkBoxCreateMenu = action.payload.val;
            console.log(copyState);
            return {...copyState}
        case 'addSubItemToNewMenu' :
            const copyState2 = Object.assign(state);
            copyState2.addSubItemToNewMenu = action.payload.val;
            console.log(copyState2);
            return {...copyState2}
        default: return state
    }
}

const rootReducer = combineReducers({
    article : article,
    addNewArticle : addNewArticle
  });

const store = createStore(
    rootReducer,
    devToolsEnhancer({trace: true}));

export default store;