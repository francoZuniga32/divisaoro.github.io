<template>
    <div class="w-50">
      <form class="form" @submit.prevent="sendEmail">
        <div class="form-group">  
          <label>Name</label>
          <input class="form-control" type="text" name="from_name">
        </div>
        <div class="form-group">  
          <label>Asunto</label>
          <select name="asunto" class="form-control" id="exampleFormControlSelect1">
            <option value="Beat Service">Beat Service</option>
            <option value="Mezcla">Mezcla</option>
            <option value="Produccion">Produccion</option>
            <option value="Mastering">Mastering</option>
            <option value="Mezcla & Mastering">Mezcla &amp; Mastering</option>
            <option value="Mezcla & mastering & producción">Mezcla &amp; Mastering &amp; Produccion</option>
          </select>
        </div>
        <div class="form-group">  
          <label>Email</label>
          <input class="form-control" type="email" name="user_email">
        </div> 
        <div class="form-group">  
          <label>Message</label>
          <textarea class="form-control" name="message"></textarea>
        </div>
          <input type="submit" class="btn btn-outline-light btn-lg btn-block" value="Send">
          <br>
          <div v-if="seeError" class="alert alert-danger" role="alert">
            vuelva mas tarde o informe del error.
          </div>
          <div v-if="seeOk" class="alert alert-success" role="alert">
            Mensaje enviado con exito !!
          </div>
      </form>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: "Contacto",
  data(){
    return{
      seeError: false,
      seeOk : false
    }
  },
  methods: {
    sendEmail: function(e){
      this.seeOk = false;
      console.log(this.seeOk);
      emailjs.sendForm('service_9pkziqi', 'template_4xf2fgi', e.target, 'user_4R2mShN37V4j92AgNuWVr')
        .then((result) => {
            this.seeOk = true;
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            this.seeError = true;
            console.log('FAILED...', error);
        });
    }
  }
}
</script>
