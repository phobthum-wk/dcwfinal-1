import axios from 'axios';

export const loginfacebook=(user)=>async dispatch=>{
    dispatch({type:'USER_LOGIN_REQUEST'})
    console.log(user)
    try{
        const response = await axios.post('/api/fbusers/facebook_login', user)
        console.log(response);
        dispatch({type:'USER_LOGIN_SUCCESS' , payload : response.data})
        localStorage.setItem('currentUser' , JSON.stringify(response.data))
        window.location.href='/'
    } catch (error) {
        dispatch({type:'USER_LOGIN_FAILED', payload: error})
    }

}