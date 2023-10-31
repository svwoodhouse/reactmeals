import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'
import React, {useContext, useEffect, useState} from 'react';
import MealsContext from '../../store/MealsContext';

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
    const ctx = useContext(MealsContext);
    const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`
    const { items } = ctx
    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0)

    useEffect(()=>{
        if(items.length === 0){
            return
        }
        setBtnIsHighlighted(true)
        const timer = setTimeout(()=>{
            setBtnIsHighlighted(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    },[items])

    return (
        <div>
            <button className={btnClasses} onClick={props.onClick}>
                <CartIcon className={styles.icon}/>
                Your Cart
                <div className={styles.badge}>{numberOfCartItems}</div>
            </button>
        </div>
    )
}

export default HeaderCartButton