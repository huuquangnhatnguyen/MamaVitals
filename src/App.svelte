<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Header from "./components/Header.svelte";
  import Header2 from "./components/Header2.svelte";
  import Navbar from "./components/Navbar.svelte";
  import NutrientTracking from "./components/NutrientTracking.svelte";
  import Dishes from "./components/Dishes.svelte";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  />
</svelte:head>
<main>
  <Navbar />
  <div id="body-header">
    <Header />
  </div>
  <div>
    <Header2 />
  </div>
  <div>
    <Dishes />
  </div>
  <div id="nutrient-tracking">
    <NutrientTracking />
  </div>
</main>

<style>
  div {
    max-width: 700px;
    background-color: white;
    margin: 20px auto;
    border-radius: 10px;
    border: solid 1px #d0d4d4;
    padding: 2rem;
  }
  #nutrient-tracking {
    height: fit-content;
  }
</style>
