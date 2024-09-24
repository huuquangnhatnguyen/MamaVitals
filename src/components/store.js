import { readable, writable } from "svelte/store";
import { listOfDishes } from "./DummyData";

export const DishOptions = writable(listOfDishes);

export const todayMeal = writable([])
todayMeal.set([listOfDishes[0]]);

export let loggedData = writable({
    '24/9/2024':[0,1],
    '20/9/2024':[1,1],
    '21/9/2024':[0,2],
    '22/9/2024':[2,1],
    '23/9/2024':[1,2],
  })
  
  // check if the object contain that keyword or not 
  console.log(Object.hasOwn(loggedData, '23/09/2024'))