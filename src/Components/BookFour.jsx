import { Parallax } from "react-parallax";
import Book4 from "../Images/IslemanBook.webp";
import Isleman from "../Images/Isleman.webp";
import "./Books.css";

const BookFour = () => (
  <Parallax
    contentClassName="books"
    blur={1}
    bgImage={Isleman}
    bgImageAlt="mountain backdrop"
    strength={500}
    bgClassName="mountains"
  >
    <div className="book-content">
      <p className="bookp">
        "Fresh and gripping...a Scotland you haven't experienced before..."
      </p>
      <img className="bookcover" src={Book4} alt="Isleman book cover" />
    </div>
    <h3 className="booktitle">Isleman: A Novel of Scotland</h3>
    <p className="bookblurb">
      The King of Scots is dead and restless clans have risen, their thirst for
      power and vengeance threatening to ignite an inferno that will consume the
      Kingdom of Scotland. Thomas Skene, banished to the wilds of Scotland, grew
      up without family nor home. Now his only friend has been summoned back to
      the Isle of Skye with Thomas in tow, but the secret he carries will not
      stay a secret for long.
      <br />
      <br />
      Pursued by enemies, hunted by assassins, and caught up in the cunning game
      of an empty throne, Nial and Thomas are forced to navigate the bloody
      waters of clan politics before the kingdom itself explodes into warfare
      and rebellion.
      <br />
      <br />
      Get Isleman and find yourself transported to the perilous and intoxicating
      Scottish Highlands of the sixteenth century.
      <br />
      <br />
      Coming Soon!
    </p>
  </Parallax>
);

export default BookFour;
