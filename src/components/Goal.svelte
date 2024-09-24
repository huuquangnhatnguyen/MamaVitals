<script>
  import { Container, Row } from "@sveltestrap/sveltestrap";
  import { Pie } from "svelte-chartjs";
  import PieChart from "./Goal/PieChart.svelte";
  import AddYourGoal from "./Goal/AddYourGoal.svelte";
</script>

<Container fluid style="height: 100% ; ">
  <Row style="height: 50%,">
    <!-- <Calendar /> -->
    <h1 class="mt-2 mb-5">Your Goals</h1>
    <PieChart />
    <h3 class="mt-1 mb-2">You're almost there!</h3>
  </Row>
  <AddYourGoal />
  <!-- <AddYourDish /> -->
</Container>
