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
import SessionCreate from "./Session/SessionCreate";
import TypeCreate from "./types/TypeCreate";
import Home from "./Home";

const Routes = () => {
  const gym = useSelector((state) => state.gyms.gyms);
  const classes = useSelector((state) => state.classes.classes);
  const classType = useSelector((state) => state.types.types);
  const sessions = useSelector((state) => state.sessions.sessions);
  // TypeCreate
  return (
    <Switch>
      <Route path="/classestypes/:tSlug/classes/new">
        <ClassCreate />
      </Route>
      <Route path="/users/:sSlug/sessions/new">
        <SessionCreate />
      </Route>
      <Route path="/classestypes/new">
        <TypeCreate />
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
        <SessionList sessions={sessions} />
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
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
export default Routes;
