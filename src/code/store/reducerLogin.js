
const pageContent = {
    email       :   '',
    password    :   '',

}

function reducerLogin(state = pageContent, action){
    switch(action.type){
        case 'updateLoginValues' :
            let input   = {[action.payload.inputType] : action.payload.value};
            return {...state, ...input}
        default: return state
    }
}


export default reducerLogin;