import React from 'react';
import Cookies from 'js-cookie';

const Cookie = () => {
    // Set a cookie
    const setCookie = () => {
        Cookies.set('exampleCookie', 'cookieValue', { expires: 1 }); // Expires in 1 days
    };

    // Get a cookie
    const getCookie = () => {
        const cookieValue = Cookies.get('exampleCookie');
        console.log('Cookie Value:', cookieValue);
    };

    // cookie > sessionstorage > localStoarage   -> speed of execution.

    //' eyJjYyI6eyJ0dGwiOjE3MDk3ODY4MDIsInZhbCI6IlUyRnRaVk5wZEdVOVRHRjRPdz09In0sImRkdGMiOnsidHRsIjoxNzA5Nzg2ODAyLCJ2YWwiOiIxIn19'

    // Remove a cookie
    const removeCookie = () => {
        Cookies.remove('exampleCookie');
    };

    return (
        <div>
            <h1>Cookie Example</h1>
            <button onClick={setCookie}>Set Cookie</button>
            <button onClick={getCookie}>Get Cookie</button>
            <button onClick={removeCookie}>Remove Cookie</button>
        </div>
    );
};

export default Cookie;
