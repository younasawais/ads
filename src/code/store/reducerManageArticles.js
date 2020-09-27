const manageArticles = { 
    columnNames         : ['#', 'id', 'Name', 'link', 'Published', 'Menu', 'Date Created', 'Pics', 'ParentItem', 'Total words'],
    ids                 : [],
    idsFiltered         : [],
    names               : [],
    namesFiltered       : [],
    published           : [],
    publishedFiltered   : [],
    links               : [],
    linksFiltered       : [],
    menu                : [],
    menuFiltered        : [],
    dateCreated         : [],
    dateCreatedFiltered : [],
    pics                : [],
    picsFiltered        : [],
    parentItem          : [],
    parentItemFiltered  : [],
    totalWord           : [],
    totalWordFiltered   : [],
    checkBox            : [],
    alertMessage        : '',
    alertType           : '',
    loading             : true,
    changes             : [],
    filterPublished     : 'All',
    filterChildParents  : 'All'
    // changes             : [{
    //     id: '',
    //     command : 'delete',
    //     checkbox : 'checked'
    // }]
}


function reducerManageArticles(state = manageArticles, action){
    let name = null;
    let input = null;
    let publishList = null;
    let parentChildList = null;
    let filtered = null;
    switch(action.type){
        case 'publishStatusSelect' :
            input = action.payload.input;
            publishList = updateFilterPublished(input,state);
            console.log(publishList);
            parentChildList = updateFilterParents(state.filterChildParents, publishList);
            filtered = toFiltered(parentChildList);
            console.log(parentChildList);
            return {...state, ...filtered, filterPublished : input};
        case 'childParentSelect' :
            input = action.payload.input;
            parentChildList = updateFilterParents(input, state);
            console.log(parentChildList);
            publishList = updateFilterPublished(state.filterPublished, parentChildList);
            filtered = toFiltered(publishList);
            return {...state, ...filtered, filterChildParents : input };
        case 'filterCheckBoxTrigger' : 
            name = action.payload.name;
            input = action.payload.input;
            let checkboxVal = {[name] : input}
            //let publishedFiltered = updateFilterPublished(state);
            let parentsFiltered = updateFilterParents(state);
            console.log(parentsFiltered); 
            return {...state,...checkboxVal}
        case 'alertManageArticles' :
            return {...state, alertMessage : action.payload.alertMessage}
        case 'selectArticles' :
            const copyState = Object.assign(state);
            const processState = handleCheckBox(copyState, action.payload);
            console.log(processState);
            return {...processState}
        case 'articleListManageArticles' :
            const newObj = objectsToArrays(action.payload.value);
            return {...state, 
                ids                 : newObj.ids, 
                idsFiltered         : newObj.ids, 
                names               : newObj.names,
                namesFiltered       : newObj.names,
                published           : newObj.published,
                publishedFiltered   : newObj.published,
                links               : newObj.links,
                linksFiltered       : newObj.links,
                menu                : newObj.menu,
                menuFiltered        : newObj.menu,
                dateCreated         : newObj.dateCreated,
                dateCreatedFiltered : newObj.dateCreated,
                pics                : newObj.pics,
                picsFiltered        : newObj.pics,
                parentItem          : newObj.parentItem,
                parentItemFiltered  : newObj.parentItem,
                totalWord           : newObj.totalWord,
                totalWordFiltered   : newObj.totalWord,
                loading             : false,
                checkBox            : newObj.checkBox,
                changes             : newObj.changes
            }
        default: return state
    }
}

function objectsToArrays(data){
    let newObj = {
        ids                 : [],
        idsFiltered         : [],
        names               : [],
        namesFiltered       : [],
        published           : [],
        publishedFiltered   : [],
        links               : [],
        linksFiltered       : [],
        menu                : [],
        menuFiltered        : [],
        dateCreated         : [],
        dateCreatedFiltered : [],
        pics                : [],
        picsFiltered        : [],
        parentItem          : [],
        parentItemFiltered  : [],
        totalWord           : [],
        totalWordFiltered   : [],
        checkBox            : [],
        loading             : true,
        changes             : [] }

    for (let i = 0; i < data.length; i++) {
        newObj.ids.push(data[i].linkId);        
        newObj.names.push(data[i].title);
        newObj.published.push(data[i].active.toString());
        newObj.links.push(data[i].linkId);
        newObj.menu.push(data[i].menu);
        newObj.dateCreated.push(data[i].creationDate);
        newObj.pics.push(data[i].imageName1 + ' : ' + data[i].imageName2);
        newObj.parentItem.push(data[i].parentItem);
        newObj.totalWord.push(data[i].text1.length + data[i].text2.length);
        newObj.checkBox.push(false);}
        newObj.idsFiltered          = newObj.ids;
        newObj.namesFiltered        = newObj.names;
        newObj.publishedFiltered    = newObj.published;
        newObj.linksFiltered        = newObj.links;
        newObj.menuFiltered         = newObj.menu;
        newObj.dateCreatedFiltered  = newObj.dateCreated;
        newObj.picsFiltered         = newObj.pics;
        newObj.parentItemFiltered   = newObj.parentItem;
        newObj.totalWordFiltered    = newObj.totalWord;
    return newObj;
}

