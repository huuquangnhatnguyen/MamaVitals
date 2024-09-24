<script>
  import { Container } from "@sveltestrap/sveltestrap";
  import Chart from "chart.js/auto";
  import { onMount } from "svelte";
  import {
    bloodSugar,
    currentSugar,
    rating,
    sugarChartData,
  } from "../DummyData";

  const gaugeChartText = {
    id: "gaugeChartText",
    afterDatasetsDraw(chart, args, pluginOptions) {
      const {
        ctx,
        data,
        chartArea: { top, bottom, left, right, width, height },
        scales: { r },
      } = chart;

      ctx.save();
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;

      function textLabel(text, x, y, fontSize, textBaseLine, textAlign) {
        ctx.font = `${fontSize}px sans-serif`;
        ctx.fillStyle = "#666";
        ctx.textAlign = textAlign;
        ctx.textBaseLine = textBaseLine;
        ctx.fillText(text, x, y);
      }

      textLabel(bloodSugar[0], left + 5, yCoor + 25, 25, "top", "left");
      textLabel(bloodSugar[1], right - 5, yCoor + 25, 25, "top", "right");
      textLabel(currentSugar, xCoor, yCoor, 80, "bottom", "center");
      textLabel(rating, xCoor, yCoor - 80, 20, "bottom", "center");
    },
  };

  function createDoughnut() {
    var ctx = document.getElementById("sugar-blood-chart");

    let myChart = new Chart(ctx, {
      type: "doughnut",
      data: sugarChartData,
      options: {
        aspectRatio: 1.5,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
      },
      plugins: [gaugeChartText],
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
  <h2 class="heading">Blood Level Sugar</h2>
  <canvas id="sugar-blood-chart" width="200px" height="200px" />
</Container>

<style>
  h2 {
    color: #fb6f92;
    /* background-color: #466e80; */
  }
</style>
