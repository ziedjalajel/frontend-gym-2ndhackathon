import ClassItem from "./ClassItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import SearchBar from "../SearchBar";

const ClassList = (props) => {
  const [query, setQuery] = useState("");

  const classes = props.classes;
  const gymClassList = classes
    .filter(
      (c) => c.name.toLowerCase().includes(query.toLowerCase()) || c.price === 0
    )
    .map((c) => <ClassItem c={c} key={c.id} />);
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <div className="container">{gymClassList}</div>
    </>
  );
};
export default ClassList;
