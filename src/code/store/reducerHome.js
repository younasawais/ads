const pageContent = {
    adminMenu      : {
                        names: ['Manage Articles', 'Manage menus', 'Settings', 'Add Article',],
                        links: ['manage-articles', 'manage-menus', 'settings', 'add-article']
                    },
}

function reducerHome(state = pageContent, action){
    let articleInfo = null;
    switch(action.type){
        case 'updateArticlePageWithMenu' :
            articleInfo = action.payload.articleInfo;
            return {...state, }
        default: return state
    }
}


export default reducerHome;