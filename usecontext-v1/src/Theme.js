import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

const Theme = () => {
    const theme = useContext(ThemeContext);
    return (
        <div> this is the new theme.{theme}</div>
    )
}

export default Theme