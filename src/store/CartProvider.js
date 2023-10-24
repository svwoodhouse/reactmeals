import MealsContext from "./MealsContext";
import { useReducer } from 'react'

const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item) 
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState
}

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)


    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD', item: item})
    }
    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: 'REMOVE', item: id})

    }

    const cartContext = {
        items: cartState.items,
        itemsTotal: cartState.totalAmount, 
        addItem : addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <MealsContext.Provider value={cartContext}>
        {props.children}
    </MealsContext.Provider>
}

export default CartProvider