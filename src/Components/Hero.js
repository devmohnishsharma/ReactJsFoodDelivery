import React from 'react';
import "../Styles/styles.css";
import Customer1 from "../images/customers/customer-1.jpg"
import Customer2 from "../images/customers/customer-2.jpg"
import Customer3 from "../images/customers/customer-3.jpg"
import Customer4 from "../images/customers/customer-4.jpg"
import Customer5 from "../images/customers/customer-5.jpg"
import Customer6 from "../images/customers/customer-6.jpg"
import Hero1 from "../images/heroImage.jpeg"
import Hero2 from "../images/hero1.webp"
import LogoSvg from "../images/logoSvg.svg"
import Cart from "../images/cart.svg"



const Hero = () => {
    return (
        <body>
            <main>
                <section className="section-hero">
                    <div className="hero">
                        <div className="hero-text-box">
                            <h1 className="heading-primary">
                                A healthy meal delivered to your door, every single day
                            </h1>
                            <p className="hero-description">
                                Our Job is to Fill Your Tummy with delicious food with fast and free delivery
                            </p>
                            <a href="#" className="btn margin-right-sm"
                            >Add to Bag</a
                            >
                            <a href="#" className="btn btn-search "> Search </a>
                            <div class="delivered-meals">
                                <div class="delivered-imgs">
                                    <img src={Customer1} alt="Customer photo" />
                                    <img src={Customer2} alt="Customer photo" />
                                    <img src={Customer3} alt="Customer photo" />
                                    <img src={Customer4} alt="Customer photo" />
                                    <img src={Customer5} alt="Customer photo" />
                                    <img src={Customer6} alt="Customer photo" />
                                </div>
                                <p className="delivered-text">
                                    <span>250,000+</span> meals delivered last year!
                                </p>
                            </div>
                        </div>
                        <div class="hero-img-box">
                            <img
                                src={Hero2}
                                className="hero-img"
                                alt="Woman enjoying food, meals in storage container, and food bowls on a table"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </body>
    )
}

export default Hero
