import { Link } from "react-router-dom";

const ClassItem = ({ c }) => {
  return (
    <div className="container">
      <Link to={`/classes/${c.slug}`}>
        <p>{c.name}</p>
      </Link>
      <p>{c.price}</p>
    </div>
  );
};
export default ClassItem;
