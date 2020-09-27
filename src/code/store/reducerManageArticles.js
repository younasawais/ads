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
    filterActive        : false,
    filterParents       : true,
    filterChildren      : true,
    // changes             : [{
    //     id: '',
    //     command : 'delete',
    //     checkbox : 'checked'
    // }]
}


function reducerManageArticles(state = manageArticles, action){
    let name = null;
    let input = null;
    switch(action.type){
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
        // active: true
        // creationDate: "16/08/20"
        // creationTime: "21:37:49"
        // imageName1: "200816213749-Image-Name19"
        // imageName2: "200816213749-Image-Name20"
        // linkId: "200816212749-dat1-sub-of-third"
        // menu: "Menu 1"
        // menuItemName: "Dat1 Sub of fourth2"
        // parentItem: "200816232713-fourth-article"
        // reference: "Book: reference name"
        // tags: "tag1, tag2, tag3"
        // text1: "This is some text stuff"
        // text2: "More text stuff"
        // title: "Dat1 Sub of fourth2"
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
function updateFilterPublished(state){
    let filteredList = {
        idsFiltered         : [],
        namesFiltered       : [],
        publishedFiltered   : [],
        linksFiltered       : [],
        menuFiltered        : [],
        dateCreatedFiltered : [],
        picsFiltered        : [],
        parentItemFiltered  : [],
        totalWordFiltered   : []
    }
    for (let i = 0; i < state.ids.length; i++) {
        if (state.published[i] === 'true'){
            filteredList.idsFiltered.push(state.ids[i]);
            filteredList.namesFiltered.push(state.names[i]);
            filteredList.publishedFiltered.push(state.published[i]);
            filteredList.linksFiltered.push(state.links[i]);
            filteredList.menuFiltered.push(state.menu[i]);
            filteredList.dateCreatedFiltered.push(state.dateCreated[i]);
            filteredList.picsFiltered.push(state.pics[i]);
            filteredList.parentItemFiltered.push(state.parentItem[i]);
            filteredList.totalWordFiltered.push(state.totalWord[i]);
            filteredList.publishedFiltered.push(state.published[i]);
        }            
    }
    return filteredList;
}

function updateFilterParents(state){
    let filteredList = {
        idsFiltered         : [],
        namesFiltered       : [],
        publishedFiltered   : [],
        linksFiltered       : [],
        menuFiltered        : [],
        dateCreatedFiltered : [],
        picsFiltered        : [],
        parentItemFiltered  : [],
        totalWordFiltered   : []
    }
    for (let i = 0; i < state.ids.length; i++) {
        if (state.parentItem[i] === ''){
            filteredList.idsFiltered.push(state.ids[i]);
            filteredList.namesFiltered.push(state.names[i]);
            filteredList.publishedFiltered.push(state.published[i]);
            filteredList.linksFiltered.push(state.links[i]);
            filteredList.menuFiltered.push(state.menu[i]);
            filteredList.dateCreatedFiltered.push(state.dateCreated[i]);
            filteredList.picsFiltered.push(state.pics[i]);
            filteredList.parentItemFiltered.push(state.parentItem[i]);
            filteredList.totalWordFiltered.push(state.totalWord[i]);
            filteredList.publishedFiltered.push(state.published[i]);
        }            
    }
    return filteredList;
}

export default reducerManageArticles;
