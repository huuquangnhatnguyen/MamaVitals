<script>
  import { Button, Col, Container, Input, Row } from "@sveltestrap/sveltestrap";
  import Calendar from "./FoodLog/Calendar.svelte";
  import AddYourDish from "./FoodLog/AddYourDish.svelte";
  import Meals from "./FoodLog/Meals.svelte";
  import { todayMeal } from "./store";

  let loggedMeals = [];
  todayMeal.subscribe((meals) => (loggedMeals = meals));
</script>

<div class="container">
  <div class="calendar-container">
    <Calendar />
  </div>
  <hr class="solid" />
  <div class="all-dishes">
    {#each loggedMeals as meal}
      <Meals option={meal["option"]} />
    {/each}
  </div>
  <AddYourDish />
</div>

<style>
  .container {
    margin: 0 auto;
    max-width: 400px;
    padding: 0 10px;
  }
  .calendar-container {
    height: fit-content;
    margin-bottom: 10px;
  }
  hr.solid {
    border-top: 3px solid #bbb;
  }
  .all-dishes {
    max-height: 45vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: scroll;
  }
</style>
