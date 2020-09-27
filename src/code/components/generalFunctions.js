import axios from 'axios';

/*****************************************************/
/******************* Check token *********************/
/*****************************************************/
export async function checkCredentials(){
    const token = sessionStorage.getItem("token");
    const response = await axios.post(process.env.REACT_APP_BACKEND + 'checkToken', {token: token});
    //console.log(response);
    if(!response.data.token){window.location = '/login' }else{
        return(true);
    }
}

