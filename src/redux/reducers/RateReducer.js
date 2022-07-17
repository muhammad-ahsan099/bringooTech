import {GET_RATE  , GET_COUNTARY_INFO} from '../type/Type';
const initialState = {
    rate: {},
    countryInfo: []
};
const RateReducer = (state = initialState, action) => {
    switch (action.type) {
       
        case GET_RATE: {
            return {
                ...state,
                rate: action.payload,
            }
        }


        case GET_COUNTARY_INFO: {
            return {
                ...state,
                countryInfo: action.payload,
            }
        }

        default:
            return state;
    }
}

export default RateReducer;