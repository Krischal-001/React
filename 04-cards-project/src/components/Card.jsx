import React from 'react'

const Card = ({ title, location, price, rating, image }) => {
  return (
    <div className="card">
      <img className="card-img" src={image} alt={title} />

      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-location">{location}</p>

        <div className="card-row">
          <span className="card-rating">⭐ {rating}</span>
          <span className="card-price">${price}/night</span>
        </div>

        <button className="card-btn">Book Now</button>
      </div>
    </div>
  )
}

export default Card