const { USER_PROFILE_SUCCESS, USER_PROFILE_FAIL, USER_PROFILE_REQUEST } = require("../../actions/books/actionTypes");

const userProfileReducer = (state={}, action)=>{
    switch(action.type){
        case USER_PROFILE_REQUEST:
            return{
                loading: true,
            };
            case USER_PROFILE_SUCCESS:
                return{
                    user: action.payload, 
                };
                case USER_PROFILE_FAIL:
                    return{
                        loading: false,
                        error: action.payload,  
                    };
                    default:
                        return state;
    }
};

export {userProfileReducer};
