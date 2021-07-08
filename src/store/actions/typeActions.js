import * as actionTypes from "./types";
import instance from "./instance";

export const addType = (newType) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/classestypes", newType);
      dispatch({
        type: actionTypes.ADD_TYPE,
        payload: { newType: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchType = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/classestypes");
      //this is the same as the return
      dispatch({
        type: actionTypes.FETCH_TYPES,
        payload: res.data, //res.data the data here is reserved in js which is the data the contain the array of data from the database which you can find in the inspect page if you console.log it
      });
    } catch (error) {
      console.log(error);
    }
  };
};
