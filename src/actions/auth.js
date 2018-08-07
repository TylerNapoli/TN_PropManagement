
import axios from 'axios';

import { ROOT_URL } from '../config';

import {
    AUTHENTICATE_USER
} from './types';

export function signUp(fields, success) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signUp`, fields)
            .then(response => {
                const { token } = response.data;
                localStorage.setItem('token', token);
               dispatch({
                   type: AUTHENTICATE_USER,
                   payload: response.data
               })
               success();
<<<<<<< HEAD
            })
            .catch(err => {
                if(err) { console.log(err) }
            })
=======
            })
            .catch(err => {
                if(err) { console.log(err) }
            })
>>>>>>> e5b6c86b88a1ce58214aa38b2dbc97c9230466f4
    }
}

export function signIn(fields, success) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signIn`, fields)
            .then(response => {
<<<<<<< HEAD
=======
                const { token } = response.data;
                localStorage.setItem('token', token);
>>>>>>> e5b6c86b88a1ce58214aa38b2dbc97c9230466f4
               dispatch({
                   type: AUTHENTICATE_USER,
                   payload: response.data
               })
<<<<<<< HEAD
               const { token } = response.data;
               localStorage.setItem('token', token);
=======
>>>>>>> e5b6c86b88a1ce58214aa38b2dbc97c9230466f4
               success();
            })
            .catch(err => {
                if(err) { console.log(err) }
            })
    }
}