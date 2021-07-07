import { Link } from "react-router-dom";
import TypesItem from "./TypesItem";

const TypesList = ({ classType }) => {
  const typeList = classType.map((t) => <TypesItem t={t} key={t.id} />);
  return <div className="container">{typeList}</div>;
};
export default TypesList;
