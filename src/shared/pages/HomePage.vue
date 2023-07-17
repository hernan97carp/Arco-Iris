<script setup lang="ts">

</script>

<template>
    <div class="container_all"  id="container__all ">
   
        <div class="cover">

            <!--INICIO WAVE-->

                <div class="bg__color"></div>
                <div class="wave w1"></div>
                <div class="wave w2"></div>

            <!--FINAL WAVE-->

            <div class="container__cover" >
                <div class="container__info">
                    <h1 class="m-4">Servicio Tecnico</h1>
                    <h2 class=" m-4">Arco Iris</h2>
                    <p class="fs-5 m-4">Somos una empresa dedicada al mantenimiento y reparacion de Heladeras, Aire Acondicionado y Electricidad</p>
                    <input type="button" value="Contactanos" class="m-4">
                </div>
                <div class="container__vector">
                    <img src="../../assets/apoyo-tecnico.png" alt="servicio tecnicos">
                </div>
            </div>
 
     

</div>


<div class="container__imagen">
                    <img src="../../assets/apoyo-tecnico.png" alt="servicio tecnicos">
                 
                </div>
                <div class=" container__puente d-flex justify-content-center"><span>
Bienvenido a Arcoiris
</span>

</div>

<div class="w-100 ">
      
        <div class="row container__cards row-cols-1  row-cols-sm-2 row-cols-md-3 row-cols-lg-4 col-xl-4 mb-5">
   




            <div class="col  mb-4 mt-4">
                
                
                <div class="card tarjeta m-auto ">

                        <a href="#" class="btn  custom-bg btn-sm h-100 border-none">
                          <img class="card-img-top imagen" src="../../assets/heladera.png" alt="heladera">
                           <div class="card-body">
                        <h5 class="card-title py-3 px-2 text-white">Reparacion y mantenimiento de frigoríficos</h5>  
                    </div>
                        </a>
                    
                  
                </div>
            </div>








            <div class="col mb-4 mt-4">
                
                
                <div class="card tarjeta  m-auto">

                        <a href="#" class="btn  custom-bg btn-sm h-100 border-none">
                          <img class="card-img-top imagen" src="../../assets/aire.jpg" alt="Aire Acondicionado">
                           <div class="card-body">
                        <h5 class="card-title py-3 px-2 text-white">Instalacion de Aire Acondicionado</h5>  
                    </div>
                        </a>
                    
                  
                </div>
            </div>





            <div class="col mb-4 mt-4">
                
                 
                <div class="card tarjeta  m-auto">

                        <a href="#" class="btn  custom-bg btn-sm h-100 border-none">
                          <img class="card-img-top imagen" src="../../assets/electricidad.jpg" alt="electricidad">
                           <div class="card-body">
                        <h5 class="card-title py-3  px-2 text-white">Instalaciones Electricas</h5>  
                    </div>
                        </a>
                    
                  
                </div>
            </div>









        </div>
    </div>



<Footer>
            <div class="container__footer">

                <div class="box__footer">
             
                    <div class="terms">
                    Brindamos servicios de reparacion y mantenminento de Heladeras, Aire Acondicionado y instalaciones Electricas desde 2017 en Argentina, Mendoza.
                    </div>
                </div>

                <div class="box__footer">
                    <h2>Servicios</h2>
                    <a href="#">Heladeras</a>
                    <a href="#">Aire Acondicionado</a>
                    <a href="#">Electricidad</a>
            
                </div>

                <div class="box__footer">
                    <h2>Localidad</h2>
                    <a href="#">Argentina,Mendoza</a>
                        
                </div>

                <div class="box__footer">
                    <h2>Redes Sociales</h2>
                    <a href="#"><i class="fab fa-facebook-square"></i> Facebook</a>
                    <a href="#"><i class="fab fa-twitter-square"></i> WhatsApp</a>
                   
                </div>
            </div>

            <div class="box__copyright">
                <hr>
                <p>Todos los derechos reservados © 2023 <b>Arco Iris</b></p>
            </div>
        </Footer>


    </div>
</template>


<style scoped>

