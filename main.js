const form = document.getElementById("my-form");

function validaName(nomeCompleto) {
  const nomeComoArray = nomeCompleto.split(" ");
  return nomeComoArray.length >= 2;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nomeUsuario = document.getElementById("name").value;
  const emailUsuario = document.getElementById("email").value;
  const mensagemSucesso = `Cadastro realizado com sucesso, muito obrigado ${nomeUsuario}`;

  if (validaName(nomeUsuario)) {
    document.getElementById("register__success").style.display = "block";
    document.getElementById("register__success").textContent = mensagemSucesso;

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("mensagem").value = "";

    document.getElementById("button-submit").classList.add("esconde");
  } else {
    alert("Nome inválido - Verifique se você digitou seu nome completo.");
  }
});
