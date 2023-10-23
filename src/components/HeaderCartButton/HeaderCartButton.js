import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'
import Cart from '../Cart/Cart'
import React, {useState, useContext} from 'react';
import MealsContext from '../../store/MealsContext';

const HeaderCartButton = () => {
    const ctx = useContext(MealsContext);
    const [renderModal, setRenderModal] = useState(false)
    const clickHandler = () => {
        setRenderModal((prevState)=> !prevState)
    }
    return (
        <div>
            <button className={styles.button} onClick={clickHandler}>
                <CartIcon className={styles.icon}/>
                Your Cart
                <div className={styles.badge}>{ctx.itemsTotal}</div>
            </button>
            {renderModal && <Cart closeButtonHandler={clickHandler}/>}
        </div>
    )
}

export default HeaderCartButton