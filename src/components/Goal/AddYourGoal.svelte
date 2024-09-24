<script>
  import {
    Button,
    Container,
    FormGroup,
    Input,
    InputGroupText,
    Modal,
  } from "@sveltestrap/sveltestrap";
  import { dishes, listOfDishes } from "../DummyData";
  import { addToast, DishOptions, todayMeal } from "../store";
  import goalSVG from "../../assets/goal.svg";
  const toggle = () => (open = !open);
  let open = false;
  const addNewDishButton = () => (addButton = !addButton);
  let addButton = true;
  let meal;
  let selected = 0;
  todayMeal.subscribe((dish) => (meal = dish));
  const addGoal = () => {
    open = false;
    addToast();
  };
</script>

<div class="add-button" style="padding: auto" on:click={toggle}>
  <img src={goalSVG} alt="" />
</div>
<Modal isOpen={open} {toggle}>
  <Container xxl style={"min-height: 50vh;"}>
    <h2>Adjust your goal:</h2>
    <FormGroup>
      <InputGroupText>Days</InputGroupText>
      <Input type="number" placeholder="Enter your goal of logging days"
      ></Input>
    </FormGroup>

    {#if addButton}
      <div>
        <Button class="my-2" outline color="success" on:click={addGoal}
          >Add My Goal</Button
        >
      </div>
    {/if}
  </Container>
</Modal>

<style>
  .add-button {
    position: fixed;
    bottom: 160px;
    right: 40px;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    z-index: 20;
    border: solid 5px #ffbfca;
    background-color: #fff;
    font-size: 43px;
    text-align: center;
    padding: auto;
    color: #ffbfca;
    box-shadow:
      0 0 0 2px white,
      0em 0em 8px rgb(0 0 0 / 60%);
  }
</style>
