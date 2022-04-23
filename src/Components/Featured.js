import React from 'react'
import "../Styles/styles.css";
import Featured1 from "../images/featured1.png"
import Featured2 from "../images/featured2.png"
import Featured3 from "../images/featured3.png"
import Featured4 from "../images/featured4.png.png"
import Featured5 from "../images/featured5.png"
import Featured7 from "../images/featured7.png"


const Featured = () => {
    return (
        <section class="section-featured">
            <div class="container">
                <h2 class="heading-featured-in">As featured in</h2>
                <div class="logos">
                    <img src={Featured2} alt="Techcrunch logo" />
                    <img
                        src={Featured3}
                        alt="Business Insider logo"
                    />
                    <img
                        src={Featured1}
                        alt="The New York Times logo"
                    />
                    <img src={Featured4} alt="Forbes logo" />
                    <img src={Featured7} alt="USA Today logo" />
                </div>
            </div>
        </section>
    )
}

export default Featured
