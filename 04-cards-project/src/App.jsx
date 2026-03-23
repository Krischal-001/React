import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">

      <Card 
        title="Luxury Hotel"
        location="Kathmandu, Nepal"
        price="120"
        rating="4.8"
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945"
      />

      <Card 
        title="Beach Resort"
        location="Goa, India"
        price="150"
        rating="4.7"
        image="https://images.unsplash.com/photo-1501117716987-c8e1ecb2108d"
      />

      <Card 
        title="Mountain View"
        location="Pokhara, Nepal"
        price="90"
        rating="4.6"
        image="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
      />

      <Card 
        title="City Apartment"
        location="Delhi, India"
        price="70"
        rating="4.3"
        image="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
      />

    </div>
  )
}

export default App