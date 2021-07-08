import { Link } from "react-router-dom";
import { ProductWrapper } from "../../styles";

const ClassItem = ({ c }) => {
  return (
    <ProductWrapper className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/classes/${c.slug}`}>
        <p>{c.name}</p>
      </Link>
      <p>{c.price}</p>
    </ProductWrapper>
  );
};
export default ClassItem;
