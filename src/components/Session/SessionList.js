import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import SessionItem from "./SessionItem";
import { ListWrapper } from "../../styles";

const SessionList = (props) => {
  const sessions = props.sessions;
  const sessionList = sessions.map((s) => <SessionItem s={s} key={s.id} />);
  return (
    <>
      <ListWrapper className="row">{sessionList}</ListWrapper>
    </>
  );
};
export default SessionList;
