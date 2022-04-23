import React from 'react'
import "../Styles/styles.css";
import Cart from "../images/cart.svg"
import { Link } from "react-router-dom"


const Header = () => {
    return (
        <section>
            <header class="header">
                <p className="logo">FOODY.J</p>
                <nav class="main-nav">
                    <ul class="main-nav-list">
                        <Link to="/fullmenu"><li><a className="main-nav-link" href="#">Menu</a></li> </Link>
                        <li><a className="main-nav-link" href="#">Reviews</a></li>
                        <li><a className="main-nav-link" href="#"> <img src={Cart} alt="" width="50px" height="30px" /> </a></li>
                        <li><a className="main-nav-link nav-cta" href="#">Reserve Table</a></li>
                    </ul>
                </nav>
            </header>
        </section>
    )
}

export default Header
