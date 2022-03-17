import { fetchUser } from '../userData';

const SIGN_IN_ACTION = "sqawker.com/signIn";

export const userReducer = (state = {}, action) => {

    if (action.type === SIGN_IN_ACTION) {
        return action.payload.userData;
        
    }

    return state;

};

export const signInAction = () => async (dispatch) => {

    try {
        const user = await fetchUser('fake@user.com', '123');

        dispatch({
            type: SIGN_IN_ACTION,
            payload: {
                userData: user,
            }
        });
    } catch (error) {
        console.log('error')
    }

};