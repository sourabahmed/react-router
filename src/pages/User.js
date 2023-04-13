import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const User = () => {
    // const {userid} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    // const [searchParams, setSearchParams] = useSearchParams({});
    // setSearchParams({ name: "how" });
    // console.log(searchParams);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setSearchParams({name: name, age: age})
    }

    console.log(name)
  return (
    <div>
        this is User 
        <form onSubmit={handleOnSubmit}>
            <input 
            type="text" 
            value={name} 
            placeholder="name"
            onChange={(e) => {
                setName(e.target.value)
                }}>
            </input>
            <input 
            type="text" 
            value={age} 
            placeholder="age"
            onChange={(e) => {
                setAge(e.target.value)
                }}>
            </input>
            <button type="submit">Find User</button>
        </form>
        <h2>{searchParams.get("name")}</h2>
        <h2>{searchParams.get("age")}</h2>
    </div>
  )
}

export default User