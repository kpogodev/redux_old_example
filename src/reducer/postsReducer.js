import {
    GET_POSTS,
    GET_POSTS_LOADING,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
    GET_POSTS_BY_USER_ID,
    GET_POSTS_BY_USER_ID_LOADING,
    GET_POSTS_BY_USER_ID_SUCCESS,
    GET_POSTS_BY_USER_ID_ERROR,
} from '../types/postsTypes'

const initialState = {
    posts: [],
    loading: false,
    message: '',
    error: '',
    postsByUserId: {
        posts: [],
        loading: false,
        message: '',
        error: '',
    },
}

export const postsReducer = (state = initialState, action) => {
    const actionHandler = {
        [GET_POSTS]: () => ({
            ...state,
            posts: action.payload,
        }),
        [GET_POSTS_LOADING]: () => ({
            ...state,
            loading: action.payload,
        }),
        [GET_POSTS_SUCCESS]: () => ({
            ...state,
            loading: false,
            message: action.payload,
        }),
        [GET_POSTS_ERROR]: () => ({
            ...state,
            loading: false,
            error: action.payload,
        }),
        [GET_POSTS_BY_USER_ID]: () => ({
            ...state,
            postsByUserId: {
                ...state.postsByUserId,
                posts: action.payload,
            },
        }),
        [GET_POSTS_BY_USER_ID_LOADING]: () => ({
            ...state,
            postsByUserId: {
                ...state.postsByUserId,
                loading: action.payload,
            },
        }),
        [GET_POSTS_BY_USER_ID_SUCCESS]: () => ({
            ...state,
            postsByUserId: {
                ...state.postsByUserId,
                loading: false,
                message: action.payload,
            },
        }),
        [GET_POSTS_BY_USER_ID_ERROR]: () => ({
            ...state,
            postsByUserId: {
                ...state.postsByUserId,
                loading: false,
                error: action.payload,
            },
        }),
    }

    return actionHandler[action.type] ? actionHandler[action.type]() : state
}
