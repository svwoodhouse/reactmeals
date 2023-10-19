import styles from './AvailableMeals.module.css'
import DUMMY_MEALS from './dummy-meals'
import Card from '../../UI/Card/Card'
import MealItem from '../MealItem/MealItem'
const AvailableMeals = () => {
    return (
        <div className={styles.meals}>
            <Card>
                <ul>
                    {DUMMY_MEALS.map((meal) => (
                        <li key={meal.id}>
                            <MealItem 
                                name={meal.name} 
                                description={meal.description}
                                price={meal.price} />
                        </li>
                    ))}
                </ul>
            </Card>
        </div>
    )
}

export default AvailableMeals