function mudar() {
  let el = document.getElementById('butao');
  // alterando uma propriedade
  lista = [180, 200, 150, 550, 400, 580, 500]
  lista2 = [170, 387, 500, 700, 300, 756, 731]

  num = Math.floor(Math.random() * 6)
  num2 = Math.floor(Math.random() * 6)
  if (num != 6) {
    num = num + 1
  }
  console.log(num)
  console.log(num)
  // varias propriedades
  el.style.cssText =
          "position: absolute;" +
          "top: " + lista[num] + "px;" +
          "left: " + lista2[num2] + "px;" + 
          "z-index: -1;"

  //num = Math.random()
  //console.log(1)
}
function zueiro() {
  let el = document.getElementById('telao');
  el.style.cssText =
          "background-image: url(https://www.michaeloliveira.com.br/wp-content/webp-express/webp-images/uploads/2019/10/pisca-1.jpg.webp)"
  el = document.getElementById('txt1').textContent="Se você não me quer, tem quem queira 😏"
  el = document.getElementById('txt2').textContent="Vida de puta aí vou eu hehehe"
}

function sim() {
  let el = document.getElementById('telao');
  el.style.cssText =
          "background-image: url(https://p0.pikist.com/photos/629/596/moon-couple-night-love-woman-romantic-silhouette-sky-honeymoon.jpg)"
  el = document.getElementById('txt1').textContent="Te amo coisa chata"
  el = document.getElementById('txt2').textContent="Persistente até o fim hehehe"
}

//<br><br>
//      <img id="imagem" class="centro" src="https://static6.depositphotos.com/1064024/552/i/600/depositphotos_5525349-stock-photo-red-hearts-confetti.jpg" style="display: none;" alt=""></img>