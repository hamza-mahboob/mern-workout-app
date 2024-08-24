import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, pass);
    }

    return (
        <div>
            <form className='login' onSubmit={handleSubmit}>
                <h3>Login</h3>

                <label>Email:</label>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <label>Password:</label>
                <input
                    type="passwrod"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
