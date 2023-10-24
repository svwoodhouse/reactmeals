import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'
import React, {useContext} from 'react';
import MealsContext from '../../store/MealsContext';

const HeaderCartButton = (props) => {
    const ctx = useContext(MealsContext);
    const numberOfCartItems = ctx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0)
    return (
        <div>
            <button className={styles.button} onClick={props.onClick}>
                <CartIcon className={styles.icon}/>
                Your Cart
                <div className={styles.badge}>{numberOfCartItems}</div>
            </button>
        </div>
    )
}

export default HeaderCartButton