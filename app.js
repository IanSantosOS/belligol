// Importando a biblioteca HTTP
const http = require('http');
const url = require('url');

// Definindo o HOST e a PORTA a serem utilizados
const HOST = '127.0.0.1';
const PORT = 3000;

// Criando o Servidor WEB
const server = http.createServer((req, res) => {
    // Cabeçalho
    res.writeHead(200, {'Content-Type': 'text/html'});

    const parseURL = url.parse(req.url, true);

    let html = "<h1>Titulo Multiplicacao</h1>"
    if (parseURL.pathname === '/tabela') {
        const valor = parseURL.query.numero
        html += '<table border="1">'
        for (let i = 0; i <= 10; i++) {
            html +=
            `<tr>
            <td>${valor} X ${i}</td>
            <td>${valor * i}</td>
            </tr>`
        }
        html += "</table>"
    }
    else {
        html = '<div style="display: flex">'
        
        for (let j = 0; j <= 10; j++) {
            html += '<table border="1">'
            for (let i = 0; i <= 10; i++) {
                html +=
                `<tr>
                <td>${j} X ${i}</td>
                <td>${j * i}</td>
                </tr>`
            }
            html += "</table>"
        }

        html = '</div>'
    }


    // Corpo da resposta
    res.end(html);
});

// Ativando o Servidor WEB
server.listen(PORT, HOST, () => {
    console.log(`Server listening on port ${PORT}`);
});
