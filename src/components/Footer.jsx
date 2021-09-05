import { Link } from 'react-router-dom';
//styles
import '../assets/Footer.scss';
//logo
import logo from '../assets/images/logo.png';
import { IoLogoInstagram, IoMailSharp, IoLogoTwitter } from 'react-icons/io5';
const Footer = ({ children }) => {
  return (
    <>
      {children}
      <footer>
        <div className="header__logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="menu__items-container">
          <p>
            <Link className="link" to="/">
              Home
            </Link>
          </p>
          <p>
            <Link className="link" to="/products">
              Productos
            </Link>
          </p>
          <p>
            <Link className="link" to="/">
              Sobre nosotros
            </Link>
          </p>
          <p>
            <Link className="link" to="/">
              Contactanos
            </Link>
          </p>
        </div>
        <div className="icons__container">
          <a href="">
            <IoMailSharp size={25} />
          </a>

          <a
            href="https://www.instagram.com/yourway.cba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram size={25} />
          </a>

          <a href="">
            <IoLogoTwitter size={25} />
          </a>
        </div>

        <p>Development by @matisantillan11. Copyright © 2021</p>
      </footer>
    </>
  );
};

export default Footer;
