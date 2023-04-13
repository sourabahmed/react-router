import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { blogsData } from '../data';

const Blog = () => {
    const {title} = useParams();
    const location = useLocation();
    console.log(location)

    // const[ bodyData, setBodyData] = useState("");
    // useEffect(() => {
    //     const blogData = blogsData.filter((blog) => blog.title === title);
    //     setBodyData(blogData[0].body);
    // },[])

    const linkStyle = {
        backgroundColor: "black", 
        color: "white", 
        padding: "10px 20px", 
        textDecoration: "none", 
        borderRadius: "5px",
        display: "inline-block"
    }

  return (
    <article>
        <h1>{location.state.title}</h1>
        <p>{location.state.body.slice(0, 1000)}</p>
        <p>{location.state.body.slice(0, 5000)}</p>
        <Link to="/blogs" style={linkStyle}>Blogs</Link>
    </article>
  )
}

export default Blog