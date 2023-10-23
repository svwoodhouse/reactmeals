import styles from './Cart.module.css'
import Modal from '../../UI/Modal/Modal'

const Cart = (props) => {
    const cartItems = <ul className={styles["cart-items"]}>
        {
            [{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map(item => <li>{item.name}</li>)}</ul>;


    return (
        <Modal>                
            <div>
                {cartItems}
            </div>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span >$88.99</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.closeButtonHandler}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart