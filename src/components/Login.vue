<template>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet">


  <div class="container">
    <div class="parte1">
      <div class="parte1_1">
        <h3>HOTEL ANTON & LILY</h3>
  
      </div>
      <div class="parte1_2">

        <div class="parallax"></div>


                    <div class="sobre">

                        <h1>ABOUT US</h1>
                        <h2>Hotel Anton and Lily is a modern and elegant four stars  hotel, overlooking the sea,</h2>
                        <h2>ideal for a pleasant holiday and great charm, is one of the hotels that best respond</h2>
                        <h2>to the demands of the guest with comfort and first quality services.  </h2>
                        <h4></h4>
                        <h3>The spaces of the Hotel Anton and Lily are new, bright and welcoming, as well</h3>
                        <h3>as our reception staff, who will be happy to assist you during your stay in Yopal</h3>
                        <h3>and will be able to suggest itineraries and guided tours.</h3>

                    </div>
                

      </div>

    </div>
    <div class="parte5">

      <div class="parte5final1">
        <div class="parte5prte1_1">
          <h1>Recursos</h1>
          <h2>Tarjetas de regalo</h2>
          <h2>
            Buscar una habitacion</h2>
          <h2>
            Servios</h2>
          <h2>
            Hazte Member</h2>
          <h2>
            Descuento para estudiantes</h2>
          <h2>
            Comentarios</h2>
          <h2>
            Códigos promocionales</h2>
        </div>
        <div class="parte5prte1_2">
          <h1>Ayuda</h1>
          <h2>
            Obtener ayuda</h2>
          <h2>
            Estado del pedido</h2>
          <h2>
            Reservas</h2>
          <h2>
            Devoluciones</h2>
          <h2>
            Opciones de pago</h2>
          <h2>
            Contacto</h2>
          <h2>
            Evaluaciones</h2>
          <h2>
            Ayuda con los códigos promocionales</h2>
        </div>
        <div class="parte5prte1_3">
          <h1>Empresa</h1>
          <h2>
            Acerca de ANTON & LILY</h2>
          <h2>
            Novedades</h2>
          <h2>
            Empleo</h2>
          <h2>
            Inversores</h2>
          <h2>
            Sostenibilidad</h2>
          <h2>
            Proposito</h2>
        </div>
        <div class="parte5prte1_4">
          <div class="esp">
            <h1>España</h1>
          </div>
        </div>
      </div>
      <div class="parte5final2">
        <h1>© 2024, Inc. Todos los derechos reservados

          &nbsp &nbsp &nbsp &nbspGuías v

          &nbsp &nbsp &nbsp &nbsp &nbsp &nbspTérminos de uso

          &nbsp &nbsp &nbspTérminos de venta

          &nbsp &nbsp &nbsp Aviso Legal

          &nbsp &nbspPolítica de privacidad y cookies</h1>
      </div>
      <div class="parte5final3">
        <h1>Configuración de privacidad y cookies</h1>
      </div>


    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref('first')
    }
  }
}



</script>
<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

body {

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100%;
}



.container {

  width: 1900px;
  min-height: 1960px;


  /*  Centra la imagen */
  background-size: cover;
  display: grid;
  grid-template-rows: 70% 30%;
  margin-left: -360px;
  margin-top: 0px;
  margin-bottom: -50px;
}

.parte1 {
  display: grid;
  grid-template-rows: 10% 90%;
  background-color: rgb(255, 255, 255);
}

.parte1_1 {

  margin-top: 50px;
  background-color: rgb(255, 255, 255);
}

.parte1_1 h3 {

  margin-top: 40px;
  font-size: 40px;
  font-family: "Montserrat", sans-serif;
  color: #000;
}

.parte1_2 {
  background-color: rgb(255, 255, 255);
  display: grid;
  grid-template-rows: 50% 50%;
  

}

