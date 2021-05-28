//components
import Banner from '../components/Banner';
import Ban1 from '../assets/images/banner3.jpg'
import Ban2 from '../assets/images/banner2.jpg'
import Ban4 from '../assets/images/banner4.jpg'
import Ban5 from '../assets/images/banner5.jpg'
const Banners = () =>{
    return (
        <>
        <div className="banner__container">
            <Banner image={Ban2} category="Remeras"/>
            <Banner image={Ban1} category="Buzos"/>
            <Banner image={Ban4} category="Combos"/>
            <Banner image={Ban5} category="Personalizado"/>
        </div>
        </>
    )
}

export default Banners;