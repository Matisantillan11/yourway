import '../assets/Banner.scss';
const Banners = () =>{
    return (
        <>
        <div className="banner__container">
            <div className="banner">
                <div className="banner_category">
                    <p>Remeras</p>
                </div>
            </div>
            <div className="banner">
                <div className="banner_category">
                    <p>Buzos</p>
                </div>
            </div>
            <div className="banner">
                <div className="banner_category">
                    <p>Combos</p>
                </div>
            </div>
            <div className="banner">
                <div className="banner_category">
                    <p>Personalizado</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Banners;