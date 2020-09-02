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
    articleTags     : ['Pakistan', 'Geography', 'progress', 'space', 'science', 'military'],
    articleContent1 : articleContent1,
    articleContent2 : articleContent2,
    articleTitle    : 'Title of the Article',
    articleTitle2   : 'Short description article. Around 1 - 2 paragraphs',
    articleReference: 'The establishment of the devine idea'
}

function reducerPageContent(state = pageContent, action){
    console.log(action);
    switch(action.type){
        case 'test' :
            let val = action.payload.val;
            const copyState = Object.assign(state);
            copyState.articleId = val;
            console.log(copyState);
            return {...copyState}
        case 'updateArticlePage' :
            const {articleInfo} = action.payload;
            return {
                ...state, 
                articleMenuItems : action.payload.val,
                articleContent1 : articleInfo.text1,
                articleContent2 : articleInfo.text2,
                articleTitle    : articleInfo.title,
                articleTitle2   : articleInfo.title2,
                articleReference: articleInfo.reference,
                articleTags     : tagsStringToArray(articleInfo.tags)
            }
        default: return state
    }
}

/*****************************************************/
/***************** Tags String -> Array **************/
/*****************************************************/
function tagsStringToArray(stringTags){
    let arrayTags = stringTags.split(';');
    return arrayTags;
}

export default reducerPageContent;