<script>
  import { loginUser, displayPage } from "../store.js";
  import Header from "./Header.svelte";
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
  <Header />

  <section class="pages">
    {#if $displayPage == 'Home' || !$displayPage}
      <Home />
    {:else if $displayPage == 'Mis Datos'}
      <EditUser />
    {/if}
  </section>
  <Footer />
</main>
