import "./App.css";

import { Link } from "react-router-dom";

import Routes from "./components/Routes";
import NavBar from "./components/NavBar";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { useSelector } from "react-redux";
import ClassItem from "./components/class/ClassItem";

//ToDo useselector
function App() {
  // const [query, setQuery] = useState("");
  // const classList = useSelector((state) => state.classes.classes);
  // const typeList = useSelector((state) => state.types.types);
  // const searchList = classList
  //   .filter((c) => c.name.toLowerCase().includes(query.toLowerCase()))
  //   .map((c) => <ClassItem c={c} key={c.id} />);

  return (
    <>
      {/* <SearchBar setQuery={setQuery} /> */}

      <NavBar />

      <Routes />
    </>
  );
}

export default App;
// hello aya
