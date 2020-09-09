import axios from 'axios';

/*****************************************************/
/******************* Check token *********************/
/*****************************************************/
export async function checkCredentials(){
    const token = sessionStorage.getItem("token");
    const response = await axios.post('http://localhost:4000/checkToken', {token: token});
    //console.log(response);
    if(!response.data.token){window.location = '/login' }else{
        return(true);
    }
}

