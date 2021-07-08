import { Link } from "react-router-dom";
import { ProductWrapper } from "../../styles";

const SessionItem = ({ s }) => {
  return (
    <ProductWrapper className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/sessions/${s.slug}`}>
        <p>{s.name}</p>
      </Link>
      <p>{s.capacity}</p>
      <p>{s.time}</p>
    </ProductWrapper>
  );
};
export default SessionItem;
