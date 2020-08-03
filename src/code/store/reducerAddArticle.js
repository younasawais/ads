const addArticle = { 
    checkBoxCreateMenu      : false,
    addSubItemToNewMenu     : false,
    menus                   : ['Phiysic', 'Islamic system','space exploration'],
    menuItems               : ['Chaper 1', 'chaper 2', 'chapter 3', 'chapter 4', 'chapter 5'],
    title                   : '',
    menuItemName            : '',
    linkId                  : '',
    tags                    : '',
    text1                   : '',
    text2                   : ''
}


function reducerAddArticle(state = addArticle, action){
    switch(action.type){
        case 'text1AddArticle' :
            console.log(action.payload.input);
            return {...state, text1 : action.payload.input}
        case 'text2AddArticle' :
            console.log(action.payload.input);
            return {...state, text2 : action.payload.input}
        case 'tagsAddArticle' :
            console.log(action.payload.input);
            return {...state,tags : action.payload.input}
        case 'menuItemNameAddArticle' :
            console.log(action.payload.input);
            return {...state,menuItemName : action.payload.input}
        case 'titleAddArticle' :
            console.log(action.payload.input);
            return {...state,title : action.payload.input}
        case 'createNewMenu' :
            const copyState = Object.assign(state);
            copyState.checkBoxCreateMenu = action.payload.val;
            return {...copyState}
        case 'addSubItemToNewMenu' :
            const copyState2 = Object.assign(state);
            copyState2.addSubItemToNewMenu = action.payload.val;
            return {...copyState2}
        default: return state
    }
}

export default reducerAddArticle;
