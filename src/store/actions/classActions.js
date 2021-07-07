import instance from "./instance";
// ACTION TYPES
export const ADD_CLASS = "ADD_CLASS";
// export const DELETE_Class = "DELETE_PRODUCT";

export const FETCH_CLASSES = "FETCH_CLASSES";

// ACTIONS
export const addClass = (newClass, tId) => {
  return async (dispatch) => {
    try {
      const res = await instance.post(
        `/classestypes/${tId}/classes`,
        newClass //we get the bakeryId from the product form as we define it in the product state
      );
      dispatch({
        type: ADD_CLASS,
        payload: { newClass: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const deleteProduct = (productId) => {
//   return async (dispatch) => {
//     try {
//       await axios.delete(`http://localhost:8000/products/${productId}`);
//       dispatch({
//         type: DELETE_PRODUCT,
//         payload: { productId: productId },
//       });
//     } catch (error) {
//       console.log(error);
//we will chnage the log above into this console.log(error.message.include("401"));
//and also we can change it to if condition the wrap the dispatch steatment under like this if(error.message.include("401")) {dispatch({type: payload:})}

//this part of code is usefull so that when the token is expiered and the user click on the delete button it will turn him back to the sighin page
// dispatch({
//   type: actionTypes.SET_USER,
//   payload: null,
// });
//     }
//   };
// };

export const fetchClass = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/classes");
      //this is the same as the return

      dispatch({
        type: FETCH_CLASSES,
        payload: res.data, //res.data the data here is reserved in js which is the data the contain the array of data from the database which you can find in the inspect page if you console.log it
      });
    } catch (error) {
      console.log(error);
    }
  };
};
