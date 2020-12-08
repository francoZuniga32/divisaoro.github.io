<template>
  <div class="home container-fluid">
    <div class="cuerpo table-responsive">
      <table class="table table-borderless border">
        <tbody>
          <tr v-for="(pista,i) in divisa" :key="i">
            <th scope="row">{{ i+1 }}</th>
              <td><h5>{{ pista.nombre }}</h5></td>
              <td><h5>{{ pista.categoria }}</h5></td>
              <td>
                <audio v-bind:src="pista.url" buffered controls controlsList="nodownload"></audio>
              </td>
              <td>
                <a class="btn btn-primary d-inline-flex align-middle" v-bind:href="pista.linkCompra">
                    <span class="material-icons">
                        shopping_cart
                    </span>
                    ${{ pista.precio }}
                </a>
            </td>
          </tr>
        </tbody>
      </table> 
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data(){ 
    return{ 
      divisa:[
        {
          "nombre" : "GEE + Presets",
          "categoria" : "trap",
          "url":"Divisa/GEE - DiVisa Oro.mp3",
          "precio": "1000",
          "linkCompra": "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=277413269-c21aad06-251c-4017-8715-9b759826d330"
        },
        {
          "nombre" : "GEE + Presets",
          "categoria" : "trap",
          "url":"Divisa/GEE - DiVisa Oro.mp3",
          "precio": "1000",
          "linkCompra": "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=277413269-c21aad06-251c-4017-8715-9b759826d330"
        }
      ]
    }
  }
};
</script>
