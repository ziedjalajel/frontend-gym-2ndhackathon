import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { getClassById } from "../../store/utils";
import { Link } from "react-router-dom";
import ClassList from "../class/ClassList";
import { DetailWrapper } from "../../styles";

//const shops = useSelector((state) => state.shops.shops);

// const allProducts = useSelector(
//     (state) => state.products.products
//   );
//   const { shopSlug } = useParams();
//   const shop = shops.find(
//     (_shop) => _shop.slug === shopSlug
//   );

//   if (!shop) {
//     return <Redirect to="/shops" />;
//   }
//   let products = [];
//   if (shop.products) {
//     products = allProducts.filter((_product) => _product.shopId === shop.id)

//   }
const TypesDetail = () => {
  const user = useSelector((state) => state.auth.user);
  const allClasses = useSelector((state) => state.classes.classes);
  const { tSlug } = useParams();
  const classType = useSelector((state) =>
    state.types.types.find((classType) => classType.slug === tSlug)
  );
  if (!classType) return <Redirect to="/classestypes" />;
  //   let classes = [];
  //   if (classType.classes) {
  //     classes = allClasses.filter((_class) => _class.classesId === classes.id);
  //   }

  //   const listOfClasses = classType?.classes?.map((c) =>
  //     getClassById(c.id, classes)
  //   );
  let listOfClasses = allClasses.filter((c) => c.classTypeId === classType.id);

  return (
    <div className="row">
      <div className="container">
        <DetailWrapper className="col-12">
          <h2>{classType.name}</h2>
          {user && (user.isAdmin || user.userId == 1) ? (
            <Link to={`/classestypes/${classType.id}/classes/new`}>
              <button className="btn btn-outline-info">Create Class</button>
            </Link>
          ) : (
            <></>
          )}
        </DetailWrapper>
      </div>
      <div className="col-12">
        <ClassList classes={listOfClasses} />
      </div>
    </div>
  );
};
export default TypesDetail;
