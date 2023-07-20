import { GET_USERS, GET_USERS_LOADING, GET_USERS_SUCCESS, GET_USERS_ERROR } from '../types/usersTypes'

const initialState = {
    users: [],
    loading: false,
    message: '',
    error: '',
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: {
            return {
                ...state,
                users: action.payload,
            }
        }
        case GET_USERS_LOADING: {
            return {
                ...state,
                loading: action.payload,
            }
        }
        case GET_USERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                message: action.payload,
            }
        }
        case GET_USERS_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state
    }
}
