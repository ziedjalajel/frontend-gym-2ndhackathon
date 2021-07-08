import { Link } from "react-router-dom";

const SessionItem = ({ s }) => {
  return (
    <div className="container">
      <Link to={`/sessions/${s.slug}`}>
        <p>{s.name}</p>
      </Link>
      <p>{s.capacity}</p>
      <p>{s.time}</p>
    </div>
  );
};
export default SessionItem;
