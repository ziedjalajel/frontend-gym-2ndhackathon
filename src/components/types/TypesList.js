import { Link } from "react-router-dom";
import TypesItem from "./TypesItem";
import { Title } from "../../styles";
import { useSelector } from "react-redux";

const TypesList = ({ classType }) => {
  const user = useSelector((state) => state.auth.user);

  const typeList = classType.map((t) => <TypesItem t={t} key={t.id} />);
  return (
    <>
      <Title>
        {typeList}
        <br />
        {user && (user.isAdmin || user.userId == 1) ? (
          <Link to="/classestypes/new">
            <button type="button" className="btn btn-outline-info">
              Create Type
            </button>
          </Link>
        ) : (
          <></>
        )}
      </Title>
    </>
  );
};
export default TypesList;
