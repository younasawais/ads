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
    switch(action.type){
        case 'publishStatusSelect' :
            input = action.payload.input;
            console.log(input);
            publishList = updateFilterPublished(input,state);
            console.log(publishList);
            return {...state, ...publishList, filterPublished : input};
        case 'childParentSelect' :
            input = action.payload.input;
            console.log(input);
            return {...state, filterChildParents : input };
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
    console.log(listPublished);

    let parentsFiltered = updateFilterParents(state.filterChildParents, listPublished);
    console.log(parentsFiltered);
    return parentsFiltered;
    /******************* Filter parent-child *****************/
    // let filteredList2 = {
    //     idsFiltered         : [],
    //     namesFiltered       : [],
    //     publishedFiltered   : [],
    //     linksFiltered       : [],
    //     menuFiltered        : [],
    //     dateCreatedFiltered : [],
    //     picsFiltered        : [],
    //     parentItemFiltered  : [],
    //     totalWordFiltered   : []
    // }
    // for (let i = 0; i < filteredList1.idsFiltered.length; i++) {
    //     if(state.filterChildParents === 'All'){
    //         filteredList2.idsFiltered.push(filteredList1.idsFiltered[i]);
    //         filteredList2.namesFiltered.push(filteredList1.namesFiltered[i]);
    //         filteredList2.publishedFiltered.push(filteredList1.publishedFiltered[i]);
    //         filteredList2.linksFiltered.push(filteredList1.linksFiltered[i]);
    //         filteredList2.menuFiltered.push(filteredList1.menuFiltered[i]);
    //         filteredList2.dateCreatedFiltered.push(filteredList1.dateCreatedFiltered[i]);
    //         filteredList2.picsFiltered.push(filteredList1.picsFiltered[i]);
    //         filteredList2.parentItemFiltered.push(filteredList1.parentItemFiltered[i]);
    //         filteredList2.totalWordFiltered.push(filteredList1.totalWordFiltered[i]);
    //     }else if(state.filterChildParents === 'Parents'){
    //         if (filteredList1.parentItem[i] === ''){
    //             filteredList2.idsFiltered.push(filteredList1.idsFiltered[i]);
    //             filteredList2.namesFiltered.push(filteredList1.namesFiltered[i]);
    //             filteredList2.publishedFiltered.push(filteredList1.publishedFiltered[i]);
    //             filteredList2.linksFiltered.push(filteredList1.linksFiltered[i]);
    //             filteredList2.menuFiltered.push(filteredList1.menuFiltered[i]);
    //             filteredList2.dateCreatedFiltered.push(filteredList1.dateCreatedFiltered[i]);
    //             filteredList2.picsFiltered.push(filteredList1.picsFiltered[i]);
    //             filteredList2.parentItemFiltered.push(filteredList1.parentItemFiltered[i]);
    //             filteredList2.totalWordFiltered.push(filteredList1.totalWordFiltered[i]);
    //         }
    //     }else if (state.filterChildParents === 'Children') {
    //         if (filteredList1.parentItem[i] !== ''){
    //             filteredList2.idsFiltered.push(filteredList1.idsFiltered[i]);
    //             filteredList2.namesFiltered.push(filteredList1.namesFiltered[i]);
    //             filteredList2.publishedFiltered.push(filteredList1.publishedFiltered[i]);
    //             filteredList2.linksFiltered.push(filteredList1.linksFiltered[i]);
    //             filteredList2.menuFiltered.push(filteredList1.menuFiltered[i]);
    //             filteredList2.dateCreatedFiltered.push(filteredList1.dateCreatedFiltered[i]);
    //             filteredList2.picsFiltered.push(filteredList1.picsFiltered[i]);
    //             filteredList2.parentItemFiltered.push(filteredList1.parentItemFiltered[i]);
    //             filteredList2.totalWordFiltered.push(filteredList1.totalWordFiltered[i]);
    //         }
    //     }     
    // }

    // return filteredList2;
}

