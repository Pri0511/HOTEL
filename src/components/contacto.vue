<template>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" >
    <link
        href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">


    <div class="container">
        <div class="parte1">
            <div class="parte1_1">
                <h3>ANTON & LILY</h3>
                <h3>----- Bed & Breakfast -----</h3>
            </div>
            <div class="parte1_2">
                <div class="imagen1">
                    <div class="sobre">

                        <div class="contacto">
                            <div class="contacto1">
                                <h1>Enter Your First Name*</h1>
                                <input type="text" id="nombre" placeholder=""><br><br>
                                <h2>Enter Your Last name*</h2>
                                <input type="text" id="apellido" placeholder=""><br><br>
                                <h3>Enter Your Email*</h3>
                                <input type="text" id="email" placeholder=""><br><br>
                                <h4>Enter Your Subject*</h4>
                                <input type="text" id="subject" placeholder=""><br><br>
                            </div>
                            <div class="contacto2">
                                <h5>Enter Your Message</h5>
                                <input type="text" id="message" placeholder=""><br><br>
                                <button>Submit</button>
                            </div>
                        </div>
                        <div class="mapa">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.704319801122!2d-73.14499573215444!3d6.55895930826788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c6d95410bc45%3A0xd9b8d2118a9b1568!2sSena%20Centro%20Agroturistico!5e0!3m2!1sen!2sau!4v1729161113516!5m2!1sen!2sau"
        width="520"
        height="700"
        
        style="border:0;"
   
        loading="lazy"></iframe>
</div>
                    </div>
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
  min-height: 1860px;


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

  margin-top: 10px;
  font-size: 40px;
  font-family: "Montserrat", sans-serif;
  color: #000;
}



.imagen1 {
    width: 1200px;
    height: 800px;
    background: url(https://static.wixstatic.com/media/84770f_2d6f401da0284208a7ad5d274041dffd~mv2_d_2500_1658_s_2.jpg/v1/fill/w_980,h_638,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_2d6f401da0284208a7ad5d274041dffd~mv2_d_2500_1658_s_2.jpg) no-repeat center center;
    background-color: rgb(238, 235, 231);
    background-size: cover;
    margin-left: 15%;
    margin-top: 6%;
    position: relative;
}

div.sobre {
    width: 1200px;
    height: 800px;
    background-color: rgba(238, 235, 231, 0.7);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-columns: 50% 50%;
}





.contacto {

    display: grid;
    grid-template-rows: 50% 50%;
}

div.sobre h1,
div.sobre h2,
div.sobre h3,
div.sobre h4 {
    font-size: 16px;
    padding: 0;
    font-family: "Montserrat", sans-serif;
    display: grid;
    grid-template-rows: 50% 50%;
}
div.sobre h1{
    margin-left: -50%;
    margin-top: 5%;
}
div.sobre h2{
    margin-left: 50%;
    margin-top: -20%;
}
div.sobre h3{
    margin-left: -55%;
    margin-top: 0%;
}
div.sobre h4{
    margin-left: 48%;
    margin-top: -15%;
}
div.sobre h5{
    margin-left: -52%;
    margin-top: -15%;

    font-size: 16px;
    padding: 0;
    font-family: "Montserrat", sans-serif;
}

#nombre{
    margin-left: -38%;
    margin-top: -10%;
    width: 250px;
    height: 30px;
    background-color: white;
    color: #000;
  
    
}
#apellido{
    margin-left: 60.5%;
    margin-top: 1%;
    width: 250px;
    height: 30px;
    background-color: white;
    color: #000;
}
#email{
    margin-left: -40%;
    margin-top: 1%;
    width: 250px;
    height: 30px;
    background-color: white;
    color: #000;
}
#subject{
    margin-left: 60.5%;
    margin-top: 0%;
    width: 250px;
    height: 30px;
    background-color: white;
    color: #000;
}
#message{
    margin-left:10%;
    margin-top: 5%;
    width: 550px;
    height: 300px;
    background-color: white;
    color: #000;
}

.contacto2 button{
    margin-left:10%;
    margin-top: 0%;
    width: 550px;
    height: 40px;
    border-radius: 0%;
    background-color: rgb(71, 70, 69);
    color: azure;
    font-size: 14px;
    padding: 0;
    font-family: "Montserrat", sans-serif;
}
.contacto2 button:hover{
    background-color: rgb(224, 220, 217);
    border: 1px solid rgb(71, 70, 69);
    color: black;
}

.mapa {

    margin-top: 40px;
    margin-left: 15px; 
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