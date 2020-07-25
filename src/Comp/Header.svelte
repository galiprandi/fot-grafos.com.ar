<script>
  import { loginUser, displayPage } from "../store.js";
</script>

<style>
  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 0.5em;
    border-bottom: 1px solid var(--hover);
  }

  header * {
    margin: 0;
  }

  .titulo {
    font-family: "Gilda Display", serif;
    color: var(--hover);
    font-size: 20px;
  }

  .subtitulo {
    font-weight: 100;
  }

  .logo {
    height: 35px;
  }
</style>

<header>
  <a href on:click={() => ($displayPage = 'Home')}>
    <img
      class="logo"
      src="/site/imagenes/isotipo.svg"
      alt="Fotógrafos Argentinos" />
  </a>
  <div class="left">
    <h1 class="titulo">Fotógrafos Argentinos</h1>
    <h6 class="subtitulo">Comunidad Argentina de Fotógrafos</h6>
  </div>
</header>
