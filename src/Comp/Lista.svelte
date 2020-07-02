<script>
  let Fotografos = [];

  dbUsers.onSnapshot((docs) => {
    docs.forEach((doc) => {
      Fotografos = [];

      Fotografos = [
        ...Fotografos,
        {
          Nombre:
            doc.data()["Nombre Comercial"] ||
            `${doc.data().Nombre} ${doc.data().Apellido}`,
          Email: doc.id,
          Tel: doc.data()["Teléfono"] ? `Tel: ${doc.data()["Teléfono"]}` : "",
          Ciudad: doc.data().Ciudad || doc.data().Provincia || "",
        },
      ];
    });
  });

  /*
  dbUsers.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      Fotografos = [
        ...Fotografos,
        {
          Nombre:
            doc.data()["Nombre Comercial"] ||
            `${doc.data().Nombre} ${doc.data().Apellido}`,
          Email: doc.id,
          Tel: doc.data()["Teléfono"] ? `Tel: ${doc.data()["Teléfono"]}` : "",
          Ciudad: doc.data().Ciudad || doc.data().Provincia || "",
        },
      ];
    });
  });
  */

  function filtrarTabla() {
    const input = document.getElementById("buscar");
    const tabla = document.getElementById("fotografos");
    const filas = tabla.tBodies[0].childNodes;

    function filtrar() {
      const query = new RegExp(input.value, "ig");
      [...filas].map((fila) => {
        const texto = fila.textContent;
        fila.style.display = query.test(texto) ? "table-row" : "none";
      });
    }

    input.addEventListener("input", filtrar);
    input.focus();
  }

  document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") filtrarTabla();
  });

  function mostrarInfo(fila) {
    const el = fila.target.parentElement;
    const data = el.dataset;
    /*
    console.log(el.dataset);
    alert(`
      ${data.nombre}\n\n
      ${data.email}\n
      ${data.tel}
    `);
    */
  }
</script>

<style>
  input {
    width: 100%;
  }
</style>

<section>

  <input
    id="buscar"
    type="search"
    placeholder="Buscá fotógrafos de tu ciudad" />

  <table id="fotografos">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Ciudad</th>
        <th />
      </tr>
    </thead>

    <tbody>
      {#each Fotografos as { Email, Nombre, Ciudad, Tel }}
        <tr
          on:click={mostrarInfo}
          data-nombre={Nombre}
          data-email={Email}
          data-tel={Tel}
          data-ciudad={Ciudad}>
          <th title="{Email} | {Tel}">
            <a href="mailto:{Email}">{Nombre}</a>
          </th>
          <!-- <th>{Nombre}</th> -->
          <th>{Ciudad}</th>
        </tr>
      {/each}
    </tbody>

  </table>
</section>
