<script>
  import { loginUser } from "../store.js";

  import Home from "./Home.svelte";
  import EditUser from "./Add-Edit-User.svelte";

  let Page = "Home";

  auth.onAuthStateChanged((user) => ($loginUser = user));
</script>

<style>
  .menu {
    height: 60px;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin: 0;
  }
  ul li {
    color: var(--text);
    cursor: pointer;
  }
  ul li:hover {
    color: var(--hover);
    border-bottom: 1px solid;
  }
  small.user {
    display: block;
    text-align: center;
  }
</style>

<main>
  <div class="menu">
    <ul on:click={(e) => (Page = e.target.dataset.url)} class="navbar">
      <li data-url="Home">Home</li>
      {#if !!$loginUser}
        <li data-url="MisDatos">Mis Datos</li>
      {:else}
        <li on:click={logIn}>Ingresar</li>
      {/if}

    </ul>
  </div>
  <section class="pages">
    {#if Page == 'Home'}
      <Home />
    {:else if Page == 'MisDatos'}
      <EditUser id={$loginUser.email} />
    {:else if Page == 'Nuevo'}
      <EditUser id="" />
    {/if}
  </section>
  {#if $loginUser}
    <hr class="Sep" />
    <small class="user">
      {$loginUser.displayName} -
      <a on:click={logOut} class="">Cerrar sesión</a>
    </small>
  {/if}
</main>
