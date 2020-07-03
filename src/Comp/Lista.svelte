<script>
  import { each } from "svelte/internal";

  let Fotografos = [];
  let Contador = "";
  let Dataset = [];

  /* Actualización automática de la lista */
  dbUsers.onSnapshot((docs) => {
    Fotografos = [];
    docs.forEach((doc) => {
      Dataset.push(
        doc.data().Ciudad.capitalize(),
        doc.data().Provincia.capitalize()
      );
      Fotografos = [
        ...Fotografos,
        {
          Nombre:
            doc.data()["Nombre Comercial"] ||
            `${doc.data().Nombre} ${doc.data().Apellido}`,
          Email: doc.id,
          Tel: doc.data()["Teléfono"] || "",
          Ciudad: doc.data().Ciudad || doc.data().Provincia || "",
          Provincia: doc.data().Provincia || doc.data().Provincia || "",
          País: doc.data().País,
        },
      ];
    });
    Contador = Fotografos.length;
    Fotografos = [...Fotografos].sort(() => 0.5 - Math.random());
    Dataset = [...new Set(Dataset)];
  });

  function filtrarTabla() {
    const input = document.getElementById("buscar");
    const tabla = document.getElementById("fotografos");
    const filas = tabla.tBodies[0].childNodes;

    function filtrar() {
      const query = new RegExp(input.value, "ig");
      Contador = 0;
      [...filas].map((fila) => {
        // texto a buscar
        const str = `${fila.dataset.nombre} ${fila.dataset.ciudad} ${fila.dataset.provincia} ${fila.dataset.pais} ${fila.dataset.email} ${fila.dataset.tel}`;
        Contador++;
        if (query.test(str)) {
          fila.style.display = "table-row";
        } else {
          fila.style.display = "none";
          Contador--;
        }
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
    const modal = document.querySelector(".modal");

    modal.style.display = "block";
    modal.childNodes[0].innerText = data.nombre; // Nombre

    modal.childNodes[2].href = `tel:+${data.tel}`; // Teléfono
    modal.childNodes[2].innerText = data.tel ? `Tel: ${data.tel}` : ""; // Teléfono

    modal.childNodes[4].href = `mailto:${data.email}`; // Email
    modal.childNodes[4].innerText = data.email; // Email
    modal.childNodes[6].innerText = `${data.ciudad}, ${data.provincia}`; // Ciudad y Provincia
  }
  function cerrarModal() {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
  }

  // Capitalize the first letter of each word of a given string
  // Usage: 'capItalezE aLl fIrSt leTTers'.capitalize()
  String.prototype.capitalize = function () {
    if (!this || !typeof this === "string") return this;
    return this.trim()
      .split(" ")
      .reduce(
        (text, word) => text + " " + word[0].toUpperCase() + word.substr(1),
        ""
      );
  };

  /* Actualización por única vez 
  dbUsers.get().then((docs) => {
    docs.forEach((doc) => {
      Fotografos = [
        ...Fotografos,
        {
          Nombre:
            doc.data()["Nombre Comercial"] ||
            `${doc.data().Nombre} ${doc.data().Apellido}`,
          Email: doc.id,
          Tel: doc.data()["Teléfono"] || "",
          Ciudad: doc.data().Ciudad || doc.data().Provincia || "",
          Provincia: doc.data().Provincia || doc.data().Provincia || "",
          País: doc.data().País,
        },
      ];
    });
  });
*/
</script>

<style>
  input {
    width: 100%;
  }

  th {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px;
    font-size: 0.95rem;
  }
  .modal {
    display: none;
    text-align: center;
    position: fixed;
    min-width: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 2px 0;
  }
  .modal > * {
    display: block;
  }
  .modal > a:hover {
    color: var(--text);
  }
  .modal h1 {
    font-size: 1.2rem;
  }
  .modal button {
    margin: auto;
    line-height: inherit;
    border-color: white;
  }
</style>

<section>
  <input
    id="buscar"
    type="search"
    list="datalist"
    placeholder="Buscá fotógrafos de tu ciudad" />
  <datalist id="datalist">
    {#each Dataset as item}
      <option value={item} />
    {/each}
  </datalist>
  <hr class="Sep" />
  <table id="fotografos">
    <thead>
      <tr>
        <th>Nombre ({Contador})</th>
        <th>Ciudad</th>
      </tr>
    </thead>

    <tbody>
      {#each Fotografos as { Email, Nombre, Ciudad, Tel, Provincia, País }}
        <tr
          on:click={mostrarInfo}
          data-nombre={Nombre}
          data-email={Email}
          data-tel={Tel}
          data-ciudad={Ciudad}
          data-provincia={Provincia}
          data-pais={País}
          title="{Email} | {Tel}">
          <th>{Nombre}</th>
          <!-- <th>{Nombre}</th> -->
          <th>{Ciudad}</th>
        </tr>
      {/each}
    </tbody>
  </table>
  <div class="modal Inv ">
    <h1>Germán Aliprandi</h1>
    <a href>.</a>
    <a href>.</a>
    <span>.</span>
    <hr class="Sep" />
    <button class="Sol Inv" on:click={cerrarModal}>CERRAR</button>
  </div>
</section>
