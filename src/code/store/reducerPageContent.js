import {articleMenuItems} from './initialize';

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
    articleTags     : ['...'],
    articleContent1 : ['...::'],
    articleContent2 : ['...::'],
    imageName1      : '',
    imageName2      : '',
    articleTitle    : '...',
    articleTitle2   : '...',
    articleReference: '...'
}

function reducerPageContent(state = pageContent, action){
    let articleInfo = null;
    let articleContent1 = null;
    let articleContent2 = null;
    switch(action.type){
        case 'updateArticlePageWithMenu' :
            articleInfo = action.payload.articleInfo;
            articleContent1 = checkDoubleDot(articleInfo.text1);
            articleContent2 = checkDoubleDot(articleInfo.text2);
            return {
                ...state, 
                articleMenuItems : action.payload.menuItems,
                imageName1      : articleInfo.imageName1,
                imageName2      : articleInfo.imageName2,
                articleContent1 : articleContent1,
                articleContent2 : articleContent2,
                articleTitle    : articleInfo.title,
                articleTitle2   : articleInfo.title2,
                articleReference: articleInfo.reference,
                articleTags     : tagsStringToArray(articleInfo.tags)
            }
        case 'updateArticlePage' :
            articleInfo = action.payload.articleInfo;
            articleContent1 = checkDoubleDot(articleInfo.text1);
            articleContent2 = checkDoubleDot(articleInfo.text2);
            return {
                ...state, 
                articleContent1 : articleContent1,
                articleContent2 : articleContent2,
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

/*****************************************************/
/*********************** Check if no :: **************/
/*****************************************************/
function checkDoubleDot(str){
    const reg = /::/;
    let result = reg.test(str);
    let arr = [];
    if(result){
        arr = str.match(/[^:]+::/g);
    }else{
        arr[0] = str;
    }
    return arr;
}

export default reducerPageContent;