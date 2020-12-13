<template>
    <div class="col">
      <div class="card">
        <div class="card-header" v-bind:style="color">
          <h2 class="text-white text-center">{{ titulo }}</h2> 
        </div>
        <div class="card-body">
          <h2 class="card-title text-center">${{ precio }}</h2>
          <p class="card-text">
            <ul>
              <li v-for="(item, i) in items" :key="i">{{ item }}</li>
            </ul>
          </p>
        </div>
        <div class="card-footer">
          <router-link v-bind:to="url" class="btn btn-lg btn-secondary btn-block">Encargar</router-link>
        </div>
      </div>
    </div>
</template>
<script>
export default{ 
  name:"cardprecio",
  props:{
    titulo: String,
    precio: Number,
    items: Array,
    url: String,
    color: String
  },
  mounted(){ 
    this.color = "background-color: "+this.color
  }
}
</script>
