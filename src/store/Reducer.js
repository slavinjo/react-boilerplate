import * as ActionTypes from './Actions';

const initialState = {
    buttonNameAdd: 0,
    buttonNameSubtract: 0,
    //  photos: null
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_NAME:
            return {
                ...state,
                buttonNameAdd: state.buttonNameAdd + action.counter
            };
        case ActionTypes.DELETE_NAME:
            return {
                ...state,
                buttonNameSubtract: state.buttonNameSubtract - action.counter
            };
        case ActionTypes.RESET_NAMES:
            return {
                ...state,
                buttonNameSubtract: 0,
                buttonNameAdd: 0
            };
        default:
            return state;
    }
}


export default Reducer;

