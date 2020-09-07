const pageContent = {
    menus       : [],
    menuLinks   : []
}

function reducerHome(state = pageContent, action){
    let menus, menuLinks = null;
    switch(action.type){
        case 'homeMenuLinks' :
            menus       = action.payload.menus;
            menuLinks   = action.payload.menuLinks;
            return {...state, menus : menus, menuLinks : menuLinks}
        default: return state
    }
}


export default reducerHome;