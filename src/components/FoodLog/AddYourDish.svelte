<script>
  import { Button, Container, Input, Modal } from "@sveltestrap/sveltestrap";
  import CustomizeDish from "./CustomizeDish.svelte";
  import { dishes, listOfDishes } from "../DummyData";
  import { DishOptions, todayMeal } from "../store";
  const toggle = () => (open = !open);
  let open = false;
  const addNewDishButton = () => (addButton = !addButton);
  let addButton = true;
  let meal;
  let selected = 0;
  todayMeal.subscribe((dish) => (meal = dish));
  const addDish = () => {
    todayMeal.update((OGlist) => {
      OGlist.push(listOfDishes[selected]);
      return OGlist;
    });
    open = false;
  };
</script>

<div class="add-button" on:click={toggle}>+</div>
<Modal isOpen={open} {toggle} class="dish">
  <Container>
    <h2>What did you have for dinner?</h2>
    <div>
      <Input type="select" bind:value={selected} placeholder="choose your dish">
        {#each dishes as dish, i (i)}
          <option value={i}>{dish}</option>
        {/each}
      </Input>
    </div>
    <div id="button" on:click={addNewDishButton}>
      <CustomizeDish />
    </div>
    {#if addButton}
      <div>
        <Button class="my-2" outline color="success" on:click={addDish}
          >Add My dish</Button
        >
      </div>
    {/if}
  </Container>
</Modal>

<style>
  .add-button {
    position: fixed;
    bottom: 40px;
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
