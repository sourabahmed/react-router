import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { blogsData } from '../data';

const Blog = () => {
    const {title} = useParams();
    const[ bodyData, setBodyData] = useState("");

    useEffect(() => {
        const blogData = blogsData.filter((blog) => blog.title === title);
        setBodyData(blogData[0].body)
    },[])

    const linkStyle = {
        backgroundColor: "black", 
        color: "white", 
        padding: "10px 20px", 
        textDecoration: "none", 
        borderRadius: "5px"
    }

  return (
    <article>
        <h1>{title}</h1>
        <p>{bodyData}</p>
        <Link to="/blogs" style={linkStyle}>Blogs</Link>
    </article>
  )
}

export default Blog