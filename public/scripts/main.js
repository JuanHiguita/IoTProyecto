var database = firebase.database();

//definimos y enviamos el estado del led
function updateLedState(state) {
      firebase.database().ref('/').update({
          EstadoLed: state
      });
  }

//Mostramos la info de la base de datos en pantalla
function paintData(snapshot){
    flama = document.getElementById('flamaData');
    humedad = document.getElementById('humedadData');
    tempt = document.getElementById('temptData');
    distancia = document.getElementById('distanciaData');

    flamaState = document.getElementById('flamaState');

    if (snapshot.flama == 1){
        flamaState.innerHTML = "No Flama";
    }
    else {
        flamaState.innerHTML = "Hay Flama";
    }

    flama.innerHTML = snapshot.flama;
    humedad.innerHTML = snapshot.humedad;
    tempt.innerHTML = snapshot.temperatura;
    distancia.innerHTML = snapshot.distancia;
}

//leemos la data que esta en la base de datos
var readData = database.ref('/');
readData.on('value', (snapshot) => {
    paintData(snapshot.val());
});


var buttonOn = document.getElementById('buttonOn');
buttonOn.addEventListener("click", () => {
    updateLedState(1);
    console.log("El led esta encendido");
});


var buttonOff = document.getElementById('buttonOff');
buttonOff.addEventListener("click", () => {
    updateLedState(0);
    console.log("El led esta apagado");
});