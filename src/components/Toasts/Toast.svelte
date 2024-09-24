<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  import SuccessIcon from "../../assets/SuccessIcon.svg";
  import ErrorIcon from "../../assets/ErrorIcon.svg";
  import InfoIcon from "../../assets/InfoIcon.svg";
  import CloseIcon from "../../assets/CloseIcon.svg";

  const dispatch = createEventDispatcher();

  export let type = "success";
  export let dismissible = true;
</script>

<article class={type} role="alert" transition:fade>
  {#if type === "success"}
    <img src={SuccessIcon} alt="" />
  {:else if type === "error"}
    <img src={ErrorIcon} alt="" />
  {:else}
    <img src={InfoIcon} alt="" />
  {/if}

  <div class="text">
    <slot />
  </div>

  {#if dismissible}
    <button class="close" on:click={() => dispatch("dismiss")}>
      <img src={CloseIcon} alt="" />
    </button>
  {/if}
</article>

<style lang="postcss">
  article {
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    margin: 0 auto 0.5rem auto;
    width: 20rem;
    z-index: 1000;
    background-color: MediumSeaGreen;
  }
  .error {
    background: IndianRed;
  }
  .success {
    background: MediumSeaGreen;
  }
  .info {
    background: SkyBlue;
  }
  .text {
    margin-left: 1rem;
  }
  button {
    color: white;
    background: transparent;
    border: 0 none;
    padding: 0;
    margin: 0 0 0 auto;
    line-height: 1;
    font-size: 1rem;
  }
</style>
