import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const ContactUs = () => {
    const navigate = useNavigate();
    // const location = useLocation();
    // // const params = useParams();
    // const [name, setName] = useState();

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        console.log(params);
    }, [])

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