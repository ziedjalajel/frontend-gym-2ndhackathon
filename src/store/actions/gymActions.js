import axios from "axios";
import * as actionTypes from "./types";
import instance from "./instance";

export const addGym = (newGym) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newGym) formData.append(key, newGym[key]);

      const res = await instance.post("/gyms", formData);
      dispatch({
        type: actionTypes.ADD_GYM,
        payload: { newGym: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchGym = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/gyms");
      //this is the same as the return
      dispatch({
        type: actionTypes.FETCH_GYMS,
        payload: res.data, //res.data the data here is reserved in js which is the data the contain the array of data from the database which you can find in the inspect page if you console.log it
      });
    } catch (error) {
      console.log(error);
    }
  };
};
