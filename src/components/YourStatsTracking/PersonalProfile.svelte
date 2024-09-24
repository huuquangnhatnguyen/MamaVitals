<script>
  import { Button, Col, Container, Input, Row } from "@sveltestrap/sveltestrap";
  import avatar from "../../images/download.jpeg";
  import { userData } from "../DummyData";
  const avaHoverText = document.getElementById("change-ava");
  let shown = "none";
</script>

<Container
  xxl
  class="h-100 p-3 bg-white"
  style="
    max-width: 100%;
    border: solid 1px #d0d4d4; 
    border-radius: 20px;
    margin: 0px auto;
    "
>
  <Row style="height: 30%" id="app-name">
    <div style="margin: auto">
      <img
        class="user-img"
        src={avatar}
        alt="avatar maybe"
        on:mouseenter={() => (shown = "block")}
        on:mouseleave={() => (shown = "none")}
      />
      <div id="change-ava" style={`display: ${shown}`}>CHANGE</div>
    </div>
  </Row>
  <Row style="height: 10%; margin-top: 10px" id="current-date">
    <h2 class="fs-5 mt-2">{userData.name}</h2>
  </Row>
  <Row
    style="height: 5% ; margin-top: 10px"
    class="h-15 border-bottom-1"
    id="welcome"
  >
    <Col xs="6" style="text-align: left">Due Date:</Col>
    <Col style="text-align: right">{userData.dueDate}</Col>
  </Row>
  <Row style="height: 10% ; margin-top: 10px" class="h-15" id="welcome">
    <Col xs="8" style="text-align: left">Current Week of Pregnancy:</Col>
    <Col style="text-align: right">{userData.currentWeek}</Col>
  </Row>
  <Row style="height: 5% ; margin-top: 10px" class="h-15" id="welcome">
    <Col xs="8" style="text-align: left">Weight:</Col>
    <Col style="text-align: right">{userData.weight}kg</Col>
  </Row>
  <Row style="height: 5% ; margin-top: 10px" class="h-15" id="welcome">
    <Col xs="8" style="text-align: left">Sugar Level:</Col>
    <Col style="text-align: right">{userData.sugarLevel}</Col>
  </Row>
</Container>

<style>
  .user-img {
    max-height: 150px;
    width: fit-content;
    border-radius: 50%;
    border: solid 1px #d0d4d4;
    z-index: -1;
  }

  .user-img:hover {
    filter: brightness(30%);
  }
  #change-ava {
    position: relative;
    left: 50%;
    transform: translate(-50%, -300%);
    font-size: 20px;
    color: white;
  }
</style>
