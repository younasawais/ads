const manageArticles = { 
    columnNames         : ['#', 'id', 'Name', 'Published', 'Menu', 'Date Created', 'Pics', 'ParentItem', 'Total words'],
    ids                 : ['id1343', 'id1231', 'id1232', 'id1233','id2331','id2331'],
    names               : ['The khilafah system', 'Jannah', 'Jibriel aslm', 'Muhammad sas', 'Khilafa Rachida', 'Islam'],
    publshed            : ['yes', 'no', 'yes', 'no', 'yes', 'yes'],
    menu                : ['The khilafah', 'The khilafah', 'Jannah', 'Jannah', 'Mobiles', 'The khilafah'],
    dateCreated         : ['010620','051020', '090811', '240818', '091221', '090714'],
    pics                : [ 1, 2, 2, 1, 1, 2],
    parentItem          : ['menu', 'menu','menu','menu','The Khilafah', 'menu'],
    totalWord           : [453, 232, 2342, 433, 456, 2322]
}


function reducerManageArticles(state = manageArticles, action){
    switch(action.type){
        case 'temp1' :
            const copyState = Object.assign(state);
            copyState.checkBoxCreateMenu = action.payload.val;
            console.log(copyState);
            return {...copyState}
        case 'temp2' :
            const copyState2 = Object.assign(state);
            copyState2.addSubItemToNewMenu = action.payload.val;
            console.log(copyState2);
            return {...copyState2}
        default: return state
    }
}

export default reducerManageArticles;
