<template>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link
        href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">


    <div class="container">
        <div class="parte1">
            <div class="parte1_1">
                <h3>HOTEL ANTON & LILY</h3>
            </div>
            <div class="parte1_2">
                <div class="imagen1">
                    <div class="sobre">

                        <h1>
                            OUR ROOMS</h1>
                        <h2>The rooms are perfect and ideal for a</h2>
                        <h2>pleasant and charming holiday. It</h2>
                        <h2>overlooks the courtyard or the street and</h2>
                        <h2>has double-glazed windows for a quiet</h2>
                        <h2>and relaxing atmosphere. They have a</h2>
                        <h2>140 cm wide bed, bathroom with</h2>
                        <h2>bathtub and private toilet.</h2>

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

   min-width: 100%;
    min-height: 2660px;



    /*  Centra la imagen */
    background-size: cover;
    display: grid;
    grid-template-rows: 70% 30%;
    margin-left: -30.9%;
    margin-top: 0px;
    margin-bottom: -5%;
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

.parte1_2 {
    background-color: rgb(255, 255, 255);
    display: grid;
    grid-template-rows: 50% 50%;


}

.imagen1 {
    width: 1380px;
    height: 731px;
    background: url(https://static.wixstatic.com/media/84770f_98aabcec66e34956acf748305c555ec3~mv2_d_2500_1658_s_2.jpg/v1/fill/w_980,h_945,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_98aabcec66e34956acf748305c555ec3~mv2_d_2500_1658_s_2.jpg);
    position: absolute;

    margin-left: 20%;
    margin-top: 0.5%;

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
}

div.sobre {
    width: 380px;
    height: 450px;
    background-color: rgb(255, 255, 255);
   
    top: 68%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
}


div.sobre h1 {
    color: #000;
    font-size: 25px;
    margin-top: 25px;
    font-style: normal;
    font-weight: 450;
    font-family: "Montserrat", sans-serif;
    margin-bottom: 22px;
}

div.sobre h2 {

    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 550;
    padding: -10px;
    margin-top: -32px;
    font-family: "Montserrat", sans-serif;
}




.habitaciones {
    width: 1200px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 30%));
    grid-gap: 20px;
    padding: 30px;
    margin-left: 19%;
}

.fila:hover {
    transform: scale(1.2);
}


.fila h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 0.9rem;
    margin-top: -15px;
    margin-left: -5px;
    color: #000000;
}

.fila p {
    font-family: "Montserrat", sans-serif;
    font-size: 0.7rem;
    margin-top: -25px;
    margin-bottom: 15px;
    margin-left: 9px;
    color: #000000;
}

.fila {
    margin-left: 12%;
    margin-top: 20px; 
}

.imagen-container {
    position: relative; 
}

.fila img {
    max-width: 90%;
    display: block;
    margin-left: auto; 
    margin-right: auto;
    transition: opacity 0.2s; 
}

.imagen-container:hover img {
    opacity: 0.4; 
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex; 
    align-items: center; 
    justify-content: center;
    color: rgb(0, 0, 0);
    font-size: 1.2rem;
    text-align: center;
    opacity: 0; 
    transition: opacity 0.3s; 
}

.imagen-container:hover .overlay {
    opacity: 1; 
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

@media (max-width: 1709px) {

.parte1_1 h3 {
margin-top: 10px;
margin-left: 50px;
font-size: 38px;
}

.imagen1 {
    width: 1380px;
    height: 731px;   
    margin-left: 18%;
    margin-top: 0.5%;
}

div.sobre { 
    top: 75%;
    margin-left: 4%;
    position: absolute;
    transform: translate(-50%, -50%);
}

.habitaciones {

    margin-left: 23%;
}
/* parte 5 */

.parte5final1 {
    display: grid;
    grid-template-columns: 22% 30% 10% 40%;
}


.parte5prte1_1 h1 {   
    margin-left: 60%;
    font-size: 0.8rem;
}

.parte5prte1_1 h2 { 
    margin-left: 60%;
    font-size: 0.8rem;
}

.parte5prte1_2 h1 {
    font-size: 0.8rem; 
    margin-left: 26%;
}

.parte5prte1_2 h2 {
    font-size: 0.8rem;
    margin-left: 26%;
}

.parte5prte1_3 h1 {
    font-size: 0.8rem;
    margin-top: 5%;
    margin-left: -20%;
}

.parte5prte1_3 h2 {
    font-size: 0.8rem;
    margin-top: 5%;
    margin-bottom: -20%;
    margin-left: -20%;
}

.esp {
    margin-top: 48px;
    margin-left: 69%;   
 
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
}



@media (max-width: 1363px) {

.parte1_1 h3 {
margin-top: 10px;
margin-left: 19%;
font-size: 38px;
}

.imagen1 {
    width: 1380px;
    height: 731px;   
    margin-left: 18%;
    margin-top: 0.5%;
}

div.sobre { 
    top: 75%;
    margin-left: 12%;
    position: absolute;
    transform: translate(-50%, -50%);
}

.habitaciones {
    margin-left: 28%;
}
/* parte 5 */

.parte5final1 {
    display: grid;
    grid-template-columns: 30% 30% 10% 20%;
}


.parte5prte1_1 h1 {   
    margin-left: 70%;
    font-size: 0.8rem;
    margin-bottom: 2px;
}

.parte5prte1_1 h2 { 
    margin-left: 70%;
    font-size: 0.8rem;
    margin-top: -30px;
}

.parte5prte1_2 h1 {
    font-size: 0.8rem; 
    margin-left: 26%;
}

.parte5prte1_2 h2 {
    font-size: 0.8rem;
    margin-left: 26%;
}

.parte5prte1_3 h1 {
    font-size: 0.8rem;
    margin-top: 5%;
    margin-left: -20%;
}

.parte5prte1_3 h2 {
    font-size: 0.8rem;
    margin-top: 5%;
    margin-bottom: -20%;
    margin-left: -20%;
}

.esp {
    margin-top: 48px;
    margin-left: 69%;   
 
}

.esp h1 {
    font-size: 0.9rem;
    margin-left: 100%;
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
}


@media (max-width: 1063px) {

.parte1_1 h3 {
margin-top: 10px;
margin-left: 19%;
font-size: 38px;

}

.imagen1 {
    width: 1380px;
    height: 931px;   
    margin-left: 18%;
   background-position: 50% 10%;
}

div.sobre { 
    top: 75%;
    margin-left: 30%;
    position: absolute;
    transform: translate(-50%, -50%);

}
}
@media (max-width: 675px) {

.parte1_1 h3 {
margin-top: 10px;
margin-left: 19%;
font-size: 38px;

}

.imagen1 {
    width: 1380px;
    height: 931px;   
    margin-left: 18%;
   background-position: 50% 10%;
}

div.sobre { 
    top: 75%;
    margin-left: 65%;
    position: absolute;
    transform: translate(-50%, -50%);

}
}

@media (max-width: 494px) {

.parte1_1 h3 {
margin-top: 10px;
margin-left: 19%;
font-size: 38px;

}

.imagen1 {
    width: 1380px;
    height: 931px;   
    margin-left: 18%;
   background-position: 50% 10%;
}

div.sobre { 
    top: 75%;
    margin-left: 110%;
    position: absolute;
    transform: translate(-50%, -50%);

}
}
</style>
