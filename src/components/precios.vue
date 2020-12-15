<template>
  <div class="container-fluid">
    <h1 class="text-center" id="servicios">Servicios</h1>
    <div class="row justify-content-center row-cols-1 row-cols-md-3">
      <cardprecio v-for="(item ,i) in data" :key="i" :titulo="item.titulo" :precio="item.precio" :items="item.lista" :color="item.color" :url="item.link"></cardprecio>    
    </div>
  </div>
</template>
<script>
import cardprecio from './cardprecio.vue';
export default{ 
  name : "precios",
  components:{ 
    cardprecio
  },
  data(){ 
    return{ 
      data:[
        {
          "titulo":"mezcla",
          "precio":500,
          "lista":[
            "Stems de la canción ya producida.",
            "Charla previa.",
            "Trabajo realizado en 5 a 7 días laborables."
          ],
          "link":"/mezcla",
          "color": "#EF233C"
        },
        {
          "titulo":"producción",
          "precio":500,
          "lista":[
            "Stems o instrumental, y vocal principal a tiempo.",
            "Charlas previas entre procesos.",
            "Trabajo terminado en 7 - 9 dias."
          ],
          "link":"/produccion",
          "color": "#D90429"
        },
        {
          "titulo":"mezcla + mastering",
          "precio":1000,
          "lista":[
            "Requisitos de mezcla.",
            "Charlas previas entre procesos",
            "Trabajo realizado en 10 a 14 días laborables."
          ],
          "link":"/mezclamastering",
          "color":"#8D99AE"
        },
        {
          "titulo":"mezcla + mastering + producción",
          "precio":1700,
          "lista":[
            "Requisitos de mezcla y mastering.",
            "Charlas previas entre procesos.",
            "Stems, instrumental, y vocal principal a tiempo.",
            "Trabajo terminado en 4 - 5 semanas."
          ],
          "link":"/mezclamasteringproduccion",
          "color":"#2B2D42"
        },
      ]
    }
  }
}
</script>

