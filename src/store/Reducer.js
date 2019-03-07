import * as ActionTypes from './Actions';

const initialState = {
    name: '',
    photos: null
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_NAME:
            return {
                ...state,
                name: action.newName
            };
        case ActionTypes.GET_PHOTOS:
            return {};
        default:
            return state;
    }
}


export default Reducer;

