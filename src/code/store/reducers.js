import { createStore } from 'redux';
import { combineReducers }  from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {articleContent1, articleContent2} from './initialize'

const pageContent = {
    articleMenuItems   :    [{
                                name: 'First one',
                                router : 'first-one',
                                sub: [{
                                    name: 'Second one',
                                    router : 'second-one'
                                },{
                                    name: 'Sub Second two',
                                    router : 'sub-second-two'
                                }]
                            },{
                                name: 'First Two',
                                router : 'first2',
                                sub: []
                            },{
                                name: 'Awais Younas',
                                router : 'awais-younas',
                                sub: [{
                                    name: 'Mohammad Younas',
                                    router : 'Mohammad-younas'
                                },{
                                    name: 'Awais Ahmed',
                                    router : 'awais-ahmed'
                                }]
                            },{
                                name: 'First Three',
                                router : 'first-3',
                                sub: [{
                                    name: 'second one',
                                    router : 'first-1'
                                },{
                                    name: 'second two',
                                    router : 'second-2'
                                },{
                                    name: 'second three',
                                    router : 'second-3'
                                },{
                                    name: 'second four',
                                    router : 'second-four'
                                },{
                                    name: 'second one',
                                    router : 'first-1'
                                },{
                                    name: 'second two',
                                    router : 'second-2'
                                },{
                                    name: 'second three',
                                    router : 'second-3'
                                },{
                                    name: 'second four',
                                    router : 'second-four'
                                },{
                                    name: 'second one',
                                    router : 'first-1'
                                },{
                                    name: 'second two',
                                    router : 'second-2'
                                },{
                                    name: 'second three',
                                    router : 'second-3'
                                },{
                                    name: 'second four',
                                    router : 'second-four'
                                },{
                                    name: 'second one',
                                    router : 'first-1'
                                },{
                                    name: 'second two',
                                    router : 'second-2'
                                },{
                                    name: 'second three',
                                    router : 'second-3'
                                },{
                                    name: 'second four',
                                    router : 'second-four'
                                },{
                                    name: 'second one',
                                    router : 'first-1'
                                },{
                                    name: 'second two',
                                    router : 'second-2'
                                },{
                                    name: 'second three',
                                    router : 'second-3'
                                },{
                                    name: 'second four',
                                    router : 'second-four'
                                },]
                            }],
    bottomMenu      : {
                        names: ['Home', 'Services', 'Get In Touch', 'Careers', 'Work'],
                        links: ['home', 'services', 'get-in-touch', 'careers', 'work',]
                    },
    adminMenu      : {
                        names: ['Manage Articles', 'Manage menus', 'Settings', 'Add Article',],
                        links: ['manage-articles','add-article', 'manage-menus', 'settings']
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