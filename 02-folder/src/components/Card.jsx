import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <h1 className="h111">{props.user}</h1>
        <img src="https://images.unsplash.com/photo-1773723055881-6bd2a4f85cea?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="fku" />
        <p className="p1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, doloribus.</p>
        <button className="Button1"> View Profile</button>
      </div>
    </div>
  )
}

export default Card
