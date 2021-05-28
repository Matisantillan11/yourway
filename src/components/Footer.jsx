//styles
import '../assets/Footer.scss'
const Footer = ( {children} ) =>{
    return(
        <>
        {children}
        <footer>
            <div className="header__logo">
                <p>Your Way</p>
            </div>
            <div className="menu__items-container">
                <p>Home</p>
                <p>Products</p>
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