/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from 'axios';

export const ERROR = 'ERROR';
export const GET_SMURFS = 'GET_SMURFS';
export const GETTING_SMURFS = 'GETTING_SMURFS';

export const CREATING_SMURF = 'CREATING_SMURF';
export const CREATE_SMURF = 'CREATE_SMURF';
// export const UPDATE_SMURF = 'UPDATE_SMURFS';
// export const UPDATING_SMURF = 'UPDATING_SMURF';
// export const SINGLE_SMURF = 'SINGLE_SMURF';

const URL = 'http://localhost:3333/smurfs/';

export const getSmurfs = () => {
  const smurfs = axios.get(URL);

  return dispatch => {
    dispatch({ type: GETTING_SMURFS });
    smurfs
      .then(response => {
        dispatch({ type: GET_SMURFS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const createSmurf = smurf => {
  const newSmurf = axios.post(URL, smurf);
  return dispatch => {
    dispatch({ type: CREATING_SMURF });
    newSmurf
    
      .then(({  }) => {
        dispatch({ type: CREATE_SMURF, payload: smurf });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

// export const toggleShowUpdate = () => {
//   return {
//     type: TOGGLE_UPDATE_SMURF
//   };
// };

// export const updateSingleSmurf = smurf => {
//   return {
//     // type: SINGLE_SMURF,
//     payload: smurf
//   };
// };



// /* 
//   Action Types Go Here!
//   Be sure to export each action type so you can pull it into your reducer
// */

// /*
//   For this project you'll need at least 2 action creators for the main portion,
//    and 2 more for the stretch problem.
//    Be sure to include action types for each type of action creator. Also, be sure to mind
//      the "pending" states like, fetching, creating, updating and deleting.
//    C - addSmurf
//    R - getSmurfs
//    U - updateSmurf
//    D - deleteSmurf
// */

// import axios from 'axios';

// export const ERROR = 'ERROR';
// export const GET_SMURFS = 'GET_SMURFS';
// export const GETTING_SMURFS = 'GETTING_SMURFS';

// export const CREATING_SMURF = 'CREATING_SMURF';
// export const CREATE_SMURF = 'CREATE_SMURF';
// // export const UPDATE_SMURF = 'UPDATE_SMURFS';
// // export const UPDATING_SMURF = 'UPDATING_SMURF';
// // export const SINGLE_SMURF = 'SINGLE_SMURF';

// const URL = 'http://localhost:3333/smurfs';

// export const getSmurfs = () => {
//   const smurfs = axios.get(URL);
//   return dispatch => {
//     dispatch({ type: GETTING_SMURFS });
//     smurfs
//       .then(response => {
//         dispatch({ type: GET_SMURFS, payload: response.data });
//       })
//       .catch(err => {
//         dispatch({ type: ERROR, payload: err });
//       });
//   };
// };

// export const createSmurf = smurf => {
//   const newSmurf = axios.post({URL}, smurf);
//   return dispatch => {
//     dispatch({ type: CREATING_SMURF });
//     newSmurf
//       .then(({ data }) => {
//         dispatch({ type: CREATE_SMURF, payload: data });
//       })
//       .catch(err => {
//         dispatch({ type: ERROR, payload: err });
//       });
//   };
// };


// // export const toggleShowUpdate = () => {
// //   return {
// //     type: TOGGLE_UPDATE_SMURF
// //   };
// // };

// // export const updateSingleSmurf = smurf => {
// //   return {
// //     // type: SINGLE_SMURF,
// //     payload: smurf
// //   };
// // };