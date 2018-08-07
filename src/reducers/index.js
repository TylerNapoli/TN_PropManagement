import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';
import auth from './authReducer';

<<<<<<< HEAD
import auth from './authReducer';
import newsletters from './newsletterReducer';
import requests from './requestsReducer';
import header from './headerReducer';

const rootReducer = combineReducers({
  form,
  auth,
  newsletters,
  requests,
  header
=======
const rootReducer = combineReducers({
  form,
  auth
>>>>>>> e5b6c86b88a1ce58214aa38b2dbc97c9230466f4
});

export default rootReducer;