.parallax {

  background-image: url("https://static.wixstatic.com/media/84770f_2d6f401da0284208a7ad5d274041dffd~mv2_d_2500_1658_s_2.jpg/v1/fill/w_980,h_945,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_2d6f401da0284208a7ad5d274041dffd~mv2_d_2500_1658_s_2.jpg");

  width: 980px;
  height: 731px;
  margin-top: 40px;
  margin-left: 450px;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
}

.imagen2 {
  width: 1200px;
    height: 800px;
    background: url(https://static.wixstatic.com/media/84770f_2d6f401da0284208a7ad5d274041dffd~mv2_d_2500_1658_s_2.jpg/v1/fill/w_980,h_638,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_2d6f401da0284208a7ad5d274041dffd~mv2_d_2500_1658_s_2.jpg) no-repeat center center;
    background-color: rgb(238, 235, 231);
    background-size: cover;
    margin-left: 300px;
    margin-top: -50px;
    position: relative;

    
}

div.sobre {
    width: 800px;
    height: 400px;
   
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

  div.sobre h1 {
      color: #000;
      font-size: 30px;
      margin-top: 780px;
      font-style: normal;
      font-weight: 400;
      font-family: "Montserrat", sans-serif;
      margin-bottom: 20px;
  }

  div.sobre h2 {

      color: #000;
      font-size: 14px;  
      font-style: normal;
      font-weight: 450;   
      padding: -10px;
      margin-top: -32px;
      font-family: "Montserrat", sans-serif;
  }

div.sobre h3 {
color: #000;
font-size: 14px;  
font-style: normal;
font-weight: 450;   
padding: -10px;
margin-top: -20px;
font-family: "Montserrat", sans-serif;
}
div.sobre h4 {
margin-bottom: 20px;
}


/*Parte 5*/

.parte5 {
  border: 1px solid rgb(231, 231, 231);
  background-color: rgb(218, 213, 207);
  height: 100%;
  display: grid;
  grid-template-rows: 65% 15% 20%;
}

.parte5final1 {
  display: grid;
  grid-template-columns: 20% 30% 10% 40%;
}

.parte5prte1_1 h1 {
  font-size: 0.9rem;
  margin-top: 3%;
  margin-bottom: -10%;
  color: rgb(63, 62, 62);
  text-align: left;
  margin-left: 45%;

}

.parte5prte1_1 h2 {
  font-size: 0.9rem;
  margin-top: -8%;
  color: rgb(121, 119, 119);
  text-align: left;

  margin-left: 45%;
}

.parte5prte1_2 h1 {
  font-size: 0.9rem;
  margin-top: 1%;
  margin-bottom: -10%;
  color: rgb(63, 62, 62);
  text-align: left;

  margin-left: 32%;

}

.parte5prte1_2 h2 {
  font-size: 0.85rem;
  margin-top: 4.5%;
  margin-bottom: -9.5%;
  color: rgb(121, 119, 119);
  text-align: left;
 
  margin-left: 32%;
}

.parte5prte1_3 h1 {
  font-size: 0.9rem;
  margin-top: 5%;
  margin-bottom: -30%;
  color: rgb(63, 62, 62);
  text-align: left;

}

.parte5prte1_3 h2 {
  font-size: 0.85rem;
  margin-top: 5%;
  margin-bottom: -20%;
  color: rgb(121, 119, 119);
  text-align: left;

}

.esp {
  margin-top: 48px;
  margin-left: 79%;
  width: auto;
  height: 40px;
  display: flex;
  align-items: center;
  background-image: url(red-mundial.png);
  background-size: 16px;
  background-position: left center;
  background-repeat: no-repeat;
  padding-left: 20px;
}

.esp h1 {
  font-size: 0.9rem;
  margin: 0;
  color: rgb(121, 119, 119);
}

.parte5final2 h1 {
  font-size: 0.85rem;
  margin-left: 3.5%;
  margin-top: 5%;
  color: rgb(121, 119, 119);
}

.parte5final3 h1 {
  font-size: 0.85rem;
  margin-left: 3.5%;
  margin-top: 1%;

  color: rgb(121, 119, 119);
}
</style>