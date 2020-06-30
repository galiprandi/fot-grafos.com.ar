<script>
  let Fotografos = [];

  dbUsers.get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      const toAdd = doc.data();
      Fotografos.push(toAdd);
      //console.log(doc.id, " => ", doc.data());
    });
    console.log(Fotografos);
  });
</script>

<div class="buscar">
  <h1>Fotogarfos de tu ciudad</h1>
  <select name="Provincia" id="provincia">
    <option value="Tucumán">Tucumán</option>
  </select>
  <select name="Ciudad" id="Ciudad">
    <option value="San Miguel de Tucumán">San Miguel de Tucumán</option>
  </select>
  <button>Buscar</button>

  <div class="lista">
    <ul>
      <li>Nombre Comercial</li>
    </ul>
  </div>
</div>
