<script>
  import { loginUser, displayPage } from "../store.js";
  import Lista from "./Lista.svelte";
</script>

<style>
  button.Hover {
    color: var(--hover);
    border-color: var(--hover);
    line-height: 2;
    display: block;
    margin: 1.5em auto;
    padding: 5px 20px;
    text-transform: uppercase;
    font-size: 14px;
  }

  button.Hover:hover {
    background-color: var(--hover);
    color: white;
  }
</style>

<section>

  {#if !$loginUser}
    <button class="Hover flat" on:click={() => ($displayPage = 'Mis Datos')}>
      Ingresá tus Datos
    </button>
  {/if}

  <Lista />
</section>
