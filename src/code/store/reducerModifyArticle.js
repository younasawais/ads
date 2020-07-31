const addArticle = { 
    Tags            : ['Pakistan', 'Geography', 'progress', 'space', 'science', 'military'],
    content1        : 'this is some sample article content',
    content2        : 'second sample text for the article!',
    articleTitle    : 'Title of the Article',
    articleTitle2   : 'Short description article. Around 1 - 2 paragraphs',
    reference       : 'The establishment of the devine idea',
    articleId       : '93934843-title-of-the-article',
    tags            : ['tag1', 'tag2', 'tag3']
}


function reducerModifyArticle(state = addArticle, action){
    switch(action.type){
        case 'updateArticle' :
            const copyState = Object.assign(state);
            copyState.checkBoxCreateMenu = action.payload.val;
            console.log(copyState);
            return {...copyState}
        default: return state
    }
}

export default reducerModifyArticle;