function linkLongo(){
  var nomeDoLink = document.getElementById("caixa1").value;
  fetch(`https: ulvis.net/API/read/get:${caixa1}`)
  .then(response => response.json())
  .then(data => mostrarLink)
  .catch(error => console.error('Erro:', error));
}


function linkCurto(){
  var Novonome = document.getElementById("caixa2").value;
  fetch(`https:ulvis.net/API/write/get:${caixa2}`)
  .then(response => response.json())
  .then(data => mostrarLink)
  .catch(error => console.error('Erro:', error));
}

function mostrarLink(data){
  var mostrarLink = document.getElementById("mostrarLink");
  mostrarLink.innerHTML = "";

  if (data.data.length == 0){
    mostrarLink.innerHTML = "<p>Link incompatível</p>";
    return;
  }

}

