import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";

const SessionDetail = () => {
  const { sessionSlug } = useParams();
  const session = useSelector((state) =>
    state.sessions.sessions.find((s) => s.slug === sessionSlug)
  );
  if (!session) return <Redirect to="sessions" />;
  return (
    <div className="container">
      <div className="row">
        <h2>{session.name}</h2>
        <p>{session.capacity}</p>
        <p>{session.time}</p>
      </div>
    </div>
  );
};
export default SessionDetail;
