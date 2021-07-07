import { Link } from "react-router-dom";

const GymItem = ({ g }) => {
  return (
    <div className="container">
      <Link to={`/gyms/${g.slug}`}>
        <img src={g.image} alt={g.name} />
      </Link>
      <p>{g.name}</p>
    </div>
  );
};
export default GymItem;
