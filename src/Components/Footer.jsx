import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="authortext">
        <h3 className="authortitle">
          From the <span>Author</span>
        </h3>
        <p className="authorblurb">
          If you enjoy dark humor, ghoulish adventure, and flawed heroes, you
          will love the enthralling and bloody works of Stephen Mills
        </p>
        <p className="authorblurb">
          For all news, follow the author's social media on{" "}
          <a
            href="https://www.instagram.com/Stephen.mills.writes/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>{" "}
          and on{" "}
          <a
            href="https://www.facebook.com/pursuitofmayhem"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </p>
        <p className="authorblurb">
          If you enjoy reading indie books, check out{" "}
          <a
            className="copyrightA"
            href="https://indiebookvault.com/"
            target="_blank"
            rel="noreferrer"
          >
            Indie Book Vault
          </a>{" "}
          to find other great authors like Stephen Mills
        </p>
      </div>
    </>
  );
}

export default Footer;
