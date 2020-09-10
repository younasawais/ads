const manageArticles = { 
    columnNames         : ['#', 'id', 'Name', 'link', 'Published', 'Menu', 'Date Created', 'Pics', 'ParentItem', 'Total words'],
    ids                 : [],
    names               : [],
    publshed            : [],
    links               : [],
    menu                : [],
    dateCreated         : [],
    pics                : [],
    parentItem          : [],
    totalWord           : [],
    checkBox            : [],
    alertMessage        : '',
    alertType           : '',
    loading             : true,
    changes             : []
    // changes             : [{
    //     id: '',
    //     command : 'delete',
    //     checkbox : 'checked'
    // }]
}


function reducerManageArticles(state = manageArticles, action){
    switch(action.type){
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
                ids         : newObj.ids, 
                names       : newObj.names,
                publshed    : newObj.publshed,
                links       : newObj.links,
                menu        : newObj.menu,
                dateCreated : newObj.dateCreated,
                pics        : newObj.pics,
                loading     : false,
                parentItem  : newObj.parentItem,
                totalWord   : newObj.totalWord,
                checkBox    : newObj.checkBox,
                changes     : newObj.changes
            }
        default: return state
    }
}

function objectsToArrays(data){
    let newObj = {
        ids                 : [],
        names               : [],
        publshed            : [],
        links               : [],
        menu                : [],
        dateCreated         : [],
        pics                : [],
        parentItem          : [],
        totalWord           : [],
        checkBox            : [],
        loading             : true,
        changes             : [] }

    for (let i = 0; i < data.length; i++) {
        newObj.ids.push(data[i].linkId);        
        newObj.names.push(data[i].title);
        newObj.publshed.push(data[i].active.toString());
        newObj.links.push(data[i].linkId);
        newObj.menu.push(data[i].menu);
        newObj.dateCreated.push(data[i].creationDate);
        newObj.pics.push(data[i].imageName1 + ' : ' + data[i].imageName2);
        newObj.parentItem.push(data[i].parentItem);
        newObj.totalWord.push(data[i].text1.length + data[i].text2.length);
        newObj.checkBox.push(false);}
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

export default reducerManageArticles;
