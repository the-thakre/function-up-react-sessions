import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Students = () => {
    // const params = useParams();
    const [urlParams, setUrlParams] = useState();

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(queryParams.entries());
        setUrlParams(params);
    }, [])

    // no dependencies
    // [] empty dependencies
    // [dep]  dependencies

    return (
        <div>Students
            {/* {params && params.studentId} */}
            {urlParams && Object.keys(urlParams).map(item => <div>{item} : {urlParams[item]}</div>)}
        </div>
    )
}

export default Students