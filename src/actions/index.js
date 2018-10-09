import http from './http';

//getUsers
const startGetUsers = () => { return { type: 'START_GET_USERS', ready: false } }
const completeGetUsers = (data) => { return { type: 'COMPLETE_GET_USERS', data } }
const errorGetUsers =  (error) => { return { type: 'ERROR_GET_USERS', error } }

const startGetUserById = () => { return { type: 'START_GET_USER_BY_ID', ready: false } }
const completeGetUserById = (data) => { return { type: 'COMPLETE_GET_USER_BY_ID', data } }
const errorGetUserById =  (error) => { return { type: 'ERROR_GET_USER_BY_ID', error } }

export const getUsers = () => {
  return ( dispatch, getState ) => {
    dispatch(startGetUsers());
    http.get('users/').then((response) =>{
      //console.log(response);
      if(response.data)
        dispatch(completeGetUsers(response.data))
    }).catch((error) =>{
      console.log(error);
      dispatch(errorGetUsers(error));
    })
  }
}


export const getUserById = (userId) => {
  return ( dispatch, getState ) => {
    dispatch(startGetUserById());
    http.get('users/'+ userId ).then((response) =>{
      //console.log(response);
      if(response.data)
        dispatch(completeGetUserById(response.data))
    }).catch((error) =>{
      console.log(error);
      dispatch(errorGetUserById(error));
    })
  }
}
