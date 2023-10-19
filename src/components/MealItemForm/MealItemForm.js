import styles from './MealItemForm.module.css'
import Input from '../../UI/Input/Input'

const MealItemForm = () => {
    return (
        <form className={styles.form}>
            <Input id='amount' label="Amount" type="number"/>
            <button type='submit'>+Add</button>
        </form>
    )
}

export default MealItemForm