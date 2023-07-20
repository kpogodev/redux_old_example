import axios from 'axios';
import { GET_USERS, GET_USERS_LOADING, GET_USERS_SUCCESS, GET_USERS_ERROR } from '../types/usersTypes';
import { getPostsByUserId } from './postsAction';


export const getUsers = () => async dispatch => {
    dispatch({ type: GET_USERS_LOADING, payload: true });
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');

        if(res.status === 200) {
            dispatch({ type: GET_USERS, payload: res.data }); 
            dispatch({ type: GET_USERS_SUCCESS, payload: 'Users fetched successfully' }) 

            // Get posts of first user (you can pass specific user id or leave it empty to get posts of first user)
           dispatch(getPostsByUserId());
        }
        
    } catch (error) {
        dispatch({ type: GET_USERS_ERROR, payload: error.message })
    }
}