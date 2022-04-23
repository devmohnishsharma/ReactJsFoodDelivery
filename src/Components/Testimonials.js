import React from 'react'
import { useState, useEffect } from 'react'
import "../Styles/styles.css"
import Data from "../data/ReviewsData"
import Gallary1 from "../images/gallery/gallery-1.jpg"
import Gallary2 from "../images/gallery/gallery-2.jpg"
import Gallary3 from "../images/gallery/gallery-3.jpg"
import Gallary4 from "../images/gallery/gallery-4.jpg"
import Gallary5 from "../images/gallery/gallery-5.jpg"
import Gallary6 from "../images/gallery/gallery-6.jpg"
import Gallary7 from "../images/gallery/gallery-7.jpg"
import Gallary8 from "../images/gallery/gallery-8.jpg"
import Gallary9 from "../images/gallery/gallery-9.jpg"
import Gallary10 from "../images/gallery/gallery-10.jpg"
import Gallary11 from "../images/gallery/gallery-11.jpg"
import Gallary12 from "../images/gallery/gallery-12.jpg"
import Testimonial1 from "../images/customers/customer-1.jpg"
import Testimonial2 from "../images/customers/customer-2.jpg"
import Testimonial3 from "../images/customers/customer-3.jpg"
import Testimonial4 from "../images/customers/customer-4.jpg"





const ReviewsSlider = () => {

    return (
        <section class="section-testimonials">
            <div class="testimonials-container">
                <span class="subheading">Testimonials</span>
                <h2 class="heading-secondary">Once you try it, you can't go back</h2>

                <div class="testimonials">
                    <figure class="testimonial">
                        <img
                            class="testimonial-img"
                            alt="Photo of customer Dave Bryson"
                            src={Testimonial1}
                        />
                        <blockquote class="testimonial-text">
                            Inexpensive, healthy and great-tasting meals, without even
                            having to order manually! It feels truly magical.
                        </blockquote>
                        <p class="testimonial-name">&mdash; Dave Bryson</p>
                    </figure>

                    <figure class="testimonial">
                        <img
                            class="testimonial-img"
                            alt="Photo of customer Ben Hadley"
                            src={Testimonial2}
                        />
                        <blockquote class="testimonial-text">
                            The AI algorithm is crazy good, it chooses the right meals for
                            me every time. It's amazing not to worry about food anymore!
                        </blockquote>
                        <p class="testimonial-name">&mdash; Ben Hadley</p>
                    </figure>

                    <figure class="testimonial">
                        <img
                            class="testimonial-img"
                            alt="Photo of customer Steve Miller"
                            src={Testimonial3}
                        />
                        <blockquote class="testimonial-text">
                            Omnifood is a life saver! I just started a company, so there's
                            no time for cooking. I couldn't live without my daily meals now!
                        </blockquote>
                        <p class="testimonial-name">&mdash; Steve Miller</p>
                    </figure>

                    <figure class="testimonial">
                        <img
                            class="testimonial-img"
                            alt="Photo of customer Hannah Smith"
                            src={Testimonial4}
                        />
                        <blockquote class="testimonial-text">
                            I got Omnifood for the whole family, and it frees up so much
                            time! Plus, everything is organic and vegan and without plastic.
                        </blockquote>
                        <p class="testimonial-name">&mdash; Hannah Smith</p>
                    </figure>
                </div>
            </div>

            <div class="gallery">
                <figure class="gallery-item">
                    <img
                        src={
                            Gallary1
                        }
                        alt="Photo of beautifully
            arranged food"
                    />
                    {/* <!-- <figcaption>Caption</figcaption> --> */}
                </figure>
                <figure class="gallery-item">
                    <img
                        src={Gallary2}
                        alt="Photo of beautifully
            arranged food"
                    />
                </figure>
                <figure class="gallery-item">
                    <img
                       src={Gallary3}
                        alt="Photo of beautifully
            arranged food"
                    />
                </figure>
                <figure class="gallery-item">
                    <img
                       src={Gallary4}
                        alt="Photo of beautifully
            arranged food"
                    />
                </figure>
                <figure class="gallery-item">
                    <img
                        src={Gallary5}
                        alt="Photo of beautifully
            arranged food"
                    />
                </figure>
                <figure class="gallery-item">
                    <img
                        src={Gallary6}
                        alt="Photo of beautifully
            arranged food"
                    />
                </figure>
                <figure class="gallery-item">
                    <img
                        src={Gallary7}
                        alt="Photo of beautifully
            arranged food"
                    />
                </figure>
                <figure class="gallery-item">
                    <img
                        src={Gallary8}
                        alt="Photo of beautifully
            arranged food"
                    />
                </figure>
                <figure class="gallery-item">
                    <img
                        src={Gallary9}
                        alt="Photo of beautifully
            arranged food"
                    />
                </figure>
                <figure class="gallery-item">
                    <img
                       src={Gallary10}
                        alt="Photo of beautifully
            arranged food"
                    />
                </figure>
                <figure class="gallery-item">
                    <img
                        src={Gallary11}
                        alt="Photo of beautifully
            arranged food"
                    />
                </figure>
                <figure class="gallery-item">
                    <img
                        src={Gallary12}
                        alt="Photo of beautifully
            arranged food"
                    />
                </figure>
            </div>
        </section>
    )
}

export default ReviewsSlider
