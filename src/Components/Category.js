import React from 'react';
import { useNavigate, useParams } from "react-router-dom"
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Category = () => {
    const params = useParams();
    const navigate = useNavigate();

    const handleClik = () => {
        navigate('../home');
    }

    return (
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="" />
            </div>
            <div className="home-text-section">
                <h1 className="primary-heading">
                    Daftar Menu {params.label}
                </h1>
                <p className="primary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.</p>
                <button onClick={handleClik} className="secondary-button">
                    Back to Home <FiArrowRight />
                </button>
            </div>
            <div className="home-image-section">
                <img src={BannerImage} alt="" />
            </div>
        </div>
    )
}

export default Category