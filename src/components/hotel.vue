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

                        <h1>ABOUT</h1>
                        <h2>Welcome to Hotel Sol y Mar, your perfect getaway.</h2>
                        <h2>Located on the stunning coastline, we offer</h2>
                        <h2>luxurious accommodations with breathtaking views.</h2>
                        <h2>Enjoy our world-class amenities including a</h2>
                        <h2>pool, spa, and gourmet dining experiences.</h2>
                        <h2>Relax in elegantly designed rooms featuring</h2>
                        <h2>modern comforts and local charm for all guests.</h2>

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
    background-color: rgba(179, 148, 148, 0.411);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100%;
}



.container {

    width: 1360px;
    height: 1560px;

    background-color: rgba(139, 135, 129, 0.5);
  
    background-size: cover;
    display: grid;
    grid-template-rows: 66% 34%;
    margin-left: -91px;
    margin-top: 0px;
    margin-bottom: -50px;
}

.parte1 {
    display: grid;
    grid-template-rows: 20% 80%;
    background-color: rgba(235, 232, 227, 0.5);
    background-color: rgb(238, 235, 231);
}

.parte1_1 {

    margin-top: 50px;
    background-color: rgb(255, 255, 255);
}

.parte1_1 h3 {

    margin-top: 10px;
    font-size: 30px;
    font-family: "Montserrat", sans-serif;

}

.parte1_2 {
    background-color: rgba(235, 232, 227, 0.5);
    background-color: rgb(226, 224, 220);
}

.imagen1 {
    width: 1200px;
    height: 800px;
    background: url(https://static.wixstatic.com/media/84770f_2d6f401da0284208a7ad5d274041dffd~mv2_d_2500_1658_s_2.jpg/v1/fill/w_980,h_638,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_2d6f401da0284208a7ad5d274041dffd~mv2_d_2500_1658_s_2.jpg) no-repeat center center;
    background-color: rgb(238, 235, 231);
    background-size: cover;
    margin-left: 80px;
    margin-top: 12px;
    position: relative;
}

div.sobre {
    width: 500px;
    height: 400px;
    background-color: rgba(238, 235, 231, 0.9);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

div.sobre h1 {
    font-size: 30px;
    font-family: "Montserrat", sans-serif;
}

div.sobre h2 {
    font-size: 16px;
    padding: 0;
    margin-top: -18px;
    font-family: "Montserrat", sans-serif;
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