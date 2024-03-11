import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import ColorContext from '../ColorContext';

const ShowProfile = () => {
    const { user, updateuser } = useContext(UserContext);
    const color = useContext(ColorContext);
    return (
        <div style={{ padding: '30px', backgroundColor: color }}>SHOW PROFILE : {user}</div>
    )
}

export default ShowProfile;