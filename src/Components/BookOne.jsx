import { Parallax } from "react-parallax";
import Book1 from "../Images/Book1TDC.webp";
import TDC from "../Images/fullmoon.webp";
import "./Books.css";

const BookOne = () => (
  <Parallax
    contentClassName="books"
    blur={0}
    bgImage={TDC}
    bgImageAlt="fullmoon"
    strength={600}
    bgClassName="fullmoon"
  >
    <div className="book-content">
      <p className="bookp">
        "The Devil’s Cohort reads like a George R.R. Martin novel and hooked me
        right from the start"
      </p>
      <img
        className="bookcover"
        src={Book1}
        alt="The Devils Cohort book cover"
      />
    </div>
    <h3 className="booktitle">
      The Devil's <span>Cohort</span>
    </h3>
    <p className="bookblurb">
      <span className="boldme">
        Infected with a God-like power and stalked by undead hordes, a child is
        destined to defeat an otherworldly evil – yet malevolent forces aim to
        harness her power and unleash an ancient menace from its hellish bonds.
      </span>
      <br />
      <br />
      Elena is elated to be on the cusp of a festival marking her journey into
      womanhood, but that happiness is tainted by a powerful secret she keeps…a
      secret that is bound to a timeless and dark prophesy. Charles, the
      half-human son of vampire Cosmin the Wicked, reels from centuries of
      damnation. Condemned to live forever, he is determined to destroy his
      father and lift the curse that afflicts his soul.
      <br />
      <br />
      Together, the unlikely pair must fight to right an ancient wrong and
      protect humanity from a primeval horror, one that is older than
      civilization itself and hungers to conquer Earth. Can they triumph over an
      ancient evil and save millions of lives...or will The Devil’s Cohort be
      unleashed?
      <br />
      <br />
      <span className="boldme">
        Get The Devil’s Cohort and immerse yourself in the timeless struggle of
        good versus evil with a modern and riveting twist.
      </span>
      <br />
      <br />
      <a
        href="https://www.amazon.com/gp/product/B08XPQ76DM/ref=dbs_a_def_rwt_bibl_vppi_i0"
        target="_blank"
        rel="noreferrer"
      >
        <button className="buybutton">Buy on Amazon</button>
      </a>
    </p>
  </Parallax>
);

export default BookOne;
