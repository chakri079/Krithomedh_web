import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';
import img5 from '../assets/kavach.jpg';
import img6 from '../assets/craft.jpg';
import img7 from '../assets/coding2023.jpg';
import videok from '../assets/digital.mp4';

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [img1, img2, img3, img5, img6, img7];
    const sliderRef = useRef(null);
    const slideWidth = 10; // Width of each slide

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval); // Clear interval on component unmount
    }, [images.length]);

    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            const transitionEnd = () => {
                if (currentIndex === images.length - 1) {
                    // Move to the first slide without animation after reaching the last slide
                    setCurrentIndex(0);
                    slider.style.transition = 'none';
                    slider.style.transform = 'translateX(0)';
                    setTimeout(() => {
                        slider.style.transition = 'transform 3s ease-in-out';
                    }, 50);
                }
            };
            slider.addEventListener('transitionend', transitionEnd);

            return () => {
                slider.removeEventListener('transitionend', transitionEnd);
            };
        }
    }, [currentIndex, images.length]);

    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            slider.style.transition = 'transform 3s ease-in-out';
            slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
        }
    }, [currentIndex, slideWidth]);

    return (
        <div className="home-container">
            <div className="content-container">
                <video className="video-background" autoPlay muted>
                    <source src={videok} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="image-slider-container">
                    <h2>Events</h2>
                    <div className="image-slider">
                        <button
                            className="slick-prev slick-arrow"
                            aria-label="Previous"
                            onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}
                        >
                            <FaArrowLeft />
                        </button>
                        <div className="slider-carousel" ref={sliderRef}>
                            {images.map((image, index) => (
                                <div className="slide" key={index}>
                                    <img src={image} alt={`Slide ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        <button
                            className="slick-next slick-arrow"
                            aria-label="Next"
                            onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
