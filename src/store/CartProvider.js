import MealsContext from "./MealsContext";

const CartProvider = props => {
    return <MealsContext.Provider>
        {props.childrem}
    </MealsContext.Provider>
}

export default CartProvider