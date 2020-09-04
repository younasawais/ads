const addArticle = { 
    menus                   : [],
    menuIds                 : [],
    currentParents          : [],
    currentParentsId        : [],
    allParents              : [],
    allParentsIds           : [],
    allParentsMenus         : [],
    title                   : '',
    title2                  : '',
    menuItemName            : '',
    newMenu                 : '',
    parentItemSelected      : '',
    parentItemSelectedId    : '',
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
    //addSubItemToParent      : false,
    checkBoxCreateParent    : false
}


function reducerAddArticle(state = addArticle, action){
    let menuNames         = null;
    let menuIds           = null;
    let allParents        = null;
    let allParentsIds     = null;
    let allParentsMenus   = null;
    switch(action.type){
        case 'updateMenuAddArticle' :
            menuNames         = action.payload.menus.map(menu=>{return( menu.name)});
            menuIds           = action.payload.menus.map(menu=>{return( menu.id )});
            allParents        = action.payload.parentArticles.map(parent=>{return(parent.title)});
            allParentsIds     = action.payload.parentArticles.map(parent=>{return(parent.linkId)});
            allParentsMenus   = action.payload.parentArticles.map(parent=>{return(parent.menu)});
            return {
                ...state, 
                menus : menuNames, 
                menuIds : menuIds, 
                allParents: allParents, 
                allParentsIds: allParentsIds, 
                allParentsMenus: allParentsMenus}
        case 'updateAlertAddArticle' :            
            return {...state, 
                statusArticle : action.payload.input, 
                alertType : action.payload.alertType, 
                currentParents : [], 
                currentParentsId : []}
        case 'selectedMenuAddArticle' :
            const {input} = action.payload;
            let currentParents      = [];
            let currentParentsId    = [];
            for (let i = 0; i < state.allParents.length; i++) {
                if(state.allParentsMenus[i] === input){
                    currentParents.push(state.allParents[i]);
                    currentParentsId.push(state.allParentsIds[i]);
                }
            }

            return {...state, 
                selectedMenu : input, 
                currentParents: currentParents, 
                currentParentsId: currentParentsId,
                parentItemSelected: '',
                parentItemSelectedId: ''
            }

        case 'checkBoxCreateParentAddArticle' :
            return {...state, checkBoxCreateParent : action.payload.input, parentItemSelected : ""}
        case 'createParentAddArticle' :
            return {...state, createParent : action.payload.input}
        case 'parentItemAddArticleSelected' :
            let parentItemSelectedId = "";
            for (let i = 0; i < state.currentParents.length; i++) {
                if(action.payload.input === state.currentParents[i]){
                    parentItemSelectedId = state.currentParentsId[i]  // get parentID
                    break;
                };
            }
            return {...state, parentItemSelected : action.payload.input, parentItemSelectedId:parentItemSelectedId}
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
        case 'title2AddArticle' :
            return {...state,title2 : action.payload.input}
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
            menuNames         = action.payload.menus.map(menu=>{return( menu.name)});
            menuIds           = action.payload.menus.map(menu=>{return( menu.id )});
            allParents        = action.payload.parentArticles.map(parent=>{return(parent.title)});
            allParentsIds     = action.payload.parentArticles.map(parent=>{return(parent.linkId)});
            allParentsMenus   = action.payload.parentArticles.map(parent=>{return(parent.menu)});  
            const resetState = { 
                menus                   : menuNames,
                menuIds                 : menuIds,
                currentParents          : [],
                currentParentsId        : [],
                allParents              : allParents,
                allParentsIds           : allParentsIds,
                allParentsMenus         : allParentsMenus,
                title                   : '',
                title2                  : '',
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
