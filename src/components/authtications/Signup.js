import { signUp } from "../../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { useState } from "react";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const userId = useSelector((state) => state.auth.user);
  let userId = useParams().userId;
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    userId: userId,
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(signUp(user, history));
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>SignUp Form</h1>
      <div className="mb-3">
        <label className="form-label">username</label>
        <input
          type="text"
          value={user.username}
          onChange={handleChange}
          name="username"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">password</label>
        <input
          type="password"
          value={user.password}
          onChange={handleChange}
          name="password"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">email</label>
        <input
          type="email"
          value={user.email}
          onChange={handleChange}
          name="email"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">firstName</label>
        <input
          type="text"
          value={user.firstname}
          onChange={handleChange}
          name="firstname"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">lastName</label>
        <input
          type="text"
          value={user.lastname}
          onChange={handleChange}
          name="lastname"
          className="form-control"
        />
      </div>
      {/* <div className="mb-3">
        <label className="form-label">Type</label>
        <input
          type="integer"
          value={user.userId}
          onChange={handleChange}
          name="userId"
          className="form-control"
        />
      </div> */}
      <div class="input-group">
        <select
          class="form-select"
          id="movie"
          aria-label="Example select with button addon"
          class="col-4"
          name="userId"
          // defaultValue={toDo.priority}
          onChange={handleChange}
        >
          <option value="">Type</option> not done
          <option value="1">Owner</option>
          <option value="2">Coach</option>
          <option value="3">Member</option>
        </select>
      </div>

      <button type="submit" className="btn btn-info float-right">
        SignUp
      </button>
    </form>
  );
};

export default Signup;
