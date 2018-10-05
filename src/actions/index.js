import http from './http';

//getUsers
const startGetUsers = () => {
  return { type: 'START_GET_USERS', ready: false}
}
const completeGetUsers = (data) => {
  return { type: 'COMPLETE_GET_USERS', data }
}
const errorGetUsers =  (error) => {
  return {
    type: 'ERROR_GET_USERS',
    error
  }
}

export const getUsers = () => {
  return ( dispatch, getState ) => {
    dispatch(startGetUsers());
  }
}
