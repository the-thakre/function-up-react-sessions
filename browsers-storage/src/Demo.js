import React, { useEffect, useState } from 'react'

const Demo = ({ count }) => {
    const [isOdd, setIsOdd] = useState();

    useEffect(() => {
        setIsOdd(count % 2 != 0);
    }, [count])

    //http://localhost:3002/products/:id

    // control the re-rendere using useEffect.

    return (
        <div>
            <div>{count}</div>
            <div>Count is odd or even={isOdd ? 'ODD' : 'EVEN'}</div>
        </div>


    )
}

export default Demo