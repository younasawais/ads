
const pageContent = {
    undername   :   '',
    password    :   '',

}

function reducerLogin(state = pageContent, action){
    let articleInfo = null;
    switch(action.type){
        case 'updateArticlePageWithMenu' :
            articleInfo = action.payload.articleInfo;
            return {...state}
        default: return state
    }
}


export default reducerLogin;