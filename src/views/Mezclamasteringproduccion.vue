<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm">
        <h1 class="text-center" style="color: #2B2D42">Mezcla + Mastering + Produccion</h1>
        <p>Soluciono errores de la produccion, logrando cohecion entre los instrumentos, ayudando a reforzar los sentimientos de la cancion.</p>
        <p>Tu cancion merece estar a la altura de las demas, tener potencia y resaltar, puedo ayudarte con esto.</p>
        <p>Voy hacer que tu cancion tome forma y suene interesante, competitiva y con emocion.</p>
        <p>Esto tardara de 4 a 5 semanas, pueden extenderse si surgen complicaciones de por medio. Este estimado tiene en cuenta reuniones, correcciones, ajustes, y cualquier observacion adicional.</p>
      </div>
      <div class="col-sm d-flex justify-content-center">
        <Lista :items="lista"></Lista>
      </div>
    </div>
  </div>
</template>
<script>
import Lista from "../components/Lista.vue";
export default{ 
  name: "mezclamasteringproduccion",
  components:{ 
    Lista
  },
  data(){ 
    return{
      "lista":[
        {
          "text":"Póngase en contacto para la mezcla.",
          "icon":"send"
        },
        {
          "text":"Abone el primer pago como seña de la mezcla (mitad del precio).",
          "icon":"attach_money"
        },
        {
          "text":"Continúe en contacto para finalizar la mezcla.",
          "icon":"connect_without_contact"
        },
        {
          "text":"Cuando finalice el proceso realice el segundo pago(la otra mitad).",
          "icon":"attach_money"
        },
        {
          "text":"Se le enviaran los archivos de la mezcla",
          "icon":"cloud_download"
        },
      ]
    }
  }
}
</script>
