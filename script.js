const http = require("http");
const PORT = 80;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
      <style>
        img {
          height: 192.5px;
        }
      </style>
      <h1>Belligol, Belligol, Bellingham!!!</h1>
      <img src="https://i.ytimg.com/vi/C9q6gWttToI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDHWaiaCdqYRuC1dt6dh-Wb5wB8pg"/>
      <img src="https://footure.com.br/wp-content/uploads/2023/09/Bellingham-Real-Madrid-260823.jpg"/>
      <br>
      <iframe title="DVD" src="https://pranx.com/bouncing-dvd-screensaver/" width="100%" height="73%"></iframe>
    `);
});

server.listen(PORT, () => {
  console.log(`Servidor escutando em http://localhost:${PORT} `);
});
