<script>
  import FoodLog from "./components/FoodLog.svelte";
  import Navbar from "./components/Navbar.svelte";
  import YourStatsTracking from "./components/YourStatsTracking.svelte";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  />
</svelte:head>
<main>
  <Navbar />
  <div id="container">
    <section id="stats"><YourStatsTracking /></section>
    <section id="food-log"><FoodLog /></section>
  </div>
</main>

<style>
  div {
    width: 100vw;
    height: 90vh;
    margin: 10px auto;
    padding: 1rem;
    display: inline-flex;
  }
  #stats {
    width: 60%;
  }
  #food-log {
    padding: 10px;
    width: 20%;
    background-color: white;
    border: solid 1px #d0d4d4;
    border-radius: 10px;
  }
</style>