function handleCheckBox(state, payload){
    const {changes} = state;
    let found = false;
    let newState = {...state};
    if(changes.length > 0){
        for (let i = 0; i < changes.length; i++) {
            if(changes[i].id === payload.id){
                state.changes[i].checked = payload.checked
                found = true;
                break;
            };
        }
        if(!found){
            newState.changes.push(payload);
        }
    }else{
        newState.changes.push(payload);
    }
    let allChanges = newState.changes.filter((change,index)=>{
        if(change.checked){
            return true
        }
    })
    newState.changes = allChanges;
    let index = newState.links.indexOf(payload.id);
    newState.checkBox[index] = !newState.checkBox[index];
    return newState;
}

/*********************************************************/
/******************** Filter functions *******************/
/*********************************************************/
function updateFilterPublished(input, state){
    let listPublished = {
        ids         : [],
        names       : [],
        published   : [],
        links       : [],
        menu        : [],
        dateCreated : [],
        pics        : [],
        parentItem  : [],
        totalWord   : []
    }
    for (let i = 0; i < state.ids.length; i++) {
        if(input === 'All'){
            listPublished.ids.push(state.ids[i]);
            listPublished.names.push(state.names[i]);
            listPublished.published.push(state.published[i]);
            listPublished.links.push(state.links[i]);
            listPublished.menu.push(state.menu[i]);
            listPublished.dateCreated.push(state.dateCreated[i]);
            listPublished.pics.push(state.pics[i]);
            listPublished.parentItem.push(state.parentItem[i]);
            listPublished.totalWord.push(state.totalWord[i]);
        }else if(input === 'Published'){
            if (state.published[i] === 'true'){
                listPublished.ids.push(state.ids[i]);
                listPublished.names.push(state.names[i]);
                listPublished.published.push(state.published[i]);
                listPublished.links.push(state.links[i]);
                listPublished.menu.push(state.menu[i]);
                listPublished.dateCreated.push(state.dateCreated[i]);
                listPublished.pics.push(state.pics[i]);
                listPublished.parentItem.push(state.parentItem[i]);
                listPublished.totalWord.push(state.totalWord[i]);
            }
        }else if (input === 'Not published') {
            if (state.published[i] === 'false'){
                listPublished.ids.push(state.ids[i]);
                listPublished.names.push(state.names[i]);
                listPublished.published.push(state.published[i]);
                listPublished.links.push(state.links[i]);
                listPublished.menu.push(state.menu[i]);
                listPublished.dateCreated.push(state.dateCreated[i]);
                listPublished.pics.push(state.pics[i]);
                listPublished.parentItem.push(state.parentItem[i]);
                listPublished.totalWord.push(state.totalWord[i]);
            }
        }     
    }
    return listPublished;
}

/******************* Filter parent-child *****************/
function updateFilterParents(input, state){
    let listParentChild = {
        ids         : [],
        names       : [],
        published   : [],
        links       : [],
        menu        : [],
        dateCreated : [],
        pics        : [],
        parentItem  : [],
        totalWord   : []
    }
    for (let i = 0; i < state.ids.length; i++) {
        if(input === 'All'){
            listParentChild.ids.push(state.ids[i]);
            listParentChild.names.push(state.names[i]);
            listParentChild.published.push(state.published[i]);
            listParentChild.links.push(state.links[i]);
            listParentChild.menu.push(state.menu[i]);
            listParentChild.dateCreated.push(state.dateCreated[i]);
            listParentChild.pics.push(state.pics[i]);
            listParentChild.parentItem.push(state.parentItem[i]);
            listParentChild.totalWord.push(state.totalWord[i]);
        }else if(input === 'Parents'){
            if (state.parentItem[i] === ''){
                listParentChild.ids.push(state.ids[i]);
                listParentChild.names.push(state.names[i]);
                listParentChild.published.push(state.published[i]);
                listParentChild.links.push(state.links[i]);
                listParentChild.menu.push(state.menu[i]);
                listParentChild.dateCreated.push(state.dateCreated[i]);
                listParentChild.pics.push(state.pics[i]);
                listParentChild.parentItem.push(state.parentItem[i]);
                listParentChild.totalWord.push(state.totalWord[i]);
            }
        }else if (input === 'Children') {
            if (state.parentItem[i] !== ''){
                listParentChild.ids.push(state.ids[i]);
                listParentChild.names.push(state.names[i]);
                listParentChild.published.push(state.published[i]);
                listParentChild.links.push(state.links[i]);
                listParentChild.menu.push(state.menu[i]);
                listParentChild.dateCreated.push(state.dateCreated[i]);
                listParentChild.pics.push(state.pics[i]);
                listParentChild.parentItem.push(state.parentItem[i]);
                listParentChild.totalWord.push(state.totalWord[i]);
            }
        }     
    }
    return listParentChild;
}

function toFiltered(copyState){
    const filteredList = {
        idsFiltered         : copyState.ids,
        namesFiltered       : copyState.names,
        publishedFiltered   : copyState.published,
        linksFiltered       : copyState.links,
        menuFiltered        : copyState.menu,
        dateCreatedFiltered : copyState.dateCreated,
        picsFiltered        : copyState.pics,
        parentItemFiltered  : copyState.parentItem,
        totalWordFiltered   : copyState.totalWord
    }
    return filteredList;
}
export default reducerManageArticles;