import '../assets/Banner.scss';

const Banner = ({ image, category }) =>{
    return(
        <>
            <div className="banner">
                <img src={image} alt="" />
                <div className="banner_category">
                    <p>{category}</p>
                </div>
            </div>
        </>
    )
}

export default Banner;