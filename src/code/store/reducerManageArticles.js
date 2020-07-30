const manageArticles = { 
    columnNames         : ['#', 'id', 'Name', 'link', 'Published', 'Menu', 'Date Created', 'Pics', 'ParentItem', 'Total words'],
    ids                 : ['id1343', 'id1231', 'id1232', 'id1233','id2331','id2338'],
    names               : ['The khilafah system', 'Jannah', 'Jibriel aslm', 'Muhammad sas', 'Khilafa Rachida', 'Islam'],
    publshed            : ['yes', 'no', 'yes', 'no', 'yes', 'yes'],
    links               : ['the-khilafah-system', 'jannah', 'jibriel-aslm', 'Muhammad-sas', 'khilafa-rachida', 'islam'],
    menu                : ['The khilafah', 'The khilafah', 'Jannah', 'Jannah', 'Mobiles', 'The khilafah'],
    dateCreated         : ['010620','051020', '090811', '240818', '091221', '090714'],
    pics                : [ 1, 2, 2, 1, 1, 2],
    parentItem          : ['menu', 'menu','menu','menu','The Khilafah', 'menu'],
    totalWord           : [453, 232, 2342, 433, 456, 2322],
    changes             : []
    // changes             : [{
    //     id: '',
    //     command : 'delete',
    //     checkbox : 'checked'
    // }]
}


function reducerManageArticles(state = manageArticles, action){
    switch(action.type){
        case 'selectArticles' :
            const copyState = Object.assign(state);
            const processState = handleCheckBox(copyState, action.payload);
            console.log(processState);
            return {...processState}
        case 'temp2' :
            const copyState2 = Object.assign(state);
            copyState2.addSubItemToNewMenu = action.payload.val;
            console.log(copyState2);
            return {...copyState2}
        default: return state
    }
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
    //console.log(state);
    let allChanges = newState.changes.filter((change,index)=>{
        //console.log(change);
        if(change.checked){
            return true
        }
    })
    newState.changes = allChanges;
    //console.log(newState);
    return newState;
}

export default reducerManageArticles;
