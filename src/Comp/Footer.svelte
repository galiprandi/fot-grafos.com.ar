<script>
  import { loginUser } from "../store.js";
</script>

<style>
  section {
    text-align: center;
    font-size: 14px;
  }
</style>

<section>
  <!-- svelte-ignore missing-declaration -->
  {#if $loginUser}
    <button on:click={cerrarSesion} class="Out">
      {$loginUser.displayName} - Cerrar Sesión
    </button>
  {:else}
    <button on:click={iniciarSesion} class="Out">Iniciar Sesión</button>
  {/if}
</section>
