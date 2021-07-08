import { Logo, NavItem, ThemeButton, SignupButton } from "../styles";

import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { signOut } from "../store/actions/authActions";

const NavBar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignOut = () => {
    dispatch(signOut(history));
  };
  return (
    <div className="navbar navbar-expand">
      <Logo className="navbar-brand" to="/">
        <img
          src={
            "https://rukminim1.flixcart.com/image/416/416/jq189e80/dumbbell/z/a/h/aerobic-dumble-pu-rubber-coating-77203-02-vk-original-imafbzefnajnbk9n.jpeg?q=70"
          }
          alt="dumble"
        />
      </Logo>
      <div className="navbar-nav ml-auto">
        <>
          <NavItem className="nav-item" to="/gyms">
            Gym
          </NavItem>
          <NavItem className="nav-item" to="/classes">
            Classes
          </NavItem>
          <NavItem className="nav-item" to="/classestypes">
            Classes Types
          </NavItem>
          <NavItem className="nav-item" to="/sessions">
            Sessions
          </NavItem>
        </>

        {user ? (
          <NavItem className="nav-item" to="/">
            <h5>Hello {user.username}</h5>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </NavItem>
        ) : (
          <>
            <NavItem className="nav-item" to="/signin">
              SignIn
            </NavItem>
            <NavItem className="nav-item" to="/signup">
              SignUp
            </NavItem>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
