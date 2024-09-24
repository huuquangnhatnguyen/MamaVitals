<script>
  import { Col, Container, Row } from "@sveltestrap/sveltestrap";
  import DailyTracking from "./YourStatsTracking/DailyTracking.svelte";
  import GaugeChart from "./YourStatsTracking/GaugeChart.svelte";
  import PersonalProfile from "./YourStatsTracking/PersonalProfile.svelte";
  import SugarLevelChart from "./YourStatsTracking/SugarLevelChart.svelte";
</script>

<Container xxl class="h-100" style="margin: 0px auto; ">
  <Row class="h-50 rows">
    <Col xs="3">
      <PersonalProfile />
    </Col>

    <Col xs="5">
      <GaugeChart />
    </Col>

    <Col xs="4">
      <SugarLevelChart />
    </Col>
  </Row>
  <Row class="h-50" style="padding: 12px">
    <DailyTracking />
  </Row>
</Container>

<style>
</style>
