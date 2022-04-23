import React from 'react'
import PhoneApp from "../images/phoneApp.png"
import Apple from "../images/apple.svg"
import Playstore from "../images/playstore.svg"

const FoodApp = () => {
    return (
        <main>
            <section className="section-hero">
                <div className="orderOnline">
                <div className="appImg">
                        <img
                            src={PhoneApp}
                            alt="Woman enjoying food, meals in storage container, and food bowls on a table"
                        />
                    </div>
                    <div className="hero-text-box text-orderOnline">
                        <h1 className="heading-primary">
                            Never Feel Hungry Download Our Mobile App to Enjoy Delicious Food
                        </h1>
                        <p className="hero-description">
                            Make Online Reservations, Read Food Reviews From Diners And Earn Points Towards Free Meals 
                        </p>
                        <a href="#" className="btn margin-right-sm icon"
                        >  <img src={Apple} className="iconimg"/> AppStore</a
                        >
                        <a href="#" className="btn margin-right-sm icon"
                        >  <img src={Playstore} className="iconimg"/> Playstore</a
                        >
                    </div>
                    
                </div>
            </section>
        </main>
    )
}

export default FoodApp
