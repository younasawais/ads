const manageArticles = { 
    nrs                 : [],
    ids                 : [],
    names               : [],
    publshed            : [],
    menu                : [],
    dateCreated         : [],
    pics                : [],
    totalWord           : []
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
