const http = require("http");
const port = 80;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
      }
      html, body { height: 100dvh; width: 100% }
      h1 { padding: 0 10px 10px 10px }
      img { height: 144.7px }
      body {
        display: flex;
        align-items: center;
        flex-direction: column;
        overflow: hidden;
        padding: 10px;
      }
      iframe {
        width: 635.86px;
        border: none;
        height: 100%;
        width: 479.16px;
      }
      .images {
        display: flex;
        margin-bottom: 5px;
        gap: 5px;
      }
    </style>
    <h1>Belligol, Belligol, Bellingham!!!</h1>
    <div class="images">
      <img src="https://i.ytimg.com/vi/C9q6gWttToI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDHWaiaCdqYRuC1dt6dh-Wb5wB8pg"/>
      <img src="https://footure.com.br/wp-content/uploads/2023/09/Bellingham-Real-Madrid-260823.jpg"/>
    </div>
    <iframe title="DVD" src="https://pranx.com/bouncing-dvd-screensaver/"></iframe>
  `);
});

server.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
