function ver_mais(nome,especie,idade,cor,descricao,imagem_pet){
    document.getElementById("nome").innerHTML=nome;
    document.getElementById("especie").innerHTML=especie;
    document.getElementById("idade").innerHTML=idade;
    document.getElementById("cor").innerHTML=cor;
    document.getElementById("descricao").innerHTML=descricao;
    document.getElementById("imagem_pet").src=imagem_pet

    document.querySelector(".fundo_vermais").style.display="flex";
}
function fechar_ver_mais(){
    document.querySelector(".fundo_vermais").style.display="none";
}