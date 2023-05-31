// mensagem de bem-vindo
// alert("Seja Bem-Vindo")(deixa comentado pra não ficar aparecendo toda vez que atualiza a pagina)



// Trocando para modo escuro ou claro
function modoclaro() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Modo escuro ligado";
  }
  function modoescuro() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Modo escuro desligado";
  }

// SLIDESHOW
/*criando um array de imagens  */
var imagens=[
    'images/macaco1.jpg',
    'images/macaco2.jpg',
    'images/macaco3.jpg',
];

/*declarando variaveis */
var Index =0;
var time =2000;

/* criando uma função */

function slideShow(){
    document.getElementById('image').src =imagens[Index]; /* pega  id e o caminho da imagem*/
    Index++;/* incrementa */
    if (Index == imagens.length){Index =0;} /* verifica se tem imagens e conta */
    setTimeout("slideShow()",time);/* definindo o tempo de 2 milesegundos*/
}

slideShow(); /* chamando a função */

let tmp


// rretornando a dara padrao navegador
let data7 = new Date()
document.write(data7.toLocaleDateString())
document.write("<br><br>")


// retornando o horario padrao navegador
function tempo() {
    // declarando variaveis
    let relogio = document.querySelector("#main");
    let hora = new Date();
    // chamando o relogio para aparecer na tela com 8 digitos
    relogio.innerHTML = (hora.toLocaleString()).slice(-8);
  }
  
  tempo();
  setInterval(tempo, 1000);
  
  

