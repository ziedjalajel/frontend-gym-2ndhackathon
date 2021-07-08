import instance from "./instance";

export const ADD_SESSION = "ADD_SESSION";
export const FETCH_SESSIONS = "FETCH_SESSIONS";

export const addSession = (newSession, userId) => {
  return async (dispatch) => {
    try {
      const res = await instance.post(
        `/users/${userId}/sessions`,
        newSession //we get the bakeryId from the product form as we define it in the product state
      );
      dispatch({
        type: ADD_SESSION,
        payload: { newSession: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchSession = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/sessions");
      //this is the same as the return

      dispatch({
        type: FETCH_SESSIONS,
        payload: res.data, //res.data the data here is reserved in js which is the data the contain the array of data from the database which you can find in the inspect page if you console.log it
      });
    } catch (error) {
      console.log(error);
    }
  };
};
