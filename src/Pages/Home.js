import React from 'react'
import Hero from "../Components/Hero"
import Aboutus from '../Components/Aboutus'
import Featured from '../Components/Featured'
import OrderOnline from '../Components/OrderOnline'
import FoodApp from '../Components/FoodApp'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'
import Menu from '../Components/Menu'
import Header from "../Components/Header"

const Home = () => {
    return (
        <div>
            <Header/>
            <Hero />
            <Featured />
            <Menu />
            <OrderOnline />
            <Testimonials />
            <FoodApp />
            <Footer />
        </div>
    )
}

export default Home
