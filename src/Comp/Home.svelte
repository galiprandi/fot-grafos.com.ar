<script>
  import { loginUser } from "../store.js";

  import Busqueda from "./Buscar-Zona.svelte";
  import Lista from "./Lista.svelte";
</script>

<style>
  .head h1 {
    font-size: 2em;
  }
  .head p {
    text-align: center;
  }
</style>

<section>
  <div class="head">

    <h1>Fotógrafos Argentinos</h1>
    <p>Puede buscar fotógrafos de tu ciudad o alrededores.</p>
    {#if !$loginUser}
      <p>
        Si sos fotógrafo te invitamos a
        <!-- svelte-ignore missing-declaration -->
        <a href="#top" on:click|preventDefault={logIn}>ingresá tus datos.</a>
      </p>
    {/if}
  </div>
  <hr class="Sep" />
  <Lista />
  <!-- <Busqueda /> -->
</section>
