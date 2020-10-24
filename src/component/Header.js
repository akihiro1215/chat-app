import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <h1>Chat App</h1>
            <ul>
                <Link to='/'>Room</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signUp'>Signup</Link>
            </ul>
        </header>
    )
}

export default Header
