<script>
  import { loginUser, displayPage } from "../store.js";
  import Lista from "./Lista.svelte";
</script>

<style>
  .head h1 {
    font-size: 1.5em;
  }
  .head p {
    text-align: center;
  }
</style>

<section>
  <div class="head">

    <h1>Fotógrafos Argentinos</h1>
    <p>Comunidad Argentina de Fotógrafos</p>
    {#if !$loginUser}
      <p>
        <button class="" on:click={() => ($displayPage = 'Mis Datos')}>
          Ingresá tus Datos
        </button>
      </p>
    {/if}

  </div>
  <Lista />
</section>
