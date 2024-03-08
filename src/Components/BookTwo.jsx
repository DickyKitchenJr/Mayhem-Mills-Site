import { Parallax } from "react-parallax";
import Book2 from "../Images/Book2Wanderer.webp";
import Mist from "../Images/MistFigure.webp";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Books.css";

const cart = <FontAwesomeIcon icon={faCartShopping} />;

const BookTwo = () => (
  <Parallax
    contentClassName="books"
    blur={0}
    bgImage={Mist}
    bgImageAlt="a man shrouded in mist"
    strength={600}
    bgClassName="mist"
  >
    <div className="book-content">
      <p className="bookp">
        "A Wanderer Among the Dead picks up right where The Devil's Cohort left
        off. I absolutely loved this book!"
      </p>
      <img
        className="bookcover"
        src={Book2}
        alt="A Wanderer Among The Dead book cover"
      />
    </div>
    <h3 className="booktitle">
      A Wanderer <span>Among The Dead</span>
    </h3>
    <p className="bookblurb">
      <span className="boldme">
        Cosmin has been destroyed, but after Elena’s seemingly impossible
        victory, an even greater evil has been unleashed…
      </span>
      <br />
      <br />
      Malthus has been reunited with his rebellious children in Hell’s
      wastelands, yet all he desires is to sweep across the Earth at the head of
      the Devil’s Cohort. One problem remains: the barrier between worlds is
      intact and impassable, and Malthus has no way to return to Earth. Or does
      he?
      <br />
      <br />
      After losing Charles to the malicious whims of Cosmin the Wicked, Elena
      struggles alone with her purpose and the mysterious prophecy: He who
      destroys, must be destroyed…but how? As the power within her grows, Elena
      must decide…accept her fate and embrace being humanity’s savior, or run
      from her terrifying destiny?
      <br />
      <br />
      Humanity’s last hope is alone, haunted and tortured by the power growing
      within her, and though Elena mourns for Charles, the dead do not always
      stay dead…
      <br />
      <br />
      <span className="boldme">
        Get A Wanderer Among the Dead and be transported to a world rich with
        adventure and teeming with ghouls, demons, and unlikely heroes.
      </span>
      <br />
      <br />
    </p>
    <Link to={"/shop"}>
      <button className="buy-now">{cart} Buy Now</button>
    </Link>
    <br />
    <br />
    <div className="buy-block">
      <Link to={"/shop"} className="buy-link">
        Buy Direct
      </Link>
      <a
        href="https://www.amazon.com/gp/product/B09KFX5MRJ?ref_=dbs_p_pwh_rwt_anx_cl_1&storeType=ebooks"
        target="_blank"
        rel="noreferrer"
        className="buy-link"
      >
        Buy On Amazon
      </a>
    </div>
  </Parallax>
);

export default BookTwo;
