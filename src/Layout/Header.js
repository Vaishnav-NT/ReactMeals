import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import headerBG from "../Assets/headerBG.jpg";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton showCart={props.onShowCart} />
            </header>
            <div>
                <img
                    className={classes["main-image"]}
                    src={headerBG}
                    alt=" table filled with delicious meals"
                />
            </div>
        </Fragment>
    );
};

export default Header;
