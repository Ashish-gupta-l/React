import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid}=useParams();
    return (
        <>
        User:{userid}
        </>
    )
}

export default User
