import Signin from "./authtications/Signin";
import Signup from "./authtications/Signup";
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
import GymList from "./gym/GymList";
import GymItem from "./gym/GymItem";
import GymCreate from "./gym/GymCreate";
import ClassList from "./class/ClassList";
import ClassDetail from "./class/ClassDetail";
import ClassCreate from "./class/ClassCreate";
import TypesList from "./types/TypesList";
import TypesDetail from "./types/TypesDetail";
import SessionList from "./Session/SessionList";
import SessionDetail from "./Session/SessionDetail";

const Routes = () => {
  const gym = useSelector((state) => state.gyms.gyms);
  const classes = useSelector((state) => state.classes.classes);
  const classType = useSelector((state) => state.types.types);
  return (
    <Switch>
      <Route path="/classestypes/:tSlug/classes/new">
        <ClassCreate />
      </Route>
      <Route path="/classes/:cSlug">
        <ClassDetail />
      </Route>
      <Route path="/classestypes/:tSlug">
        <TypesDetail />
      </Route>
      <Route path="/sessions/:sSlug">
        <SessionDetail />
      </Route>
      <Route path="/newgym">
        <GymCreate />
      </Route>
      <Route path="/sessions">
        <SessionList />
      </Route>
      <Route path="/classestypes">
        <TypesList classType={classType} />
      </Route>
      <Route path="/gyms">
        <GymList gym={gym} />
      </Route>
      <Route path="/classes">
        <ClassList classes={classes} />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </Switch>
  );
};
export default Routes;
