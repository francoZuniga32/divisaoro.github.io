<template>
    <div class="cuerpo table-responsive">
      <br>
      <h1 class="text-center">Beats Store</h1>
      <table class="table table-borderless border">
        <tbody>
          <tr v-for="(pista,i) in pistas" :key="i">
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
            <td>
              <router-link to="/compra" ></router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
<script>
export default{ 
  name: "Beat",
  props:{ 
   pistas: Array 
  }
}
</script>
