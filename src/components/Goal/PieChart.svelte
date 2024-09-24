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

      textLabel(5, xCoor, yCoor + 15, 80, "bottom", "center");
      textLabel("Days", xCoor, yCoor + 50, 20, "bottom", "center");
    },
  };

  function createPie() {
    var ctx = document.getElementById("goal-streak-chart");

    let myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            label: "gram",
            data: [currentSugar, bloodSugar[1] - currentSugar],
            backgroundColor: ["rgba(250, 143, 146, 0.8)", "rgba(0, 0, 0, 0.2)"],
            borderColor: ["rgba(250, 143, 146, 0.8)", "rgba(0, 0, 0, 0.2)"],
            borderWidth: 1,
            cutout: "80%",
            // circumference: 180,
            // rotation: 270,
          },
        ],
      },
      options: {
        aspectRatio: 2,
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
  $: onMount(createPie);
</script>

<Container xxl>
  <h2 class="heading">Logging Streak!</h2>
  <canvas id="goal-streak-chart" width="200px" height="200px" />
</Container>

<style>
  h2 {
    color: #fb6f92;
    /* background-color: #466e80; */
  }
</style>
