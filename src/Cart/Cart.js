import { useContext } from "react";
import CardContext from "../Store/card-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
    const ctx = useContext(CardContext);

    const cartItemAddHandler = (item) => {
        ctx.addItem({ ...item, amount: 1 });
    };

    const cartItemRemoveHandler = (id) => {
        ctx.removeItem(id);
    };

    const hasItems = ctx.items.length > 0;

    const cartItems = (
        <ul className={classes["cart-items"]}>
            {ctx.items.map((item) => {
                return (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        amount={item.amount}
                        onAdd={cartItemAddHandler.bind(null, item)}
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    />
                );
            })}
        </ul>
    );

    const placeOrder = () => {
        console.log("Order successfully placed");
    };

    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;

    return (
        <Modal hideCart={props.onHideCart}>
            {cartItems}
            <div>
                <span className={classes.total}>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes["button--alt"]}
                    onClick={props.onHideCart}
                >
                    Close
                </button>
                {hasItems && (
                    <button className={classes.button} onClick={placeOrder}>
                        Order
                    </button>
                )}
            </div>
        </Modal>
    );
};

export default Cart;
