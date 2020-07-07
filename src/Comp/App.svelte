<script>
  import { loginUser, displayPage } from "../store.js";
  import Footer from "./Footer.svelte";
  import Home from "./Home.svelte";
  import EditUser from "./Add-Edit-User.svelte";

  // Auth
  auth.onAuthStateChanged((user) => {
    $loginUser = user;
  });
</script>

<style>
  .menu {
    border-radius: 5px;
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
    color: var(--text);
  }
</style>

<main>
  <div class="menu Inv">
    <ul on:click={(e) => ($displayPage = e.target.dataset.page)} class="navbar">
      <li data-page="Home">Home</li>
      <li data-page="Mis Datos">Mis Datos</li>
      {#if $loginUser}
        <!-- <li data-page="Mis Datos">Mis Datos</li> -->
      {:else}
        <!-- <li on:click={logIn}>Ingresar</li> -->
      {/if}

    </ul>
  </div>
  <section class="pages">
    {#if $displayPage == 'Home' || !$displayPage}
      <Home />
    {:else if $displayPage == 'Mis Datos'}
      <EditUser />
    {/if}
  </section>
  <Footer />
</main>
