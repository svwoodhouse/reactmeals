import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'
import React, {useContext} from 'react';
import MealsContext from '../../store/MealsContext';

const HeaderCartButton = (props) => {
    const ctx = useContext(MealsContext);
    return (
        <div>
            <button className={styles.button} onClick={props.onClick}>
                <CartIcon className={styles.icon}/>
                Your Cart
                <div className={styles.badge}>{ctx.itemsTotal}</div>
            </button>
        </div>
    )
}

export default HeaderCartButton