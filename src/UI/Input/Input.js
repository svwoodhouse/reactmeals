import style from './Input.module.css'

const Input = (props) => {
    return (
        <div className={style.input}>
            <label for={props.id}>{props.label}</label>
            <input {...props.input}/>
        </div>
    )
}

export default Input