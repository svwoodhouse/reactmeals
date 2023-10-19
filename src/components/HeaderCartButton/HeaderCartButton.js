import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'
import Cart from '../Cart/Cart'
import React, {useState} from 'react';

const HeaderCartButton = () => {
    const [renderModal, setRenderModal] = useState(false)
    const clickHandler = () => {
        setRenderModal((prevState)=> !prevState)
    }
    return (
        <div>
            <button className={styles.button} onClick={clickHandler}>
                <CartIcon className={styles.icon}/>
                Your Cart
                <div className={styles.badge}>0</div>
            </button>
            {renderModal && <Cart/>}
        </div>
    )
}

export default HeaderCartButton