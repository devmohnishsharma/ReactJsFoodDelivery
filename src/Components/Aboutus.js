import React from 'react'
import Offer from "../images/offercard.png"


const Aboutus = () => {
    return (
        <main>
                <section className="section-promotions">
                    <div className="left-side-promotion">
                        <div className="text-box-offer">
                        <p className="main-offer-h">Special <br /> Delicious </p>
                        <p className="sub-offer-h">Mexican Pizza Tastes Better</p>
                        <a href="#" className="promotion-cta"> Order Now</a>
                        </div>
                        <img src={Offer} alt="" className="offer-img" />
                    </div>
                    <div className="right-side-promotion">
                        <div className="right right-upper">

                            <p className="right-u-h"> Enjoy our Delicious Item</p>
                            <a href="#" className="promotion-cta right-u"> Order Now</a>

                        </div>
                        <div className="right right-lower">
                        <p className="right-l-h"> Fast delivery</p>
                            <a href="#" className="promotion-cta right-l"> Order Now</a>

                        </div>
                    </div>
                </section>
            </main>
    )
}

export default Aboutus
