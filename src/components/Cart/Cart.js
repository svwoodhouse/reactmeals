import styles from './Cart.module.css'
import Modal from '../../UI/Modal/Modal'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    return (
        <Modal>                
            <div className={styles["cart-items"]}>
            <CartItem 
                name="Sushi"
                price={22.10}
                amount={2}/>
            </div>
            <div className={styles.total}>
                <h3>Total Amount</h3>
                <h3 >$88.99</h3>
            </div>
            <div className={styles.actions}>
                <button>Close</button>
                <button>Order</button>
            </div>
        </Modal>
    )
}

export default Cart