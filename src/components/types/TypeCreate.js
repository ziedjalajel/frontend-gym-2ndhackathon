import { addClass } from "../../store/actions/classActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Redirect } from "react-router-dom";
import { addType } from "../../store/actions/typeActions";

import { useState } from "react";

const TypeCreate = () => {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const { tId } = useParams(); //the bakerySlug came from the app.js when we pass it in the route path like this "/bakeries/:bakerySlug/products/new"

  const [types, setTypes] = useState({
    name: "",
  });

  const handleChange = (event) =>
    setTypes({ ...types, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addType(types));
    history.push("/classestypes");
  };
  if (!user) return <Redirect to="/" />;

  //ToDo handle media in backend
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1> Create Type</h1>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={types.name}
          onChange={handleChange}
          name="name"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-info float-right">
        Create
      </button>
    </form>
  );
};
export default TypeCreate;
