export const SET_USERS = 'SET_USERS';
export const SET_GAS_STATIONS = 'SET_GAS_STATIONS';


const dataReducer = (state, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users,
                loading: false,
            };
            return state;
        case SET_GAS_STATIONS:
            return {
                ...state,
                users: action.set_gas_stations,
                loading: false,
            };
        default:
            return state;
    }
};

export default dataReducer;