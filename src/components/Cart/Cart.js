import styles from './Cart.module.css'
import Modal from '../../UI/Modal/Modal'
import CartItem from '../CartItem/CartItem';
import { useContext } from 'react';
import MealsContext from '../../store/MealsContext';
const Cart = (props) => {
    const ctx = useContext(MealsContext)
    const totalAmount = `$${ctx.itemsTotal.toFixed(2)}`
    const hasItems = ctx.items.length > 0
    const cartItemRemoveHandler = id => {}
    const cartItemAddHandler = item => {
        ctx.addItem({...item, amount:1})
    }
    const cartItems = (
        <ul className={styles["cart-items"]}>
            {
                ctx.items.map(item => <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onAdd={cartItemAddHandler.bind(null, item)} onRemove={cartItemRemoveHandler.bind(null, item.id)}></CartItem>)
            }
        </ul>
    )
    
    return (
        <Modal onClose={props.onClose}>                
            <div>
                {cartItems}
            </div>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart