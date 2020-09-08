
const pageContent = {
    email       :   '',
    password    :   '',
    alert       :   ''
}

function reducerLogin(state = pageContent, action){
    switch(action.type){
        case 'loginUnsuccessful' :
            let alert   =  action.payload.value;
            return {...state, email : '', password : ''}
        case 'loginSuccess' :
            //let input   = {[action.payload.inputType] : action.payload.value};
            return {...state, email : '', password : ''}
        case 'updateLoginValues' :
            let input   = {[action.payload.inputType] : action.payload.value};
            return {...state, ...input}
        default: return state
    }
}


export default reducerLogin;