<script>
  import { Container } from "@sveltestrap/sveltestrap";
  import Chart from "chart.js/auto";
  import { onMount } from "svelte";
  import dates, { trackingData } from "../DummyData";
  function createTrendChart() {
    var ctx = document.getElementById("daily-track");
    let myChart = new Chart(ctx, {
      data: trackingData,
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
  $: onMount(createTrendChart);
</script>

<Container
  xxl
  style="
    height: 100%;
      border: solid 1px #d0d4d4; 
      border-radius: 20px;
      background-color: white;
  "
>
  <h4 class="heading" style="margin: 50px auto">Daily tracking Chart</h4>
  <canvas id="daily-track" width="1000px" height="300px" />
</Container>
