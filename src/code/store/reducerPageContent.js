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
    ArticleTags     : ['Pakistan', 'Geography', 'progress', 'space', 'science', 'military'],
    articleContent1 : articleContent1,
    articleContent2 : articleContent2,
    articleTitle    : 'Title of the Article',
    articleTitle2   : 'Short description article. Around 1 - 2 paragraphs',
    articleReference: 'The establishment of the devine idea',
    articleId       : '' 
}

function reducerPageContent(state = pageContent, action){
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

export default reducerPageContent;