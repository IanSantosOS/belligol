// Importando a biblioteca HTTP
const http = require('http');
const url = require('url');

// Definindo o HOST e a PORTA a serem utilizados
const HOST = '127.0.0.1';
const PORT = 3000;

// Criando o Servidor WEB
const server = http.createServer((req, res) => {
  // Cabeçalho
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const parseURL = url.parse(req.url, true);

  let html =
  `
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #eeeeee;
      }
      td {
        padding: 3px 5px;
        border: 1px solid #000;
      }
      table {
        min-width: 100px;
        text-align: center;
        border: 1px solid #000;
        background-color: #ffffff;
      }
    </style>
  `
  html += "<h1>Tabela Multiplicacao</h1>"

  if (parseURL.pathname === '/') {
    html += '<p>Entre em <a href="/tabela">/tabela</a> para ver a tabuada de 0 a 10</p>'
    html += '<p> escreva: <a href="/tabela?num=1">/tabela?num=1</a> para uma tabuada expecifica</p>'
  }
  else if (parseURL.pathname === '/tabela') {
    const valor = Number(parseURL.query.num);

    if (valor) {
      html += '<table>'

      for (let i = 0; i <= 10; i++) {
        html += '<tr>'
        html += `<td>${valor} X ${i}</td>`
        html += `<td>${valor * i}</td>`
        html += '</tr>'
      }

      html += "</table>";
    }
    else {
      html += '<div style="display: flex; gap: 1em; flex-wrap: wrap">';

      for (let j = 0; j <= 10; j++) {
        html += '<table>';

        for (let i = 0; i <= 10; i++) {
          html += '<tr>';
          html += `<td>${j} X ${i}</td>`;
          html += `<td>${j * i}</td>`;
          html += '</tr>';
        }

        html += "</table>";
      }

      html += '</div>';
    }
  }

  // Corpo da resposta
  res.end(html);
});

// Ativando o Servidor WEB
server.listen(PORT, HOST, () => {
  console.log(`Server listening on port ${PORT}`);
});