/*WAVE INICIO*/

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}
.custom-text {
  color: white;
  transition: color 0.3s;
}

.custom-bg{
    background:#000000;
  
}

.custom-bg:hover{
    background:#2196f3;;
}
.container_all{
    position: relative;
    right: 0;
    transition: all 300ms;
    background: white;
}
.bg__color{
    width: 100%;
    height: 70%;
    background: #2196f3;
    position: absolute;
    top: 0;
}


header{
    width: 100%;
    height: 100px;
    font-family: 'Poppins', sans-serif;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
    transition: all 300ms;
}

.move_content{
    right: 180px;
}


.container__header{
    max-width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding: 0px;
}

header .logo{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

header .logo img{
    width: 150px;
}

.container__nav{
    position: relative;
    height: 100%;
}

nav{
    height: 100%;
}

nav ul{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav ul li{
    margin: 0px 20px;
}

nav ul li a{
    color: #fff;
    font-size: 14px;
}

.nav_mod{
    height: 70px;
    box-shadow: 1px 1px 10px 0px #00000010;
    background: #fff;
}

.nav_mod a{
    color: #373737;
}

.nav_mod .select{
    color: white;
}

.select{
    background: #359EF9;
    padding: 10px 30px;
    color: white;
    border-radius: 20px;
}

.btn__menu{
    width: 50px;
    height: 50px;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: all 300ms;
    display: none;
}

.btn__menu:hover{
    background: #f5f5f5;
}

/*COVER*/

.cover{
    width: 100%;
    padding-bottom: 120px;
    font-family: 'Poppins', sans-serif;
    padding-top: 100px;
    position: relative;
    overflow: hidden;
  
}

/*WAVE INICIO*/

.bg_color{
    width: 100%;
    height: 100%;
    background: #2196f3;
    position: absolute;
    top: 0;
}

.wave{
    width: 6000px;
    height: 100%;
    position: absolute;
    top: 100px;
    left: 0;
    background-image: url(../../assets/wd1.svg);
    background-position: bottom;
}

.w1{
    animation: w1 7s linear infinite;
}

.w2{
    animation: w2 7s linear -.125s infinite, desplazamiento 7s ease -.125s infinite;
    opacity: 0.5;
}

.card__seccion{
    width: 100%;
}
.container__cards{

    height: 100% ;
    background:#ffffff;
    width: 100%;
    display:flex;
justify-content: center;
align-self: center;
place-items: center;



}
.tarjeta{
    width: 400px;
    height: 450px;
 background: #000000;
 border:#000000 1px solid;
 

}

.imagen{
    width: 100%;
    height: 360px;
}
@keyframes w1 {
    0%{
        margin-left: 0;
    }
    100%{
        margin-left: -1600px;
    }
}

@keyframes w2 {
    0%{
        margin-left: 0;
    }
    100%{
        margin-left: -1600px;
    }
}

@keyframes desplazamiento {
    0%, 100%{
        transform: translateY(-25px);
    }

    50%{
        transform: translateY(10px);
    }
}
  /*WAVE FINAL*/

.container__cover{
    max-width: 1200px;
    margin: auto;
    padding: 0px;
    display: flex;
    justify-content: space-between;
  

}


.cover .container__info{
    max-width: 400px;
    margin-top: 40px;
    z-index: 2;
    
}

.cover h1{
    max-width: 400px;
    font-size: 60px;
    font-weight: 900;
    color: #fff;
}

.cover h2{
    font-size: 60px;
    font-weight: 900;
    color: #FEBA0B;
    margin-top: -30px;
}

.cover p{
    margin-top: 10px;
    color: #fff;
}

.cover input[type="button"]{
    padding: 10px 40px;
    margin-top: 40px;
    font-size: 18px;
    font-weight: 600;
    border: none;
    color: white;
    background: #FEBA0B;
    border-radius: 20px;
    box-shadow: 1px 1px 30px -5px #20202049;
    cursor: pointer;
    transition: box-shadow 500ms;
}

.cover input[type="button"]:hover{
    box-shadow: 1px 1px 30px -5px #20202085;
}

.container__vector{
    position: relative;
}

.container__vector img{
   
    top: 0px;
    bottom: 40px;
    right: 0px;
    width: auto;
    height: auto;
    transition: all 300ms;
    animation: move_vector 6s ease-in-out infinite;
}

.container__imagen img{
      width: 300px;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-left: auto;
 margin-right: auto;
 margin-bottom: 50px;
 transition: all 300ms;
    animation: move_vector 6s ease-in-out infinite;

    
    
}
.container__puente{
    font-size: 60px;
    font-weight: 900;
    color: hsl(0, 100%, 100%);
    background: #000000;
    margin-bottom: 50px;
   
    }

@keyframes move_vector{
    0%{
        transform: translateY(10px);
    }
    25%{
        transform: translateY(-10px);
    }
    100%{
        transform: translateY(10px);
    }
}

@media(max-height:1609px){
    .tarjeta{
    width: 300px;
    height: 450px;
 background: #986464;

}


}
@media(max-height:1214px){
    .tarjeta{
    width: 250px;
    height: 460px;
 background: #986464;

}


}
@media(min-height:572px){
    .tarjeta{
    width: 90%;

    height: 460px;
 background: #986464;

}


}
@media screen and (max-width: 920px){

    .container__vector img{
        width: 500px;
    }


}
@media screen and (min-width: 759px){
    .container__imagen img{
        transform: scale(0);
        animation: none;
        position: absolute;
     
    
    
    }
}


@media screen and (max-width: 760px){

    .container__nav{
       display: flex;
       justify-content: center;
       align-items: center;
    }

    .btn__menu{
        display: flex;
    }

    nav{
        height: 100%;
        background: #F1FAFF;
        position: fixed;
        top: 0;
        right: -180px;
        padding: 0px 40px;
        transition: all 300ms;
    }

    .move_nav{
        right: 0px;
    }

    nav ul{
        flex-direction: column;
    }

    nav ul li{
        margin: 20px 0px;
    }

    .container__vector img{
        transform: scale(0);
        animation: none;
    }


}

@media screen and (max-width:577px){
    .container__puente{
      font-size: 40px;

    }

}

@media screen and (max-width:368px){
    .container__puente{
      font-size: 30px;
    }
    
}






/****************************/

/*¡NO TOCAR CODIGO DE AQUÍ DEBAJO!*/


/*MUESTRA*/



:root{
    --color-esqueleto:#EFF3F5;
}


.container__article{
    max-width: 1000px;
    padding: 0px 20px;
    margin: auto;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.container__article .box__article{
    width: 200px;
    height: 250px;
    background: var(--color-esqueleto);
    margin: 20px;
}

/*AQUI COMIENZA EL FOOTER*/

footer{
    width: 100%;
    padding: 50px 0px;
    font-family: 'Nunito', sans-serif;
    background-color: var(--color-esqueleto);
    background-image: url("../../assets/background-footer.svg");
    background-size: cover;

    /*webkit-mask-image: url("../Images/background-footer.svg");
    mask-image: url("../Images/background-footer.svg");
    -webkit-mask-size: cover;
    mask-size: cover;*/
}

.container__footer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
    padding-top: 100px;
}

.box__footer{
    display: flex;
    flex-direction: column;
    padding: 40px;
}

.box__footer .logo img{
    width: 180px;
}

.box__footer .terms{
    max-width: 350px;
    margin-top: 20px;
    font-weight: 500;
    color: #7a7a7a;
    font-size: 18px;

}

.box__footer h2{
    margin-bottom: 30px;
    color: #242424;
    font-weight: 700;
}

.box__footer a{
    margin-top: 10px;
    color: #7a7a7a;
    font-weight: 600;
}

.box__footer a:hover{
    opacity: 0.8;
}

.box__footer a .fab{
    font-size: 20px;
}

.box__copyright{
    max-width: 1200px;
    margin: auto;
    text-align: center;
    padding: 0px 40px;
}

.box__copyright p{
    margin-top: 20px;
    color: #7a7a7a;
}

.box__copyright hr{
    border: none;
    height: 1px;
    background-color: #7a7a7a;
}


</style>