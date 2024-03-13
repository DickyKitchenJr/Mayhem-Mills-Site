import { Parallax } from "react-parallax";
import Book3 from "../Images/Book3Nava.webp";
import Nava from "../Images/Nava.webp";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Books.css";

const cart = <FontAwesomeIcon icon={faCartShopping} />;

const BookThree = () => (
  <Parallax
    contentClassName="books"
    blur={0}
    bgImage={Nava}
    bgImageAlt="bones on the ground"
    strength={500}
    bgClassName="bones"
  >
    <div className="book-content">
      <p className="bookp">
        "A stunning conclusion to the Vampire's Vault series!"
      </p>
      <img className="bookcover" src={Book3} alt="Nava book cover" />
    </div>
    <h3 className="booktitle">
      Na<span>vă</span>
    </h3>
    <p className="bookblurb">
      <span className="boldme">
        Malthus has returned, and the demon is determined to shred the Widow’s
        Veil that separates Earth and Hell. Only Elena stands in his way…though
        she has another desperate battle to fight.
      </span>
      <br />
      <br />
      Consumed with an ancient and malevolent spirit, Elena is locked in a
      battle for her very soul. Win, and she may grow powerful enough to defeat
      Malthus. Lose, a ring of temples that hem in the dark magic will fall…and
      the Devil’s Cohort will be free to ravage the Earth.
      <br />
      <br />
      Malthus is racing to find the child and so fulfill his destiny: sacrifice
      her on the altar that lies within the Vampire’s Vault and welcome his
      children to Earth.
      <br />
      <br />
      Yet Malthus did not count on the return of his vengeful son, newly risen
      from the dead…
      <br />
      <br />
      <span className="boldme">
        Get the explosive finale to the Vampire's Vault series and experience
        the agony, triumphs, and diabolical twists that only Stephen Mills can
        dream up.
      </span>
      <br />
      <br />
    </p>
    <Link to={"/shop"}>
      <button className="buy-now">{cart} Buy Direct</button>
    </Link>
    <br />
    <br />
    <a
      href="https://mybook.to/6suezB"
      target="_blank"
      rel="noreferrer"
      className="buy-link"
    >
      Also Available Here
    </a>
  </Parallax>
);

export default BookThree;
