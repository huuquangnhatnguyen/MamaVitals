<script>
  import { Button, Col, Container, Input, Row } from "@sveltestrap/sveltestrap";
  import avatar from "../../images/download.jpeg";
  import { userData } from "../DummyData";
  const avaHoverText = document.getElementById("change-ava");
  let shown = "none";
</script>

<div
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
  <Row
    style="height: 65%; margin-top: 20px; justify-content: center; text-align: center;"
  >
    <Row
      style="height: 10%; margin-top: 10px; width:100%; justify-content:center"
      id="current-date"
    >
      <h2 class="fs-5 mt-2">{userData.name}</h2>
    </Row>
    <Row
      style="height: 5% ; margin-top: 10px"
      class="h-15 border-bottom-1"
      id="welcome"
    >
      <Col xs="7" style="text-align: left; font-weight: bold; padding: 0"
        >Due Date:</Col
      >
      <Col xs="5" style="text-align: right; padding: 0;">{userData.dueDate}</Col
      >
    </Row>
    <Row style="height: 10% ; margin-top: 10px" class="h-15" id="welcome">
      <Col xs="8" style="text-align: left; font-weight: bold; padding: 0"
        >Current Week of Pregnancy:</Col
      >
      <Col xs="4" style="text-align: right; align-items: center; padding: 0;"
        >{userData.currentWeek}</Col
      >
    </Row>
    <Row style="height: 5% ; margin-top: 10px" class="h-15" id="welcome">
      <Col xs="8" style="text-align: left; font-weight: bold; padding: 0"
        >Weight:</Col
      >
      <Col style="text-align: right; padding: 0;">{userData.weight}kg</Col>
    </Row>
    <Row style="height: 5% ; margin-top: 10px" class="h-15" id="welcome">
      <Col xs="8" style="text-align: left; font-weight: bold; padding: 0"
        >Sugar Level:</Col
      >
      <Col xs="4" style="text-align: right; padding: 0;"
        >{userData.sugarLevel}</Col
      >
    </Row>
  </Row>
</div>

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
