import { addGym } from "../../store/actions/gymActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Redirect } from "react-router-dom";

import { useState } from "react";

const GymCreate = () => {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const { gSlug } = useParams(); //the bakerySlug came from the app.js when we pass it in the route path like this "/bakeries/:bakerySlug/products/new"

  const [gym, setGym] = useState({
    name: "",
    image: "",
  });

  const handleChange = (event) =>
    setGym({ ...gym, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setGym({ ...gym, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addGym(gym, gSlug));
    history.push("/gyms");
  };
  if (!user) return <Redirect to="/" />;

  //ToDo handle media in backend
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1> Create Gym</h1>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={gym.name}
          onChange={handleChange}
          name="name"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Image</label>
        <input
          type="file"
          onChange={handleImage}
          name="image"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-info float-right">
        Create
      </button>
    </form>
  );
};
export default GymCreate;
