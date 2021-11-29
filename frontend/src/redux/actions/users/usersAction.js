import axios from "axios";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS, USER_PROFILE_FAIL, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_REQUEST, USER_UPDATE_FAIL, USER_UPDATE_SUCCESS } from "../books/actionTypes"

const registerUserAction = (name, email, password)=>{
    return async dispatch =>{
     try {
        dispatch ({
            type: USER_REGISTER_REQUEST,
        });

        //Make Actual call
        const config ={
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const {data}=await axios.post('/api/users/register', {
            name,
            email,
            password,
        },
        config
        );

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
        });

        // save the user into localstorage
        localStorage.setItem('userAuthData', JSON.stringify(data));
     } catch (error) {
         dispatch({
             type: USER_REGISTER_FAIL,
             payload: error.response && error.response.data.message,
         });
         
     }
    };
};

//Login action
const loginUserAction=(email, password)=>{
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_LOGIN_REQUEST,
            });

            //Make the actual
            const config ={
                headers:{
                    'Content-Type': 'application/json'
                },
            };

            const {data}=await axios.post('/api/users/login', {email, password}, config);

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data,
            });

            // save the user into localstorage
        localStorage.setItem('userAuthData', JSON.stringify(data));
        } catch (error) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: error.response && error.response.data.message,
            });
        }
    };

};

//Logout action
const logoutUserAction = () => async dispatch => {
    try {
      //Remove user from storage
      localStorage.removeItem('userAuthData');
      dispatch({
        type: USER_LOGOUT_SUCCESS,
      });
    } catch (error) {}
  };
  


//Profile action
const getUserProfileAction=()=>{
    return async(dispatch, getState)=>{
        //Grab the user token from store
        const{userInfo}=getState().userLogin;
        try {
            dispatch({
                type: USER_PROFILE_REQUEST,
            });
            const config={
                headers: {
                    authorization: `Bearer ${userInfo.token}`,
                },
            };
            //Make request
            const {data}=await axios.get('/api/users/profile', config);
            console.log(data);
            dispatch({
                type: USER_PROFILE_SUCCESS,
                payload: data,
            });

        } catch (error) {
            dispatch({
                type: USER_PROFILE_FAIL,
                payload: error.response && error.response.data.message,
            });
            
        }
    };
};

const updateUser=(name, email, password)=>{
    return async (dispatch, getState)=>{
        try {
            dispatch({
                type: USER_UPDATE_REQUEST,
            });

            const {userInfo}=getState().userLogin;
            const config={
                headers:{
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${userInfo.token}`,
                },
        };
        const {data}=await axios.put('/api/users/profile/update', {
            email,
            password,
            name,
        });
        dispatch({
            type: USER_UPDATE_SUCCESS,
            payload: data,
        });

        } catch (error) {
            dispatch({
                type: USER_UPDATE_FAIL,
                payload: error.response && error.response.data.message
                ? error.response.data.message : error.message,
            });
        }
    };
};

export {registerUserAction, loginUserAction, logoutUserAction, getUserProfileAction, updateUser};