// function updateFilterParents(input, state){
//     let filteredList = {
//         idsFiltered         : [],
//         namesFiltered       : [],
//         publishedFiltered   : [],
//         linksFiltered       : [],
//         menuFiltered        : [],
//         dateCreatedFiltered : [],
//         picsFiltered        : [],
//         parentItemFiltered  : [],
//         totalWordFiltered   : []
//     }
//     for (let i = 0; i < state.ids.length; i++) {
//         if(input === 'All'){
//             filteredList.idsFiltered.push(state.ids[i]);
//             filteredList.namesFiltered.push(state.names[i]);
//             filteredList.publishedFiltered.push(state.published[i]);
//             filteredList.linksFiltered.push(state.links[i]);
//             filteredList.menuFiltered.push(state.menu[i]);
//             filteredList.dateCreatedFiltered.push(state.dateCreated[i]);
//             filteredList.picsFiltered.push(state.pics[i]);
//             filteredList.parentItemFiltered.push(state.parentItem[i]);
//             filteredList.totalWordFiltered.push(state.totalWord[i]);
//         }else if(input === 'Parents'){
//             if (state.parentItem[i] === ''){
//                 filteredList.idsFiltered.push(state.ids[i]);
//                 filteredList.namesFiltered.push(state.names[i]);
//                 filteredList.publishedFiltered.push(state.published[i]);
//                 filteredList.linksFiltered.push(state.links[i]);
//                 filteredList.menuFiltered.push(state.menu[i]);
//                 filteredList.dateCreatedFiltered.push(state.dateCreated[i]);
//                 filteredList.picsFiltered.push(state.pics[i]);
//                 filteredList.parentItemFiltered.push(state.parentItem[i]);
//                 filteredList.totalWordFiltered.push(state.totalWord[i]);
//             }
//         }else if (input !== '') {
//             if (state.published[i] === 'false'){
//                 filteredList.idsFiltered.push(state.ids[i]);
//                 filteredList.namesFiltered.push(state.names[i]);
//                 filteredList.publishedFiltered.push(state.published[i]);
//                 filteredList.linksFiltered.push(state.links[i]);
//                 filteredList.menuFiltered.push(state.menu[i]);
//                 filteredList.dateCreatedFiltered.push(state.dateCreated[i]);
//                 filteredList.picsFiltered.push(state.pics[i]);
//                 filteredList.parentItemFiltered.push(state.parentItem[i]);
//                 filteredList.totalWordFiltered.push(state.totalWord[i]);
//             }
//         }     
//     }
//     return filteredList;
// }




    /******************* Reusable Filter parent-child *****************/
    function updateFilterParents(input, state){
        let listParentChild = {
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
            if(input === 'All'){
                listParentChild.idsFiltered.push(state.ids[i]);
                listParentChild.namesFiltered.push(state.names[i]);
                listParentChild.publishedFiltered.push(state.published[i]);
                listParentChild.linksFiltered.push(state.links[i]);
                listParentChild.menuFiltered.push(state.menu[i]);
                listParentChild.dateCreatedFiltered.push(state.dateCreated[i]);
                listParentChild.picsFiltered.push(state.pics[i]);
                listParentChild.parentItemFiltered.push(state.parentItem[i]);
                listParentChild.totalWordFiltered.push(state.totalWord[i]);
            }else if(input === 'Parents'){
                if (state.parentItem[i] === ''){
                    listParentChild.idsFiltered.push(state.ids[i]);
                    listParentChild.namesFiltered.push(state.names[i]);
                    listParentChild.publishedFiltered.push(state.published[i]);
                    listParentChild.linksFiltered.push(state.links[i]);
                    listParentChild.menuFiltered.push(state.menu[i]);
                    listParentChild.dateCreatedFiltered.push(state.dateCreated[i]);
                    listParentChild.picsFiltered.push(state.pics[i]);
                    listParentChild.parentItemFiltered.push(state.parentItem[i]);
                    listParentChild.totalWordFiltered.push(state.totalWord[i]);
                }
            }else if (input !== '') {
                if (state.published[i] === 'false'){
                    listParentChild.idsFiltered.push(state.ids[i]);
                    listParentChild.namesFiltered.push(state.names[i]);
                    listParentChild.publishedFiltered.push(state.published[i]);
                    listParentChild.linksFiltered.push(state.links[i]);
                    listParentChild.menuFiltered.push(state.menu[i]);
                    listParentChild.dateCreatedFiltered.push(state.dateCreated[i]);
                    listParentChild.picsFiltered.push(state.pics[i]);
                    listParentChild.parentItemFiltered.push(state.parentItem[i]);
                    listParentChild.totalWordFiltered.push(state.totalWord[i]);
                }
            }     
        }
        return listParentChild;
    }


export default reducerManageArticles;
