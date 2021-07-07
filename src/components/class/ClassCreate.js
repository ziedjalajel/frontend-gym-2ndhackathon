import { addClass } from "../../store/actions/classActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { useState } from "react";

const ClassCreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { cSlug, cId } = useParams(); //the bakerySlug came from the app.js when we pass it in the route path like this "/bakeries/:bakerySlug/products/new"

  const [clas, setClas] = useState({
    name: "",
    price: "",
    cId: cId,
  });

  const handleChange = (event) =>
    setClas({ ...clas, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addClass(clas, cSlug));
    history.push("/classes");
  };
  //ToDo handle media in backend
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1> Create Class</h1>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={clas.name}
          onChange={handleChange}
          name="name"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Price :</label>
        <input
          type="text"
          value={clas.price}
          onChange={handleChange}
          name="price"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-info float-right">
        Create
      </button>
    </form>
  );
};
export default ClassCreate;
