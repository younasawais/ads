import {articleContent1, articleContent2, articleMenuItems} from './initialize';

const pageContent = {
    articleMenuItems   :   articleMenuItems,
    bottomMenu      : {
                        names: ['Home', 'Services', 'Get In Touch', 'Careers', 'Work'],
                        links: ['temp', 'services', 'get-in-touch', 'careers', 'work',]
                    },
    adminMenu      : {
                        names: ['Manage Articles', 'Manage menus', 'Settings', 'Add Article',],
                        links: ['manage-articles', 'manage-menus', 'settings', 'add-article'],
                        component : ['ManageArticles', 'ManageMenus', 'SettingsCms', 'AddArticles']
                    },
    articleTags     : ['Pakistan', 'Geography', 'progress', 'space', 'science', 'military'],
    articleContent1 : ['sample1::', 'sample2::', 'sample3::'],
    articleContent2 : ['sample1::', 'sample2::', 'sample3::'],
    imageName1      : '',
    imageName2      : '',
    articleTitle    : 'Title of the Article',
    articleTitle2   : 'Short description article. Around 1 - 2 paragraphs',
    articleReference: 'The establishment of the devine idea'
}

function reducerPageContent(state = pageContent, action){
    let articleInfo = null;
    switch(action.type){
        case 'updateArticlePageWithMenu' :
            articleInfo = action.payload.articleInfo;
            return {
                ...state, 
                articleMenuItems : action.payload.menuItems,
                imageName1      : articleInfo.imageName1,
                imageName2      : articleInfo.imageName2,
                articleContent1 : articleInfo.text1.match(/[^:]+::/g),
                articleContent2 : articleInfo.text2.match(/[^:]+::/g),
                articleTitle    : articleInfo.title,
                articleTitle2   : articleInfo.title2,
                articleReference: articleInfo.reference,
                articleTags     : tagsStringToArray(articleInfo.tags)
            }
        case 'updateArticlePage' :
            articleInfo = action.payload.articleInfo;
            return {
                ...state, 
                articleContent1 : articleInfo.text1.match(/[^:]+::/g),
                articleContent2 : articleInfo.text2.match(/[^:]+::/g),
                imageName1      : articleInfo.imageName1,
                imageName2      : articleInfo.imageName2,
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