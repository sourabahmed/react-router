import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>
            Contact page
        </h1>
        <p>
            This is contact page
        </p>
        <button onClick={() => navigate("/")}>Got to Home</button>
    </div>
  )
}

export default Contact