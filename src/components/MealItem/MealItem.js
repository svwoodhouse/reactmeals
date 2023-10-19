import styles from './MealItem.module.css'
import MealItemForm from '../MealItemForm/MealItemForm';
const MealItem = (props) => {
    return (
        <div className={styles.meal}>
        <div >
            <h3>{props.name}</h3>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.price}>{props.price}</div>
        </div>
        <MealItemForm/>
        </div>
    )
}

export default MealItem;