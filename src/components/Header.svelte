<script>
  import { Button, Col, Container, Input, Row } from "@sveltestrap/sveltestrap";
  function currentDate() {
    const date = new Date();
    return date;
  }

  // print out current date when to add new journal
  let today = currentDate().toDateString();
  let numberth = 60;
</script>

<Container fluid>
  <Row id="app-name" class="justify-content-md-center mb-10">
    <h1 class="text-center fs-1">Welcome Back!</h1>
  </Row>
  <Row class="justify-content-md-center" id="current-date">
    <p class="fs-5">Today is <strong>{today}</strong></p>
  </Row>
  <Row class="justify-content-md-center" id="welcome">
    <p>Welcome to your <strong>{numberth}th</strong> day of logging!</p>
  </Row>
</Container>

<style>
  h1 {
    color: #ffbfca;
    /* background-color: #466e80; */
  }
</style>
