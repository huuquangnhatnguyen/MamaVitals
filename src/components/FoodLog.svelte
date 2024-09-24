<script>
  import { Button, Col, Container, Input, Row } from "@sveltestrap/sveltestrap";
  import Calendar from "./FoodLog/Calendar.svelte";
  import AddYourDish from "./FoodLog/AddYourDish.svelte";
  import Meals from "./FoodLog/Meals.svelte";
  import { todayMeal } from "./store";

  let loggedMeals = [];
  todayMeal.subscribe((meals) => (loggedMeals = meals));
</script>

<Container fluid style="height: 100%; margin-bottom: 10px">
  <Row style="height: 32%">
    <Calendar />
  </Row>
  <hr class="solid" />
  <Row style="max-height: 50%; overflow-y: scroll; margin-top: 10px">
    {#each loggedMeals as meal}
      <Row style=" max-height: 25%; margin: 10px auto"
        ><Meals option={meal["option"]} /></Row
      >
    {/each}
  </Row>
  <AddYourDish />
</Container>

<style>
  hr.solid {
    border-top: 3px solid #bbb;
  }
</style>
