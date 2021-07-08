import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="container">
      <div className="row">
        {user && (user.isAdmin || user.userId == 1 || user.userId == 2) ? (
          <Link to="/users">
            <button type="button" className="btn btn-outline-success">
              Coaches
            </button>
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div className="row">
        <img
          src="https://vidafitness.com/wp-content/uploads/2020/09/book-vida.jpg"
          alt="gym"
        />
      </div>
    </div>
  );
};
export default Home;
