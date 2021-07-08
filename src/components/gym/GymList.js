import GymItem from "./GymItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ListWrapper, Title } from "../../styles";

const GymList = ({ gym }) => {
  const user = useSelector((state) => state.auth.user);
  // const isAdmin = useSelector((state) => state.gyms.isAdmin);

  const gymList = gym.map((g) => <GymItem g={g} key={g.id} />);
  // console.log(user.isAdmin);
  return (
    <>
      <ListWrapper className="row">{gymList}</ListWrapper>
      <div>
        {user && user.isAdmin ? (
          <Title>
            <Link to="/newgym">
              <button type="button" className="btn btn-outline-info">
                Create Gym {user.isAdmin}
              </button>
            </Link>
          </Title>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
export default GymList;
