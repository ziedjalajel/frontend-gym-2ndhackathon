import GymItem from "./GymItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const GymList = ({ gym }) => {
  const user = useSelector((state) => state.auth.user);

  const gymList = gym.map((g) => <GymItem g={g} key={g.id} />);
  return (
    <>
      <div className="container">{gymList}</div>
      <div className="container">
        {user && (
          <Link to="/newgym">
            <button>Create Gym</button>
          </Link>
        )}
      </div>
    </>
  );
};
export default GymList;
