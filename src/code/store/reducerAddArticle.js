const addArticle = { 
    menus                   : [],
    menuIds                 : [],
    menuItems               : ['Chaper 1', 'chaper 2', 'chapter 3', 'chapter 4', 'chapter 5'],
    currentParents          : ['Console design', 'Stars', 'Ram memory', 'Screens', 'Games'],
    title                   : '',
    menuItemName            : '',
    newMenu                 : '',
    parentItemSelected      : '',
    selectedMenu            : '',
    createParent            : '',
    imageName1              : '',
    imageName2              : '',
    files                   : null,
    tags                    : '',
    text1                   : '',
    text2                   : '',
    reference               : '',
    statusArticle           : '',
    alertType               : '',
    active                  : false,
    checkBoxCreateMenu      : false,
    addSubItemToParent      : false,
    checkBoxCreateParent    : false
}


function reducerAddArticle(state = addArticle, action){
    switch(action.type){
        case 'updateMenuAddArticle' :
            const menuNames = action.payload.menus.map(menu=>{return( menu.name)})
            const menuIds   = action.payload.menus.map(menu=>{return( menu.id )})
            return {...state, menus : menuNames, menuIds : menuIds}
        case 'updateAlertAddArticle' :
            return {...state, statusArticle : action.payload.input, alertType : action.payload.alertType}
        case 'selectMenuAddArticle' :
            return {...state, selectedMenu : action.payload.input}
        case 'checkBoxCreateParentAddArticle' :
            return {...state, checkBoxCreateParent : action.payload.input, parentItemSelected : ""}
        case 'createParentAddArticle' :
            return {...state, createParent : action.payload.input}
        case 'parentItemAddArticleSelected' :
            return {...state, parentItemSelected : action.payload.input}
        case 'selectedImagesNames' :
            const {imageName1, imageName2, files} = action.payload;
            return {...state, imageName1 : imageName1, imageName2 : imageName2, files : files}//
        case 'menuItemAddArticle' :
            return {...state, menuItem : action.payload.input}
        case 'newMenuAddArticle' :
            return {...state, newMenu : action.payload.input}
        case 'activeAddArticle' :
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
            return {
                ...state,checkBoxCreateMenu : action.payload.input, 
                selectedMenu : "", 
                parentItemSelected : "", 
                checkBoxCreateParent : false, 
                createParent : ""}
        case 'addSubItemToParent' :
            return {...state,addSubItemToParent : action.payload.input}
        case 'updateAlertAddArticleSuccessful' :
            const resetState = { 
                menus                   : state.menus,
                menuIds                 : [],
                menuItems               : state.menuItems,
                currentParents          : state.currentParents,
                title                   : '',
                menuItemName            : '',
                newMenu                 : '',
                parentItemSelected      : '',
                selectedMenu            : '',
                createParent            : '',
                imageName1              : '',
                imageName2              : '',
                files                   : null,
                tags                    : '',
                text1                   : '',
                text2                   : '',
                reference               : '',
                statusArticle           : action.payload.input,
                alertType               : action.payload.alertType,
                active                  : false,
                checkBoxCreateMenu      : false,
                addSubItemToParent      : false,
                checkBoxCreateParent    : false
            }
            return {...resetState}
        default: return state
    }
}

export default reducerAddArticle;
