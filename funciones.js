function splashscreen()
{
    setTimeout(function()
               {window.location.assign('menu.html');
                },3000);
}

function navegar(url,puntos)
{
    localStorage.setItem('puntos',puntos);
    window.location.assign(url);
    
}

function comenzar()
{
    fbid1 = document.getElementById('fbid1').value;
    fbid2 = document.getElementById('fbid2').value;
    localStorage.setItem('fbid1',fbid2);
    localStorage.setItem('fbid2',fbid2);
    window.location.assign('escenario.html');
    
}
function animacion()
{
    setTimeout(function(){
    document.getElementById('bg').style.top = "-100%"
    document.getElementById('escenario').style.top = "0%"
    },2000);
    
    //cargar fotos de facebook
    
    /*
    document.getElementById('img-fbid1').src="http://graph.facebook.com/"+localStorage.getItem('fbid1')+"/picture?type=noral";
    document.getElementById('img-fbid2').src="http://graph.facebook.com/"+localStorage.getItem('fbid2')+"/picture?type=noral";
    */
    conteo();
    
    
}
var disparoefectuado = "no";
var disparoPermitido = "no";
var puntosP1 = 0;
var puntosP2 = 0;
function disparo(jugador)
{
    document.getElementById('audio').play();
    if(disparoPermitido == "no")
    {
        navigator.vibrate(300);
        navigator.vibrate(300);
        
        if(jugador == "p1")
        {
        document.getElementById('vaquero-p1').src="v1.png";
        document.getElementById('p1').removeAttribute("onclick");
        }
        else
        {
            document.getElementById('vaquero-p2').src="v1.png";
            document.getElementById('p2').removeAttribute("onclick");
        }
    
    }
    if(disparoefectuado == "no" && disparoPermitido == "si")
    {
        if(jugador == "p1")
        {
        puntosP1++;
        document.getElementById('resultados-p1').innerHTML+="<span>X</span>"
        document.getElementById('vaquero-p1').src="v1.png";
         document.getElementById('vaquero-p2').src="v3.png";
        setTimeout(function(){
            document.getElementById('horse').play();
        },500);
        
        }
        else
        {
        puntosP2++;
         document.getElementById('resultados-p2').innerHTML+="<span>X</span>"
        document.getElementById('vaquero-p1').src="v3.png";
         document.getElementById('vaquero-p2').src="v1.png";
        document.getElementById('horse').play();
        setTimeout(function(){
            document.getElementById('horse').play();
        },500);
        }
    disparoefectuado = "si";
    document.getElementById('mensaje').style.visibility = "visible";
    document.getElementById('mensaje').style.transition = ".4s all";
    document.getElementById('mensaje').style.opacity = "1";
    document.getElementById('mensaje').style.webkitTransform = "scale(1)";
    }
    if(puntosP1==localStorage.getItem('puntos'))
    {
        
         document.getElementById('game-over').style.visibility = "visible";
         document.getElementById('game-over').style.transition = ".4s all";
        document.getElementById('game-over').style.opacity = "1";
        document.getElementById('game-over').style.webkitTransform = "scale(1)";
        document.getElementById('game-over').innerHTML = "GAME OVER <br> Gano el jugador 1";
        document.getElementById('mensaje').style.visibility = "hidden";
        
    }
    if(puntosP2==localStorage.getItem('puntos'))
    {
        document.getElementById('game-over').style.visibility = "visible";
         document.getElementById('game-over').style.transition = ".4s all";
        document.getElementById('game-over').style.opacity = "1";
        document.getElementById('game-over').style.webkitTransform = "scale(1)";
        document.getElementById('game-over').innerHTML = "GAME OVER <br> Gano el jugador 2";
        document.getElementById('mensaje').style.visibility = "hidden";
    }
    
}


function restablecer()
{
    document.getElementById('mensaje').style.visibility = "hidden";
    document.getElementById('mensaje').style.transition = ".4s all";
    document.getElementById('mensaje').style.opacity = "0";
    document.getElementById('mensaje').style.webkitTransform = "scale(.4)";
    
    //restablecer imagen de los vaqueros
    document.getElementById('vaquero-p1').src="v2.png";
    document.getElementById('vaquero-p2').src="v2.png";
    
    //reestablecer onclick
        document.getElementById('p1').setAttribute("onclick", "disparo('p1')");
        document.getElementById('p2').setAttribute("onclick", "disparo('p2')");
    //reestablecer conteo
    conteo();
    //reestablecer los disparos
    disparoefectuado = "no";
    disparoPermitido = "no";
    
}

function volverAJugar()
{
    window.location.assign('menu.html');
}

function conteo()
{
    document.getElementById('wait').play();
    setTimeout(function(){
    document.getElementById('conteo').style.transition= ".3s all";
    document.getElementById('conteo').style.visibility = "visible";
    document.getElementById('conteo').style.opacity = "1";
    document.getElementById('conteo').style.marginLeft = "-50%";
    setTimeout(function(){
    //mensaje
    document.getElementById('bullets').play();
    document.getElementById('conteo').innerHTML = "3";
        setTimeout(function(){
        
         document.getElementById('conteo').innerHTML = "2";
            setTimeout(function(){
             document.getElementById('conteo').innerHTML = "1";
            tiempoRandom = Math.floor((Math.random()*10)+1);
            tiempoRandom = tiempoRandom + "000";
            console.log(tiempoRandom);
            setTimeout(function(){
                document.getElementById('conteo').innerHTML = "YA!";
                setTimeout(function(){
                     document.getElementById('conteo').style.transition= ".3s all";
                    document.getElementById('conteo').style.visibility = "hidden";
                    document.getElementById('conteo').style.opacity = "0";
                    document.getElementById('conteo').style.marginLeft = "50%";
                    document.getElementById('conteo').innerHTML = "";
                    //disparo permitido
                    disparoPermitido = "si";
                    
                },100)
            },tiempoRandom)
            },1000)
        },1000)
    },1000);
    },5000);
}







