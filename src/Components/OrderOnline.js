import React from 'react'
import OrderOnlineImg from "../images/orderOnline.png"

const OrderOnline = () => {
    return (
        <main>
            <section className="section-hero">
                <div className="orderOnline">
                    <div className="hero-text-box text-orderOnline">
                        <h2>DINE IN OR TAKE AWAY</h2>
                        <h1 className="heading-primary">
                            Get Your Order 24/7 Right At Your Doorsteps
                        </h1>
                        <p className="hero-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae repudiandae exercitationem temporibus, aliquam ab quisquam eligendi asperiores quas quidem sunt autem consequatur.
                        </p>
                        <a href="#" className="btn margin-right-sm"
                        >Order Food</a
                        >
                    </div>
                    <div class="hero-img-box">
                        <img
                            src={OrderOnlineImg}
                            className="hero-img"
                            alt="Woman enjoying food, meals in storage container, and food bowls on a table"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default OrderOnline
