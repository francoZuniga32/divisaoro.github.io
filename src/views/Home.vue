<template>
  <main>
        <div class="container-fluid" id="divisa">
          <div class="row margin-top align-items-center" id="advanced-store" style="margin-top: 10%">
            <div class="col-md ">
              <h1 class="text-center">DiVisa Oro | beats & prod</h1>
              <p>venimos a dar soluciones a su empresa, poniendo a disposición productos adaptados a sus necesidades y actualizables, 
              por lo que crecen junto con las necesidades de la empresa.</p>
              <p>
              <p class="text-center">
                  <router-link class="btn btn-primary align-middle" to="/sobre">Ver Mas</router-link>
              </p>
            </div>
            <div class="col-sm d-flex justify-content-center">
              <img src="/icon/divisaoro.png" alt="" width="70%">
            </div>
          </div>
        </div>
        <div class="container-fluid" id="beats">
          <div class="row margin-top align-items-center" style="margin-top: 10%">
            <div class="d-flex justify-content-center col-sm d-none d-md-block d-lg-block d-xl-block">
              <img src="/icon/beatmeker.png" alt="" width="70%">
            </div>
            <div class="col-sm">
              <h1 class="text-center">
                 Beats 
              </h1>
              <p>
                 El rol de los creadores de contenido, ahora son la puerta de nuevos productos y diferentes maneras de consumirlos. 
                 Queremos ofrecer soluciones para ellos también. Es por eso que nos estamos embarcando en crear marketplace para ellos, 
                 permitiendo que se profesionalicen. 
                 Nuestra primer incursión es Cooking Beats para aquellos que ofrecen instrumentales.
              </p>
            </div>
            <div class="col-sm d-block d-sm-none d-flex justify-content-center">
              <img src="/icon/beatmeker.png" alt="" width="70%">
            </div>
          </div>
        </div>
        <div class="container-fluid" id="mezcla">
          <div class="row margin-top align-items-center" style="margin-top: 10%">
            <div class="col-sm">
              <h1 class="text-center">mezcla</h1>
              <p>Nuestro equipo es pequeño pero apostamos al trabajo remoto, ya que vemos en esto ventajas competitivas.
               Con la pandemia las empresas tuvieron que adaptarse al trabajo remoto, por lo cual una buena infraestructura informática y 
               organizativa es esencial. Podemos darle nuestras recomendaciones sobre este aspecto.</p>
            </div>
            <div class="col-sm d-flex justify-content-center">
              <img src="/icon/mexcla.png" alt="" width="70%">
            </div>
          </div>
        </div>
        <div class="container-fluid" id="beats">
          <div class="row margin-top align-items-center" style="margin-top: 10%">
            <div class="col-sm d-none d-md-block d-lg-block d-xl-block">
              <div class="d-flex justify-content-center"><img src="/icon/produccion.png" alt="" width="70%"></div>
            </div>
            <div class="col-sm">
              <h1 class="text-center">
                produccion 
              </h1>
              <p>
                 El rol de los creadores de contenido, ahora son la puerta de nuevos productos y diferentes maneras de consumirlos. 
                 Queremos ofrecer soluciones para ellos también. Es por eso que nos estamos embarcando en crear marketplace para ellos, 
                 permitiendo que se profesionalicen. 
                 Nuestra primer incursión es Cooking Beats para aquellos que ofrecen instrumentales.
              </p>
            </div>
            <div class="col-sm d-block d-sm-none d-flex justify-content-center">
              <img src="/icon/produccion.png" alt="" width="70%">
            </div>
          </div>
        </div>
        <div class="container-fluid" id="mezcla">
          <div class="row margin-top align-items-center" style="margin-top: 10%">
            <div class="col-sm">
              <h1 class="text-center">Mezcla & mastering</h1>
              <p>Nuestro equipo es pequeño pero apostamos al trabajo remoto, ya que vemos en esto ventajas competitivas.
               Con la pandemia las empresas tuvieron que adaptarse al trabajo remoto, por lo cual una buena infraestructura informática y 
               organizativa es esencial. Podemos darle nuestras recomendaciones sobre este aspecto.</p>
            </div>
            <div class="col-sm d-flex justify-content-center">
              <img src="/icon/mezclaYMastering.png" alt="" width="70%">
            </div>
          </div>
        </div>
        <div class="container-fluid" id="beats">
          <div class="row margin-top align-items-center" style="margin-top: 10%">
            <div class="col-sm d-none d-md-block d-lg-block d-xl-block">
              <div class="d-flex justify-content-center"><img src="/icon/mezclaYMasteringYProduccion.png" alt="" width="70%"></div>
            </div>
            <div class="col-sm">
              <h1 class="text-center">
                mezcla & mastering & producción
              </h1>
              <p>
                 El rol de los creadores de contenido, ahora son la puerta de nuevos productos y diferentes maneras de consumirlos. 
                 Queremos ofrecer soluciones para ellos también. Es por eso que nos estamos embarcando en crear marketplace para ellos, 
                 permitiendo que se profesionalicen. 
                 Nuestra primer incursión es Cooking Beats para aquellos que ofrecen instrumentales.
              </p>
            </div>
            <div class="col-sm d-block d-sm-none d-flex justify-content-center">
              <img src="/icon/mezclaYMasteringYProduccion.png" alt="" width="70%">
            </div>
          </div>
        </div>
        <Footer></Footer>
    </main>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';

export default {
  name: "Home",
  components:{ 
    Footer
  }
};
</script>
