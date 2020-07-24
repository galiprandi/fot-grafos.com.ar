<script>
  import { loginUser, displayPage } from "../store.js";
  import Lista from "./Lista.svelte";
</script>

<style>
  .head h1 {
    font-size: 1.5em;
    color: #b5191a;
    margin-bottom: 10px;
  }
  .head h6 {
    margin: 0;
  }
  .head p {
    text-align: center;
  }
  .logo {
    width: 150px;
  }
</style>

<section>
  <div class="head">

    <h1>Fotógrafos Argentinos</h1>
    <h6>Comunidad Argentina de Fotógrafos</h6>
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
