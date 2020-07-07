<script>
  import { loginUser, displayPage } from "../store.js";
</script>

<style>
  nav {
    padding: 0;
  }
  nav ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
  }
  nav ul li {
    cursor: pointer;
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 1rem;
  }
  nav ul li:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  nav ul img {
    display: none;
  }
  li.avatar {
    display: flex;
    justify-content: center;
  }
  .avatar img {
    display: block;
    margin: 0;
    height: 2rem;
    clip-path: circle();
  }
</style>

<nav class="Sol Inv">
  <ul on:click={(e) => ($displayPage = e.target.dataset.page)} class="navbar">
    <li data-page="Home">
      <img
        src="/site/imagenes/logo.svg"
        id="logo"
        alt="Fotógrafos Argentinos" />
      Inicio
    </li>
    <li data-page="Mis Datos">Mis Datos</li>
    {#if $loginUser}
      <!-- svelte-ignore missing-declaration -->
      <li on:click={cerrarSesion} class="avatar">
        <img
          src={$loginUser.providerData[0].photoURL}
          alt={$loginUser.displayName}
          title={$loginUser.displayName} />
      </li>
      <!-- <li data-page="Mis Datos">Mis Datos</li> -->
    {:else}
      <!-- svelte-ignore missing-declaration -->
      <li on:click={iniciarSesion}>Ingresar</li>
    {/if}

  </ul>
</nav>
