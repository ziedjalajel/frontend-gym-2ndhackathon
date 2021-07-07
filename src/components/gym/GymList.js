import GymItem from "./GymItem";
import { Link } from "react-router-dom";

const GymList = ({ gym }) => {
  const gymList = gym.map((g) => <GymItem g={g} key={g.id} />);
  return (
    <>
      <div className="container">{gymList}</div>
      <div className="container">
        <Link to="/newgym">
          <button>Create Gym</button>
        </Link>
      </div>
    </>
  );
};
export default GymList;
