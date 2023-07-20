import axios from 'axios'
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

export const getPosts = () => async (dispatch, getState) => {
    const state = getState()
    
    // If posts are already fetched, don't fetch again 
    if (state.posts.posts.length > 0) return

    dispatch({ type: GET_POSTS_LOADING, payload: true })

    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')

        if (data.length > 0) {
            dispatch({ type: GET_POSTS, payload: data })
            dispatch({ type: GET_POSTS_SUCCESS, payload: 'Posts fetched successfully' })
        }
    } catch (error) {
        dispatch({ type: GET_POSTS_ERROR, payload: error.message })
    }
}

export const getPostsByUserId = (id) => async (dispatch, getState) => {
    dispatch({ type: GET_POSTS_BY_USER_ID_LOADING, payload: true })

    // If id is not passed, get the first user id from the state
    if (!id) {
        const state = getState()
        id = state.users.users[0].id
    }

    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)

        if (data.length > 0) {
            dispatch({ type: GET_POSTS_BY_USER_ID, payload: data })
            dispatch({ type: GET_POSTS_BY_USER_ID_SUCCESS, payload: 'Posts fetched successfully' })
        }
    } catch (error) {
        dispatch({ type: GET_POSTS_BY_USER_ID_ERROR, payload: error.message })
    }
}
