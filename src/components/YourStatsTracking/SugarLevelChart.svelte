<script>
  import { Container } from "@sveltestrap/sveltestrap";
  import Chart from "chart.js/auto";
  import { onMount } from "svelte";
  import { nutrientData } from "../DummyData";
  const data = {
    labels: [
      "Omega-3 Fatty Acids (DHA)",
      "Iron",
      "Folic Acid",
      "Calcium",
      "Added Sugar",
    ],
    datasets: [
      {
        label: "gram",
        data: nutrientData,
        backgroundColor: [
          "#8ED2FA",
          "#FAF88E",
          "#FA8E92",
          "#A59494",
          "#596E7A",
        ],
      },
    ],
  };
  function createDoughnut() {
    var ctx = document.getElementById("meal-chart");

    let myChart = new Chart(ctx, {
      type: "polarArea",
      data: data,
      options: {
        aspectRatio: 1,
        // plugins: {
        //   legend: {
        //     display: false,
        //   },
        // },
      },
    });
  }
  $: onMount(createDoughnut);
</script>

<Container
  xxl
  style="
  height: 100%;
    border: solid 1px #d0d4d4; 
    border-radius: 20px;
    margin: auto;
    padding: auto;
    background-color: white;
    padding: 2px
"
>
  <h2 class="heading">Nutrients</h2>
  <canvas id="meal-chart" width="200px" height="200px" />
</Container>

<style>
  h2 {
    color: #fb6f92;
    /* background-color: #466e80; */
  }
</style>
