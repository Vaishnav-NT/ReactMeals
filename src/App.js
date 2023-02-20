import { useState } from "react";
import Cart from "./Cart/Cart";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
    const [showCartModal, setShowCartModal] = useState(false);

    const showCartModalHandler = () => {
        setShowCartModal(true);
    };

    const hideCartModalHandler = () => {
        setShowCartModal(false);
    };

    return (
        <CartProvider>
            {showCartModal && <Cart onHideCart={hideCartModalHandler} />}
            <Header onShowCart={showCartModalHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
