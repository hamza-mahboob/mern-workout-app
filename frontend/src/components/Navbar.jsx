import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <Link to='/'>
                        <h1>Workout buddy</h1>
                    </Link>
                    <nav>
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>Signup</Link>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar
