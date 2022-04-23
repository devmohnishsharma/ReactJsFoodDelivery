import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Menu = () => {

    const baseUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s"

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setData(response.data.meals);
        });
    }, []);


    // sort array function

    const sortArray = (e,id)=>{
    }
    return (
        <section className="main-menu-part">
            <div className="menu-filters">
                <button className="filterBtn" id='lowToHigh' onClick={(e) => sortArray(e, e.target.id)}> Low To High</button>
                <button className="filterBtn" id='highToLow' onClick={(e) => sortArray(e, e.target.id)}> High To Low</button>
               <span> <input type="text" placeholder='Search Delicious Dishes' className='search-filters'/> <button className='search-button'>Seach</button></span>
            </div>
            <div className="menu-grid">

                {data.map((singleData) => {
                    const { strMealThumb, strMeal } = singleData

                    return <div className="menu-container">
                        <div className="rating">
                            <p>⭐4.9</p>
                        </div>
                        <img src={strMealThumb} alt="" />
                        <div className="menu-des">
                            <h2>{strMeal}</h2>
                            <p className="price">$34</p>
                        </div>
                        <a href="#" className='add-to-bag'
                        >Choose Option</a
                        >
                    </div>
                })}
            </div>
        </section>
    )
}

export default Menu
