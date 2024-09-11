<script>
  import { Container, Input } from "@sveltestrap/sveltestrap";
  import CustomizeDish from "./CustomizeDish.svelte";
  let dishes = [
    "Grilled Salmon with Quinoa and Steamed Vegetables",
    "Spinach and Feta Stuffed Chicken Breast",
    "Lentil and Vegetable Stir-Fry with Brown Rice",
    "Baked Sweet Potatoes with Black Beans and Avocado",
    "Turkey and Spinach Meatballs with Whole Wheat Pasta",
    "Vegetable and Chickpea Curry with Basmati Rice",
    "Greek Yogurt and Spinach Stuffed Baked Potatoes",
    "Tofu Stir-Fry with Mixed Vegetables and Soba Noodles",
    "Chicken and Broccoli Stir-Fry with Brown Rice",
    "Egg and Avocado Salad on Whole Grain Toast",
  ];
</script>

<Container>
  <h2>What did you have for dinner?</h2>
  <div>
    <Input type="select" placeholder="choose your dish">
      {#each dishes as option}
        <option>{option}</option>
      {/each}
    </Input>
  </div>
  <div id="button">
    <CustomizeDish />
  </div>
</Container>

<style>
  #button {
    margin-top: 20px;
  }
  h2 {
    color: #ffbfca;
    /* background-color: #466e80; */
  }
</style>
