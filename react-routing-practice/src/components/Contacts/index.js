import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

// cmd + click
// cmd + shift + p => commnd pallete
// cmd + p  => files

const ContactUs = () => {
    // const navigate = useNavigate();
    // const location = useLocation();
    // // const params = useParams();
    // const [name, setName] = useState();

    // useEffect(() => {
    //     let queryParams = new URLSearchParams('key1=value1&key2=value2')
    //     let params = queryParams.entries();
    //     console.log('params', params.name)
    // }, [])

    // contacts/company-contact
    // contacts/ceo-contact

    return (
        <div>This is our ContactUs page.
            <button onClick={() => {
                navigate('/');
            }}>Take me to home</button>
        </div>
    )
}

export default ContactUs;