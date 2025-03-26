//Preencher automático
function criaLinha(usuario) {
  document.getElementById("id").value = usuario.id;
  document.getElementById("nome").value = usuario.nome;
  document.getElementById("email").value = usuario.email;
}

function doGet() {
  return "GET";
}

function doPost() {
  return "POST";
}

function doPut() {
  return "PUT";
}

function doDelete() {
  return "DELETE";
}

function doFindById() {
  let n = document.getElementById("id").value;
  return n;
}

async function clienteDados(minhaFuncao) {
  let n = doFindById();

  const url = `http://localhost:3000/student/${n}`;
  const urls = `http://localhost:3000/student`;

  console.log(n);

  let rest;

  rest = minhaFuncao;

  let id = document.getElementById("id").value;
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;

  const object = { id, nome, email};

  const myInitGet = {
    method: rest,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const myInitPost = {
    method: rest,
    body: JSON.stringify(object),
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (rest === "GET") {
    const dados = await fetch(url, myInitGet);
    const elens = await dados.json();
    criaLinha(elens);
  } else if (rest === "POST") {
    const dados = await fetch(url, myInitPost);
    const elens = await dados.json();
    criaLinha(elens);
  } else if (rest === "DELETE") {
    const dados = await fetch(urls, myInitPost);
    const elens = await dados.json();
    criaLinha(elens);
  } else {
    const dados = await fetch(urls, myInitPost);
    const elens = await dados.json();
    criaLinha(elens);
  }
}
