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

  console.log(data)
  return (
    <section className="menu-section">

      <div className="menu-header">
        <h1> Our Popular Menu</h1>
        <h4>Made with Premium Ingredients</h4>
      </div>

      <div className="menu-grid">

        {data.slice(0, 6).map((singleData) => {
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
      <div className="load-menu">
        <a href="#" className="btn margin-right-sm"
        >See Full Menu ➡</a
        >
      </div>
    </section>
  )
}

export default Menu
