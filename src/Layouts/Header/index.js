/* eslint-disable jsx-a11y/anchor-has-content */
import styles from "./index.module.scss";
import image from "../../assets/images/logo.png";
import Button from "../../Components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faHackerrank,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  const toCv = () => {
    window.open(
      "https://drive.google.com/file/d/1F9GhOlqtkLRNxqht_DCb3frKfhsZKFvu/view?usp=sharing"
    );
  };
  return (
    <>
      <div className={styles.social}>
        <a href="https://github.com/doxuanloc" target="blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.instagram.com/doxuanloc2k" target="blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/DoxuanlocJB" target="blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.facebook.com/KLT.Upin/" target="blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.hackerrank.com/locvkv1234" target="blank">
          <FontAwesomeIcon icon={faHackerrank} />
        </a>
      </div>
      <div className={styles["wrapper-header"]}>
        <div>
          <img src={image} alt="logo" />
        </div>
        <nav className={styles.nav}>
          <a href="/about">
            <span>01. </span>About
          </a>
          <a href="/experience">
            <span>02. </span>Experience
          </a>{" "}
          <a href="/work">
            <span>03. </span>Work
          </a>
          <a href="/contact">
            <span>04. </span>Contact
          </a>
          <div className={styles.gmail}>
            <>
              <Button onClick={toCv}>
                <p>Resume</p>
              </Button>
            </>
            <a href="locvkv1234@gmail.com">
              <h4>locvkv1234@gmail.com</h4>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
