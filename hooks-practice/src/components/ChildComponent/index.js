import React, { useState } from 'react'

const ChildComponent = ({ title, setTitle }) => {
    return (
        <div>{title} from child
            <div><button onClick={() => {
                setTitle('CHANGED FROM CHILD');
            }}>Change title</button></div></div>
    )
}

export default ChildComponent;