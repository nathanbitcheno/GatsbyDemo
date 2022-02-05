import React from 'react'
import { error } from '../components/layout.module.css'

function TextError(props) {
    return (
        <div className={error}>
            {props.children}
        </div>
    )
}

export default TextError