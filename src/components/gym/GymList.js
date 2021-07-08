import GymItem from "./GymItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const GymList = ({ gym }) => {
  const user = useSelector((state) => state.auth.user);
  // const isAdmin = useSelector((state) => state.gyms.isAdmin);

  const gymList = gym.map((g) => <GymItem g={g} key={g.id} />);
  // console.log(user.isAdmin);
  return (
    <>
      <div className="container">{gymList}</div>
      <div className="container">
        {user && user.isAdmin ? (
          <Link to="/newgym">
            <button>Create Gym {user.isAdmin}</button>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
export default GymList;
