const addArticle = { 
    menus                   : ['Phiysic', 'Islamic system','space exploration'],
    menuItems               : ['Chaper 1', 'chaper 2', 'chapter 3', 'chapter 4', 'chapter 5'],
    title                   : '',
    menuItemName            : '',
    linkId                  : '',
    tags                    : '',
    text1                   : '',
    text2                   : '',
    reference               : '',
    active                  : false,
    checkBoxCreateMenu      : false,
    addSubItemToNewMenu     : false,
}


function reducerAddArticle(state = addArticle, action){
    switch(action.type){
        case 'activeAddArticle' :
            console.log(action.payload.input);
            return {...state, active : action.payload.input}
        case 'referenceAddArticle' :
            return {...state, reference : action.payload.input}
        case 'text1AddArticle' :
            return {...state, text1 : action.payload.input}
        case 'text2AddArticle' :
            return {...state, text2 : action.payload.input}
        case 'tagsAddArticle' :
            return {...state,tags : action.payload.input}
        case 'menuItemNameAddArticle' :
            return {...state,menuItemName : action.payload.input}
        case 'titleAddArticle' :
            return {...state,title : action.payload.input}
        case 'createNewMenu' :
            return {...state,checkBoxCreateMenu : action.payload.input}
        case 'addSubItemToNewMenu' :
            return {...state,addSubItemToNewMenu : action.payload.input}
        default: return state
    }
}

export default reducerAddArticle;
