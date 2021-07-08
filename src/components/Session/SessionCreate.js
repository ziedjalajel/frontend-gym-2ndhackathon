import { addClass } from "../../store/actions/classActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Redirect } from "react-router-dom";
import { addSession } from "../../store/actions/sessionActions";

import { useState } from "react";

const SessionCreate = () => {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const { sId, sSlug } = useParams(); //the bakerySlug came from the app.js when we pass it in the route path like this "/bakeries/:bakerySlug/products/new"

  const [session, setSession] = useState({
    name: "",
    price: "",
    sId: sId,
  });

  const handleChange = (event) =>
    setSession({ ...session, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addSession(session, sSlug));
    history.push("/sessions");
  };
  if (!user) return <Redirect to="/" />;

  //ToDo handle media in backend
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1> Create Session</h1>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={session.name}
          onChange={handleChange}
          name="name"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Capacity :</label>
        <input
          type="text"
          value={session.capacity}
          onChange={handleChange}
          name="capacity"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Time :</label>
        <input
          type="text"
          value={session.time}
          onChange={handleChange}
          name="time"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-info float-right">
        Create
      </button>
    </form>
  );
};
export default SessionCreate;
