import { Link } from "react-router-dom";
import { ProductWrapper } from "../../styles";

const GymItem = ({ g }) => {
  return (
    <ProductWrapper className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/gyms/${g.slug}`}>
        <img
          style={{ height: "250px", width: "300px" }}
          src={g.image}
          alt={g.name}
        />
      </Link>
      <p>{g.name}</p>
    </ProductWrapper>
  );
};
export default GymItem;
