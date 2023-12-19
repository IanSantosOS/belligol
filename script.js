const http = require("http");
const port = 80;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
        <h1>Belligol, Belligol, Bellingham!!!</h1>
        <img height="400" src="https://i.ytimg.com/vi/C9q6gWttToI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDHWaiaCdqYRuC1dt6dh-Wb5wB8pg"/>
        <img height="400" src="https://footure.com.br/wp-content/uploads/2023/09/Bellingham-Real-Madrid-260823.jpg"/>
    `);
});

server.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port} `);
});
