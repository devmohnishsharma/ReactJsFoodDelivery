import React from 'react'
import FullMenuHeader from '../Components/FullMenuHeader'
import Header from '../Components/Header'
import MainMenuPart from "../Components/MainMenuPart"
import Footer from "../Components/Footer"

const CompleteMenu = () => {
    return (
        <div>
            <Header />
            <FullMenuHeader />
            <MainMenuPart />
            <Footer />
        </div>
    )
}

export default CompleteMenu
