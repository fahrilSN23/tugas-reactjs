import React from 'react';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="home-banner-container">
        <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
            <h1 className="primary-heading">
                Kontak Kami
            </h1>
            <p className="primary-text">Informasi lebih lanjut hubungi kami, dengan mengklik tombol di bawah ini.</p>
            <button className="secondary-button">
                Call Now <FiArrowRight />
            </button>
        </div>
        <div className="home-image-section">
            <img src={BannerImage} alt="" />
        </div>
    </div>
  )
}

export default Contact