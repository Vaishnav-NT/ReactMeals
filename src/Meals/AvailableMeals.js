import { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState();

    const mealsList = meals.map((meal) => {
        return (
            <MealItem
                key={meal.id}
                id={meal.id}
                name={meal.name}
                desc={meal.description}
                price={meal.price}
            />
        );
    });

    useEffect(() => {
        const getRespone = async () => {
            setIsLoading(true);

            const response = await fetch(
                "https://reactmeals-8ef1f-default-rtdb.firebaseio.com/meals.json"
            );

            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const data = await response.json();

            const mealsData = [];
            for (const meal in data) {
                mealsData.push({
                    key: data[meal].id,
                    id: data[meal].id,
                    name: data[meal].name,
                    desc: data[meal].description,
                    price: data[meal].price,
                });
            }

            setMeals(mealsData);
            setIsLoading(false);
        };

        getRespone().catch(() => {
            console.log("jere");
            setIsLoading(false);
            setHasError(true);
        });
    }, []);

    let content = <ul>{mealsList}</ul>;

    if (hasError) {
        content = <p>Something went wrong.</p>;
    }

    if (isLoading) {
        content = <p>Fetcing available meals...</p>;
    }

    return (
        <section className={classes.meals}>
            <Card>{content}</Card>
        </section>
    );
};

export default AvailableMeals;
