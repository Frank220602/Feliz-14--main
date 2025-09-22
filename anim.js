// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "When we're out in a crowd, laughing loud, and nobody knows why", time: 0.5, duration: 9 },
  { text: "When we're lost at a club, getting drunk, and you give me that smile", time: 11, duration: 9 },
  { text: "Going home in the back of a car and your hand touches mine", time: 23, duration: 9.5},
  { text: "When we're done making love and you look up and give me those eyes", time: 35.5, duration: 9.5 },
  { text: "'Cause all of the small things that you do", time: 47, duration: 6.5 },
  { text: "Are what remind me why I fell for you", time: 52.5, duration: 7 },
  { text: "And when we're apart and I'm missing you", time: 59, duration: 6.5},
  { text: "I close my eyes and all I see is you", time: 64.5, duration: 6.5},
  { text: "And the small things you do", time: 70.5, duration: 5 },
  { text: "When you call me at night while you're out getting high with your friends", time: 83.5, duration: 10 },
  { text: "'Every hi', 'every bye', 'every I love you you've ever said'", time: 95.5, duration: 9.5},
  { text: "'Cause all of the small things that you do", time: 107.5, duration: 6.5 },
  { text: "Are what remind me why I fell for you", time: 113, duration: 6.5 },
  { text: "And when we're apart and I'm missing you", time: 119.5, duration: 6.5 },
  { text: "I close my eyes and all I see is you", time: 125, duration: 6.5 },
  { text: "And the small things you do", time: 131.5, duration: 4.5 },
  { text: "When we're done making love and you look up and give me those eyes", time: 156, duration: 10 },
  { text: "'Cause all of the small things that you do", time: 167, duration: 6.5 },
  { text: "Are what remind me why I fell for you", time: 172.5, duration: 7 },
  { text: "And when we're apart and I'm missing you", time: 179, duration: 6.5 },
  { text: "I close my eyes and all I see is you", time: 184.5, duration: 7 },
  { text: "'And the small things you do'", time: 191.5, duration: 4.8 },
  { text: "'All the small things you do'", time: 203, duration: 4.8 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => {
      if (line.duration) {
        return time >= line.time && time < line.time + line.duration;
      } else {
        return time >= line.time && time < line.time + 6;
      }
    }
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.5; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 100);

//funcion titulo
// Función para ocultar el título después de 230 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 230segundos (230,000 milisegundos)
setTimeout(ocultarTitulo, 230000);