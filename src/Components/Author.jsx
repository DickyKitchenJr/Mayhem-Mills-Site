import { Parallax } from "react-parallax";
import HeadShot from "../Images/StephenHeadShot.webp";
import BooksBackground from "../Images/booksbackground.webp";
import "./Author.css";

const Author = () => (
  <Parallax
    className="authorWriteUp"
    contentClassName="author"
    blur={2}
    bgImage={BooksBackground}
    bgImageAlt="random books"
    strength={500}
  >
    <figure>
      <img className="headshot" src={HeadShot} alt="author head shot" />
      <figcaption className="authorBio">
        <p className="authorName">
          STEPHEN<span>MILLS</span>
        </p>
        A soggy native of Washington State, Stephen Mills escaped as soon as he
        came to his senses by joining the U.S. Navy. Many adventures ensued,
        some of which Stephen remembers fondly, and after tricking an amazing
        woman into marrying him he left the Naval Service. An undiagnosed yet
        temporary bout of mild insanity ensued in which Stephen convinced his
        wife to move back home to Washington. Realizing their mistake, they then
        found themselves in the small burg of Monument, Colorado...unfortunately
        Colorado is cold and snowy, so after braving the Rocky Mountains for
        almost a decade, they decided to enjoy the hellish heat of Phoenix
        before finally settling near Nashville, Tennessee. Stephen's most
        enjoyable hobbies are also those that are decidedly antisocial, such as
        hiking and fishing. <br />
        <br />
        Thankfully, being an author isn't a team sport, so now you can enjoy his
        unique brand of dark humor and gory adventure.
      </figcaption>
    </figure>
  </Parallax>
);

export default Author;
