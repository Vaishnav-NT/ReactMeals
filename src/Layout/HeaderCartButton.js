import React, { useContext, useEffect, useState } from "react";
import CardContext from "../Store/card-context";
import CartIcon from "../UI/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const [btnHighlighted, setBtnHighlighted] = useState(false);

    const ctx = useContext(CardContext);

    const { items } = ctx;

    const totalCount = items.reduce((currentTotal, item) => {
        return currentTotal + item.amount;
    }, 0);

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnHighlighted(true);

        const timer = setTimeout(() => {
            setBtnHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    const btnClasses = `${classes.button} ${
        btnHighlighted ? classes.bump : ""
    }`;

    return (
        <button className={btnClasses} onClick={props.showCart}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{totalCount}</span>
        </button>
    );
};

export default HeaderCartButton;
