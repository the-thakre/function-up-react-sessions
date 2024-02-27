import React, { useState } from 'react'
import ChildComponent from '../ChildComponent'

const ParentComponent = (props) => {

    return (
        <div>
            <div>{props.title} from parent</div>
            <button onClick={() => {
                props.setTitle('CHANGED TITLE FROM PARENT');
            }}>Change title</button>
            <div><ChildComponent title={props.title} setTitle={props.setTitle} /></div>
        </div>
    )
}

export default ParentComponent