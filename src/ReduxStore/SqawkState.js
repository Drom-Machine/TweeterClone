const ADD_SQAWKER = "quityoursqawking.com/Home";

export const sqawkReducer = (state = [], action) => {

    if (action.type === ADD_SQAWKER) {
        return [ ...state, action.payload ];
    }

    return state;
};

export const newSqawkAction = (sqawkText) => {
    
    return ({
        type: ADD_SQAWKER,
        payload: {
            newSqawk: sqawkText,
        }
    });
}