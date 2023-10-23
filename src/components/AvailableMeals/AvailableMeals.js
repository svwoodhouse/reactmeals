import styles from './AvailableMeals.module.css'
import DUMMY_MEALS from './dummy-meals'
import Card from '../../UI/Card/Card'
import MealItem from '../MealItem/MealItem'
const AvailableMeals = () => {
    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {DUMMY_MEALS.map((meal) => (
                        <MealItem 
                            id={meal.id}
                            key={meal.id}
                            name={meal.name} 
                            description={meal.description}
                            price={meal.price} />
                    ))}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals