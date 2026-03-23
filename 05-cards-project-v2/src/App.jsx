import React from 'react'
import Card from './components/Card'

const App = () => {
   const hotels = [
  {
    id: 1,
    title: "Luxury Hotel",
    location: "Kathmandu",
    price: 120,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
  },

  {
    id: 3,
    title: "Mountain View",
    location: "Pokhara",
    price: 90,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  {
    id: 4,
    title: "City Apartment",
    location: "Delhi",
    price: 70,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
  },
  {
    id: 5,
    title: "Forest Retreat",
    location: "Chitwan",
    price: 110,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
  }
]
  return (
<div className="parent">
  {hotels.map((item) => (
    <Card key={item.id} {...item} />
  ))}
</div>
  )
}

export default App
