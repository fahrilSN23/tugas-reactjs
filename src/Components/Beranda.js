import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Beranda = () => {
    return (
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="" />
            </div>
            <div className="home-text-section">
                <h1 className="primary-heading">
                    Your Favourite Food Delivered Hot & Fresh
                </h1>
                <p className="primary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio hic quisquam odit voluptatum nemo dolorem qui, blanditiis repudiandae perspiciatis, molestiae assumenda quis maxime neque ex sint laudantium dolorum cupiditate.</p>
                <button className="secondary-button">
                    Order Now <FiArrowRight />
                </button>
            </div>
            <div className="home-image-section">
                <img src={BannerImage} alt="" />
            </div>
        </div>
    )
}

export default Beranda