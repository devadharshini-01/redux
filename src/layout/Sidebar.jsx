import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";


const Sidebar = (props) => {
  return (
    <>
      <div className="list-group   ">
        <Link to="/productlist">
          {" "}
          <p
            className={`${
              props.active === "Productlist"
                ? "p-2 rounded-3  black"
                : "text-black hover"
            } p-2   hover:hover a:link`}
            onClick={() => props.setActive("Productlist")}
          >
            <Icon
              className="me-2"
              icon="material-symbols:shopping-cart"
              width="20"
              height="20"
            />
            Productlist
          </p>
        </Link>
      </div>
    </>
  );
};
export default Sidebar;
