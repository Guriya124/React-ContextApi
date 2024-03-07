import React, { useContext } from 'react'
import UserContext from '/src/context/UserContext.js';

export default function Profile() {
    const { user } = useContext(UserContext);

    if (!user) return <h1>please Login</h1>
    return (
        <div>Welcome {user.username}</div>
    )
}