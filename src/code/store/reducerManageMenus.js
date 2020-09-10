const manageMenus = { 
    columnNames         : ['#', 'id', 'Name', 'Published', 'Date Created', 'Total Art. Parents', 'Total Art. Children'],
    ids                 : [],
    names               : [],
    publshed            : [],
    dateCreated         : [],
    totalParents        : [],
    totalChildren       : [],
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


function reducerManageMenus(state = manageMenus, action){
    //let children, parents = null;
    switch(action.type){
        case 'alertManageMenus' :
            return {...state, alertMessage : action.payload.alertMessage}
        case 'selectMenus' :
            const copyState = Object.assign(state);
            const processState = handleCheckBox(copyState, action.payload);
            //console.log(processState);
            return {...processState, loading: false}
        case 'menusListManageMenus' :
            console.log(action.payload.menus);
            const newObj = objectsToArrays(action.payload.menus);
            return {...state, 
                ids             : newObj.ids, 
                names           : newObj.names,
                publshed        : newObj.publshed,
                dateCreated     : newObj.dateCreated,
                totalParents    : action.payload.parents,
                totalChildren   : action.payload.children,
                checkBox        : newObj.checkBox,
                changes         : newObj.changes,
                loading         : false
            }
        default: return state
    }
}

function objectsToArrays(data){
    console.log(data);
    let newObj = {
        ids                 : [],
        names               : [],
        publshed            : [],
        menu                : [],
        dateCreated         : [],
        checkBox            : [],
        changes             : [] }

    for (let i = 0; i < data.length; i++) {
        newObj.ids.push(data[i].id);        
        newObj.names.push(data[i].name);
        newObj.publshed.push(data[i].active.toString());
        newObj.dateCreated.push(data[i].creationDate);
        newObj.checkBox.push(false);}
        console.log(newObj);
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
    let index = newState.ids.indexOf(payload.id);
    newState.checkBox[index] = !newState.checkBox[index];
    return newState;
}

export default reducerManageMenus;
