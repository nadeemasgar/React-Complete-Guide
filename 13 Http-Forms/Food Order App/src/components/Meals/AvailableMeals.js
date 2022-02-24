import { useState, useEffect } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  // let meals = [];

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-app-1cfa3-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );
      const responseData = await response.json();

      const loadedMeals = [];

      for (let key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
    };

    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal?.id}
      id={meal?.id}
      name={meal?.name}
      description={meal?.description}
      price={meal?.price}
    />
  ));
  console.log(meals);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
