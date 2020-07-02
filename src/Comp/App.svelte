<script>
  import { loginUser, displayPage } from "../store.js";

  import Home from "./Home.svelte";
  import EditUser from "./Add-Edit-User.svelte";

  auth.onAuthStateChanged((user) => {
    LoginUser = $loginUser = user;
  });
</script>

<style>
  .menu {
    height: 60px;
    background-color: #0f0f0f;
    color: white;
    border-radius: 10px;
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
    color: inherit;
  }
  ul li:hover {
    color: var(--hover);
  }
  small.user {
    display: block;
    text-align: center;
  }
  a {
    cursor: pointer;
  }
</style>

{@debug $displayPage}
<main>
  <div class="menu">
    <ul on:click={(e) => ($displayPage = e.target.dataset.url)} class="navbar">
      <li data-url="Home">Home</li>
      {#if !!$loginUser}
        <li data-url="Mis Datos">Mis Datos</li>
      {:else}
        <!-- svelte-ignore missing-declaration -->
        <li on:click={logIn}>Ingresar</li>
      {/if}
    </ul>
  </div>
  <section class="pages">
    {#if $displayPage == 'Home'}
      <Home />
    {:else if $displayPage == 'Mis Datos'}
      <EditUser id={$loginUser.email} />
    {/if}
  </section>
  {#if $loginUser}
    <hr class="Sep" />
    <small class="user">
      {$loginUser.displayName} -
      <!-- svelte-ignore missing-declaration -->
      <a href on:click={logOut} class="">Cerrar sesión</a>
    </small>
  {/if}
</main>
