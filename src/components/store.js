import { readable, writable } from "svelte/store";
import { listOfDishes } from "./DummyData";

export const DishOptions = writable(listOfDishes);

export const todayMeal = writable([])
todayMeal.set([listOfDishes[0]]);

export let loggedData = writable({
    '18/11/2024':[0,1],
    '19/11/2024':[1,1],
    '20/11/2024':[0,2],
    '21/11/2024':[2,1],
    '22/11/2024':[1,2],
  })
  
  // check if the object contain that keyword or not 
  console.log(Object.hasOwn(loggedData, '23/09/2024'))


export const toasts = writable([]);

let noti;
toasts.subscribe((all) => noti = all);

export const addToast = () => {
  // Create a unique ID so we can easily find/remove it
  // if it is dismissible/has a timeout.
  const id = Math.floor(Math.random() * 10000);
  const toast = {
    message: "Successfully added!",
    type: "sucess",
    dismissible: true,
    timeout: 3000,
  };
  // Setup some sensible defaults for a toast.
  const defaults = {
    id,
    type: "sucess",
    dismissible: true,
    timeout: 3000,
  };

 
  // Push the toast to the top of the list of toasts
  toasts.update((all) => [{ ...defaults, ...toast }, ...all]);
  
  console.log('noti',noti)

  // If toast is dismissible, dismiss it after "timeout" amount of time.
  if (toast.timeout) setTimeout(() => dismissToast(id), toast.timeout);
};

export const dismissToast = (id) => {
  toasts.update((all) => all.filter((t) => t.id !== id));
};

let currentDate = new Date();
let selectedDay = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`