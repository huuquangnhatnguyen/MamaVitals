<script>
  import { Col, Container, Row } from "@sveltestrap/sveltestrap";
  import { listOfDishes } from "../DummyData";
  export let option;
  console.log(option);
</script>

<Container
  fluid
  style="
border: solid 1px #d0d4d4; 
border-radius: 20px;
margin-bottom: 10px;
"
>
  <Row style="height: 5%, margin-bottom: 10px"
    ><h6>{listOfDishes[option].name}</h6></Row
  >
  <Row style="height: 90%">
    <Col xs="5" style="margin: auto 5px">
      <img
        class="dish-img"
        src={listOfDishes[option].imgLink}
        alt="Picture of your dish"
      />
    </Col>
    <Col xs="6">
      <ul>
        {#each listOfDishes[option].ingredients as ingredient}
          <li class="ingredient">{ingredient}</li>
        {/each}
      </ul>
    </Col>
  </Row>
</Container>

<style>
  .dish-img {
    max-width: 100%;
    border-radius: 50%;
  }

  .ingredient {
    font-size: 15px;
    list-style: none;
  }
</style>
