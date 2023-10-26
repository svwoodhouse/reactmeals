import style from './Input.module.css'
import React from 'react'

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={style.input}>
            <label htmlFor={props.id}>{props.label}</label>
            <input ref={ref} {...props.input}/>
        </div>
    )
})

export default Input