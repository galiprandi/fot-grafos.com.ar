<script>
  import { loginUser } from "../store.js";

  import Busqueda from "./Buscar-Zona.svelte";
  import Lista from "./Lista.svelte";
</script>

<style>

</style>

<section>
  <h1>Fotógrafos Argentinos</h1>
  {#if !$loginUser}
    <span>
      Si sos fotógrafo
      <!-- svelte-ignore missing-declaration -->
      <a href="#top" on:click|preventDefault={logIn}>ingresá tus datos.</a>
    </span>
  {/if}
  <hr class="Sep" />
  <Lista />
  <!-- <Busqueda /> -->
</section>
