<script lang="ts">
  import { Container, Progress } from "@sveltestrap/sveltestrap";
</script>

<Container>
  <h2>Nutrients</h2>
  <div class="text-content">Omega-3 Fatty Acids (DHA)</div>
  <Progress value={2 * 5} class="mb-2" />
  <div class="text-content">Iron</div>
  <Progress color="success" value={25} class="mb-2" />
  <div class="text-content">Folic Acid</div>
  <Progress color="info" value={50} class="mb-2" />
  <div class="text-content">Calcium</div>
  <Progress color="warning" value={75} class="mb-2" />
  <div class="text-content">Added Sugar</div>
  <Progress color="danger" value={100} class="mb-2" />
</Container>

<style>
  h2 {
    color: #ffbfca;
    /* background-color: #466e80; */
  }
</style>
