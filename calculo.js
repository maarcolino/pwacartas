/**
 * Função para sortear uma carta
 * @author Enzo Marcolino
 */

let jogadores = [
    { nome: "Alex Sandro", numero: "Camisa 6", imagem: "./img/Alex Sandro.jfif" },
    { nome: "Alisson", numero: "Camisa 1", imagem: "./img/Alisson.jfif" },
    { nome: "Antony", numero: "Camisa 18", imagem: "./img/Antony.jfif" },
    { nome: "Casemiro", numero: "Camisa 5", imagem: "./img/Casemiro.jfif" },
    { nome: "Danilo", numero: "Camisa 2", imagem: "./img/Danilo.jfif" },
    { nome: "Eder Militão", numero: "Camisa 14", imagem: "./img/Eder Militao.jfif" },
    { nome: "Ederson", numero: "Camisa 23", imagem: "./img/Ederson.jfif" },
    { nome: "Fabinho", numero: "Camisa 15", imagem: "./img/Fabinho.jfif" },
    { nome: "Fred", numero: "Camisa 8", imagem: "./img/Fred.jfif" },
    { nome: "Gabriel Jesus", numero: "Camisa 19", imagem: "./img/Gabriel Jesus.jfif" },
    { nome: "Lucas Paquetá", numero: "Camisa 7", imagem: "./img/Lucas Paqueta.jfif" },
    { nome: "Marquinhos", numero: "Camisa 4", imagem: "./img/Marquinhos.jfif" },
    { nome: "Neymar Jr", numero: "Camisa 10", imagem: "./img/Neymar Jr.jfif" },
    { nome: "Raphinha", numero: "Camisa 11", imagem: "./img/Raphinha.jfif" },
    { nome: "Richarlison", numero: "Camisa 9", imagem: "./img/Richarlison.jfif" },
    { nome: "Thiago Silva", numero: "Camisa 3", imagem: "./img/Thiago Silva.jfif" },
    { nome: "Vinícius Jr", numero: "Camisa 20", imagem: "./img/Vinicius Jr.jfif" },
  ];
  

  function sortearCarta() {

    let jogadorSorteado = jogadores[Math.floor(Math.random() * jogadores.length)];

    document.getElementById("meio").innerHTML = `<div> ${jogadorSorteado.numero} </div> <div> ${jogadorSorteado.nome} </div>`;

    document.getElementById("centro").innerHTML = `<img src="${jogadorSorteado.imagem}" alt="${jogadorSorteado.nome}">`;
  }