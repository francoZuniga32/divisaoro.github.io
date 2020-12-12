<template>
  <div class="about container-fluid">
    <div class="row align-items-start">
      <div class="col-sm d-flex justify-content-center">
        <Lista :items="lista"></Lista>
      </div>
      <div class="col-sm">
        <h1 class="text-center">Gracias por tu Compra.</h1>
        <p>
Tu compra es una gran ayuda y apoyo. Gracias a ello puedo seguir produciendo y mejorando mi trabajo. Espero disfrutes tu compra, saludos DiVisa Oro.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Lista from "../components/Lista.vue";
  export default{
    name: "Compra",
    components:{ 
      Lista
    },
    data(){ 
      return{ 
        "lista": [ 
          { 
            "text" : "Realize el pago del beat",
            "icon" : "attach_money"
          },
          { 
            "text":"Mande el ticket de compra al siguiente mail: divisaoro@gmail.com",
            "icon":"mail_outline"
          },
          {
            "text":"Recibira un comprimido cuando el pago sea completado, con los siguientes archivos: mp3, wav, datos adicionales (samle pack), licencia de uso (creative commons modificado), link de atribucion al autor mas una guia de uso de la licencia",
            "icon": "cloud_download"
          }
        ]
      }
    }
  }
</script>
