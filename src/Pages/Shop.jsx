import { ProductBrowser } from "@ecwid/nextjs-ecwid-plugin";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./Shop.css"

const house = <FontAwesomeIcon icon={faHouse} />;

function Shop() {
  return (
    <>
      <h1 className="shop-hero">
        <Link to={"/"} className="house">{house}</Link>
        <div className="logo">
          MAYHEM<span>MILLS</span>
        </div>
      </h1>
      <ProductBrowser storeId="99936715" />
    </>
  );
}

export default Shop;