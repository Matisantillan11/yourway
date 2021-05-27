import Hamburguer from '../components/Hamburguer'

//styles
import '../assets/Header.scss'
const Header = () => {
    return (
        <>
        <header>
            <Hamburguer />
            <div className="header__logo">
                <p>Your Way</p>
            </div>

            <i className="fas fa-shopping-cart 3x"></i>
        </header>
        </>
    )
}

export default Header;