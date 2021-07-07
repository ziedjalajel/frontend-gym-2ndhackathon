import { Link } from "react-router-dom";

const TypesItem = ({ t }) => {
  return (
    <div className="container">
      <Link to={`/classestypes/${t.slug}`}>
        <h3>{t.name}</h3>
      </Link>
    </div>
  );
};
export default TypesItem;
