/*abrir card de mais informações */
function ver_mais(nome, especie, idade, cor, descricao, imagem_pet) {
  document.getElementById("nome").innerHTML = nome;
  document.getElementById("especie_vermais").innerHTML = especie;
  document.getElementById("idade_vermais").innerHTML = idade;
  document.getElementById("cor").innerHTML = cor;
  document.getElementById("descricao").innerHTML = descricao;
  document.getElementById("imagem_pet").src = imagem_pet;

  document.querySelector(".fundo_vermais").style.display = "flex";
}
/*fechar card de mais informações */
function fechar_ver_mais() {
  document.querySelector(".fundo_vermais").style.display = "none";
}

/*mostrar todos os cards de pets */
function mostrar_todos() {
  var animais = document.querySelectorAll(".pet");

  animais.forEach((animal) => {
    animal.style.display = "";
  });
}

/*filtro de cards de pets */

function selecionar() {
  var idade_pet = document.getElementById("idd").value;
  var especie_pet = document.getElementById("especie").value;
  var sex_pet = document.getElementById("sex").value;
  var animais = document.querySelectorAll(" .pet");

  animais.forEach((animal) => {
    var idade_verificar = animal.dataset.idade_pet;
    var especie_pet_verificar = animal.dataset.especie_pet;
    var sex_verificar = animal.dataset.sex_pet;

    if (
      idade_verificar === idade_pet &&
      especie_pet_verificar === especie_pet &&
      sex_verificar === sex_pet
    ) {
      animal.style.display = "";
    } else {
      animal.style.display = "none";
    }
  });
}

function adocao_solicitada() {
  document.querySelector(".fundo_vermais").style.display = "none";
  document.getElementById("container_adocao_solicitada").style.display = "flex";
}
function fechar_adocao_solicitada() {
  document.getElementById("container_adocao_solicitada").style.display = "";
}
