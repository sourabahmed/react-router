import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import Navigation from './pages/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Error from './pages/Error';
import Blog from './pages/Blog';
import User from './pages/User';
import AddBlog from './pages/AddBlog';
import { useState } from 'react';
import Protected from './pages/Protected';

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  // const handleLogedIn = () => {

  // }
  return (
    <BrowserRouter>
      <Navigation isLogedIn={isLogedIn}/>
      {isLogedIn? <button onClick={() => setIsLogedIn(!isLogedIn)}>LogIn</button>: <button onClick={() => setIsLogedIn(!isLogedIn)}>LogOut</button>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/addblog" element={
        <Protected isLogedIn={isLogedIn}>
          <AddBlog />
        </Protected>} />
        <Route path="/blogs/:title" element={<Blog />} />
        <Route path="user/*" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Navigation />
    //   <h1>Welcome to react router</h1>
    // </div>
  );
}

export default App;
