const addArticle = { 
    menus                   : [],
    menuIds                 : [],
    currentParents          : [],
    currentParentsId        : [],
    allParents              : [],
    allParentsIds           : [],
    allParentsMenus         : [],
    allTags                 : [],
    allReferences           : [],
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
    active                  : true,
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
    let allTags           = null;
    let allReferences     = null;
    let input             = null;
    switch(action.type){
        case 'updateMenuAddArticle' :
            menuNames         = action.payload.menus.map(menu=>{return( menu.name)});
            menuIds           = action.payload.menus.map(menu=>{return( menu.id )});
            allParents        = action.payload.parentArticles.map(parent=>{return(parent.title)});
            allParentsIds     = action.payload.parentArticles.map(parent=>{return(parent.linkId)});
            allParentsMenus   = action.payload.parentArticles.map(parent=>{return(parent.menu)});
            allTags           = action.payload.parentArticles.map(parent=>{return(parent.tags)});
            allReferences     = action.payload.parentArticles.map(parent=>{return(parent.reference)});
            return {
                ...state, 
                menus           : menuNames, 
                menuIds         : menuIds, 
                allParents      : allParents, 
                allParentsIds   : allParentsIds, 
                allParentsMenus : allParentsMenus,
                allTags         : allTags,
                allReferences   : allReferences            
            }
        case 'updateAlertAddArticle' :            
            return {...state, 
                statusArticle : action.payload.input, 
                alertType : action.payload.alertType, 
                currentParents : [], 
                currentParentsId : []}
        case 'selectedMenuAddArticle' :
            const {input} = action.payload;
            console.log('selectedMenuAddArticle running..' + input);
            let currentParents      = [];
            let currentParentsId    = [];
            let reference           = null;
            let tags                = null;
            for (let i = 0; i < state.allParentsMenus.length; i++) {
               if(state.allParentsMenus[i] === input){
                    reference   = state.allReferences[i];
                    tags        = state.allTags[i];
                    break;
               }
            }
            
            for (let i = 0; i < state.allParents.length; i++) {
                if(state.allParentsMenus[i] === input){
                    currentParents.push(state.allParents[i]);
                    currentParentsId.push(state.allParentsIds[i]);
                }
            }

            return {...state, 
                selectedMenu        : input, 
                currentParents      : currentParents, 
                currentParentsId    : currentParentsId,
                reference           : reference,
                tags                : tags,
                parentItemSelected  : '',
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
            let str = action.payload.input;
            let reg = /\w+(\s|\.|\,)?\s?/g;
            let arr = str.match(reg);
            let arr2 = [];
            console.log(arr);
            for (let i = 0; i < arr.length; i++) {
              let word = [];
              for (let j = 0; j < arr[i].length; j++) {
                if(j === 0){
                  word.push(arr[i][j].toUpperCase());
                }else{
                  word.push(arr[i][j].toLowerCase());
                }
              }
              word = word.join('');
              arr2.push(word);
            }
            //let input = input.replace(/(^\w)/, "$1".toUpperCase());
            return {...state,title : arr2.join(''), menuItemName : arr2.join('')}
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
