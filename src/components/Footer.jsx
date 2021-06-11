import { Link } from 'react-router-dom'
//styles
import '../assets/Footer.scss'
//logo
import logo from '../assets/images/logo.png'
const Footer = ( {children} ) =>{
    return(
        <>
        {children}
        <footer>
            <div className="header__logo">
            <Link to="/"><img src={logo}/></Link>
            </div>
            <div className="menu__items-container">
                <p><Link className="link" to="/">Home</Link></p>
                <p><Link className="link" to="/products">Products</Link></p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
            <div className="icons__container">
                <div className="icons_icon-container">
                    <a href=""><i className="fas fa-envelope"></i></a>
                </div>
                <div className="icons_icon-container">
                    <a href=""><i className="fab fa-instagram"></i></a>
                </div>
                <div className="icons_icon-container">
                    <a href=""><i className="fab fa-twitter"></i></a>
                </div>
            </div>
            

            <p>Development by @matisantillan11. Copyright © 2021</p>
        </footer>
        </>
    )
}

export default Footer;