import "./Home.css";
import Header from "../Components/Header";
import Author from "../Components/Author";
import BookOne from "../Components/BookOne";
import BookTwo from "../Components/BookTwo";
import BookThree from "../Components/BookThree";
import BookFour from "../Components/BookFour";
import ContactMe from "../Components/ContactMe";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Author />
      <h2 className="spacer">BOOKS</h2>
      <BookOne />
      <BookTwo />
      <BookThree />
      <BookFour />
      <ContactMe />
      <Footer />
    </>
  );
}

export default Home;
