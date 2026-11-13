/* ===== Acessibilidade: alto contraste + tamanho da fonte ===== */

// Níveis de tamanho: 100%, 125%, 150%, 175%, 200%
var NIVEIS_FONTE = [1, 1.25, 1.5, 1.75, 2];

var nivelFonte = 0;
var contrasteAtivo = false;

// Lê o que o visitante escolheu antes (se o navegador permitir)
try {
  nivelFonte = parseInt(localStorage.getItem("pf_nivel_fonte")) || 0;
  contrasteAtivo = localStorage.getItem("pf_contraste") === "1";
} catch (e) {
  // sem localStorage, começa do padrão
}

function salvarPreferencias() {
  try {
    localStorage.setItem("pf_nivel_fonte", nivelFonte);
    localStorage.setItem("pf_contraste", contrasteAtivo ? "1" : "0");
  } catch (e) {
    // ignora se não puder salvar
  }
}

// Cria o painel de botões no canto da tela
function criarPainel() {
  var painel = document.createElement("div");
  painel.id = "painel-acessibilidade";
  painel.innerHTML =
    "<p>Acessibilidade</p>" +
    '<button id="pf-contraste" type="button" aria-pressed="false">Alto contraste</button>' +
    '<button id="pf-aumentar" type="button">Aumentar fonte (A+)</button>' +
    '<button id="pf-diminuir" type="button">Diminuir fonte (A-)</button>' +
    '<button id="pf-resetar" type="button">Tamanho normal</button>';
  document.body.appendChild(painel);
}

// Guarda o tamanho original de cada texto e aplica a escala
// (usa o tamanho original sempre, então nada "acumula")
function aplicarFonte() {
  document.body.classList.toggle("fonte-ampliada", nivelFonte > 0);

  var elementos = document.querySelectorAll("body *");

  elementos.forEach(function (el) {
    if (el.closest("#painel-acessibilidade")) return;

    if (el.dataset.fonteOriginal === undefined) {
      el.dataset.fonteOriginal = parseFloat(getComputedStyle(el).fontSize);
    }

    if (nivelFonte === 0) {
      el.style.fontSize = ""; // volta ao CSS original
    } else {
      el.style.fontSize =
        parseFloat(el.dataset.fonteOriginal) * NIVEIS_FONTE[nivelFonte] + "px";
    }
  });
}

// Liga ou desliga o contraste
function aplicarContraste() {
  document.body.classList.toggle("alto-contraste", contrasteAtivo);
  document
    .getElementById("pf-contraste")
    .setAttribute("aria-pressed", contrasteAtivo ? "true" : "false");
}

function iniciarAcessibilidade() {
  criarPainel();
  aplicarContraste();
  aplicarFonte();

  document.getElementById("pf-contraste").addEventListener("click", function () {
    contrasteAtivo = !contrasteAtivo;
    aplicarContraste();
    salvarPreferencias();
  });

  document.getElementById("pf-aumentar").addEventListener("click", function () {
    if (nivelFonte < NIVEIS_FONTE.length - 1) {
      nivelFonte++;
      aplicarFonte();
      salvarPreferencias();
    }
  });

  document.getElementById("pf-diminuir").addEventListener("click", function () {
    if (nivelFonte > 0) {
      nivelFonte--;
      aplicarFonte();
      salvarPreferencias();
    }
  });

  document.getElementById("pf-resetar").addEventListener("click", function () {
    nivelFonte = 0;
    aplicarFonte();
    salvarPreferencias();
  });
}

document.addEventListener("DOMContentLoaded", iniciarAcessibilidade);
