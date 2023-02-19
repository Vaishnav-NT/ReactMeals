import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import headerBG from "../Assets/headerBG.jpg";

const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
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
