import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { DetailWrapper } from "../../styles";

const ClassDetail = () => {
  const { cSlug } = useParams();
  const gymClass = useSelector((state) =>
    state.classes.classes.find((gymClass) => gymClass.slug === cSlug)
  );
  if (!gymClass) return <Redirect to="/classes" />;

  return (
    <DetailWrapper>
      <div className="row">
        <h2>{gymClass.name}</h2>
        <p>{gymClass.price} JD</p>
      </div>
    </DetailWrapper>
  );
};
export default ClassDetail;
