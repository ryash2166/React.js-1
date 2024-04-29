import React from 'react'
import { Link ,  NavLink } from 'react-router-dom'
import { UseAuth } from '../Pages/Auth'
const Navbar = () => {


    const navStyle = ({isActive}) => {
        return{
            color:isActive ? "white" : "black"
        }
    }

    const Auth = UseAuth()

    return (
        <div className=''>
            <header>
                <div className="header_logo">
                    <Link to="/">
                        <img className="logo" src="https://i.pinimg.com/736x/33/71/ab/3371abca457826b9482d208bd25a4125.jpg" alt="" />
                    </Link>
                </div>
                <nav className="nav-links">
                    <ul>
                        <li><NavLink style={navStyle} to="/">Home</NavLink></li>
                        <li><NavLink style={navStyle} to="aboutus">AboutUs</NavLink></li>
                        <li><NavLink style={navStyle} to="contact">ContactUs</NavLink></li>
                        <li><NavLink style={navStyle} to="shop">Shop</NavLink></li>
                        <li><NavLink style={navStyle} to="blog">Blog</NavLink></li>
                        <li><NavLink style={navStyle} to="product">Product</NavLink></li>
                        <li><NavLink style={navStyle} to="user">User</NavLink></li>
                        <li><NavLink style={navStyle} to="Profile">Profile</NavLink></li>
                        {
                            !Auth.user && <li><NavLink style={navStyle} to="Login">Login</NavLink></li>
                        }
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar