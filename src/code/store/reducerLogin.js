
const pageContent = {
    email       : '',
    password    : '',
    alert       : '',
    loading     : false
}

function reducerLogin(state = pageContent, action){
    switch(action.type){
        case 'loading' :
            return {...state, loading : action.payload.loading}
        case 'loginSuccess' :
            return {...state, email : '', password : ''}
        case 'updateLoginValues' :
            let input   = {[action.payload.inputType] : action.payload.value};
            return {...state, ...input}
        default: return state
    }
}


export default reducerLogin;