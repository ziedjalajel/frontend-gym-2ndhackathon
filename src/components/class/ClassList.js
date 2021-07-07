import ClassItem from "./ClassItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ClassList = (props) => {
  const classes = props.classes;
  const gymClassList = classes.map((c) => <ClassItem c={c} key={c.id} />);
  return (
    <>
      <div className="container">{gymClassList}</div>
    </>
  );
};
export default ClassList;
