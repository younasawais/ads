const manageArticles = { 
    columnNames         : ['#', 'id', 'Name', 'link', 'Published', 'Menu', 'Date Created', 'Pics', 'ParentItem', 'Total words'],
    ids                 : ['id1343', 'id1231', 'id1232', 'id1233','id2331','id2338'],
    names               : ['Moon size', 'Console design', 'Stars', 'Ram memory', 'Screens', 'Games'],
    publshed            : ['yes', 'no', 'yes', 'no', 'yes', 'yes'],
    links               : ['moon-size', 'console-design', 'stars', 'ram-memory', 'screens', 'games'],
    menu                : ['Space', 'Playstation', 'Space', 'PC', 'PC', 'Playstation'],
    dateCreated         : ['010620','051020', '090811', '240818', '091221', '090714'],
    pics                : [ 1, 2, 2, 1, 1, 2],
    parentItem          : ['stars', 'menu','menu','menu','menu', 'menu'],
    totalWord           : [453, 232, 2342, 433, 456, 2322],
    checkBox            : [false, false, false, false, false, false, false],
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
