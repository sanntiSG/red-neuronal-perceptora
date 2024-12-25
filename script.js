// ANIMACION DE TEXTOS
//TITULO
var textWrapper = document.querySelector('.titulo .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.titulo .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.titulo',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



//SUBDIVISIONES

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  var textWrapper = document.querySelector('.ml112 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
  

/*subdivision 2 */

  anime.timeline({loop: true})
    .add({
      targets: '.ml112 .line',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700
    })
    .add({
      targets: '.ml112 .line',
      translateX: [0, document.querySelector('.ml112 .letters').getBoundingClientRect().width + 10],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    }).add({
      targets: '.ml112 .letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=775',
      delay: (el, i) => 34 * (i+1)
    }).add({
      targets: '.ml112',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
  









var modelo = null;
        
// Cargar el modelo entrenado
(async() => {
    console.log("Cargando el modelo...");
    modelo = await tf.loadLayersModel("model.json");
    console.log("Modelo cargado!");
})();


const btn = document.getElementById("btn");

btn.onclick = () => {
    var interesingenieria = document.getElementById('interesingenieria').value;
    var cienciasExactas = document.getElementById('cienciasExactas').value;
    var cienciasSociales = document.getElementById('cienciasSociales').value;
    var arte = document.getElementById('arte').value;
    var calculo = document.getElementById('calculo').value;
    var comunicacion = document.getElementById('comunicacion').value;
    var promedio = document.getElementById('promedio').value;
    var trabajoAireLibre = document.getElementById('trabajoAireLibre').value;
    var trabajoOficina = document.getElementById('trabajoOficina').value;
    var medicina = document.getElementById('medicina').value;
    var trabajarConPersonas = document.getElementById('trabajarConPersonas').value;
    var trabajoSolo = document.getElementById('trabajoSolo').value;
    var tecnologiaInnovacion = document.getElementById('tecnologiaInnovacion').value;
    var negociosEconomia = document.getElementById('negociosEconomia').value;
    var explicarEnsenar = document.getElementById('explicarEnsenar').value;
    var estudiosDocencia = document.getElementById('estudiosDocencia').value;
    var capacitar = document.getElementById('capacitar').value;
    var brindarApoyo = document.getElementById('brindarApoyo').value;
    var desarrollar = document.getElementById('desarrollar').value;

    if(modelo != null) {
        console.log("Valores capturados:");
        // Log de valores (opcional)
        
        var tensor = tf.tensor2d([[parseInt(interesingenieria), parseInt(cienciasExactas), parseInt(cienciasSociales), parseInt(arte), parseInt(calculo), parseInt(comunicacion), parseFloat(promedio), parseInt(trabajoAireLibre), parseInt(trabajoOficina), parseInt(medicina), parseInt(trabajarConPersonas), parseInt(trabajoSolo), parseInt(tecnologiaInnovacion), parseInt(negociosEconomia), parseInt(explicarEnsenar), parseInt(estudiosDocencia), parseInt(capacitar), parseInt(brindarApoyo), parseInt(desarrollar)]]);

        var prediccion = modelo.predict(tensor).dataSync();
        var carrera = ['Ingeniería', 'Medicina', 'Derecho/Negocios', 'Arte', 'Ayuda Social', 'Educación', 'Ciencias de la Computación'];
        var indice = prediccion.indexOf(Math.max(...prediccion)); // Encuentra el índice con mayor probabilidad
        var carreraSeleccionada = carrera[indice];

        // Redirige a la página resultado.html con el nombre de la carrera
        window.location.href = `resultado.html?carrera=${carreraSeleccionada}`;
    } else {
        document.getElementById("resultado").innerHTML = "Intenta de nuevo en un rato...";
    }
}



