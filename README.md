# Belligol
Belligol, Belligol, Bellingham

![Belligol Image](./belligol-server.png)

## Links

- [A Guide to npm install: Types, Meanings, and Flags](https://codedaddy.hashnode.dev/a-guide-to-npm-install-types-meanings-and-flags)

## Anotações

### Pacotes Instalados

  npm i -D nodemon

### NPM
**`npm init`** -> Cria um package.json padrão.

**`npm init -y`** -> Cria um package.json padrão aceitando todas as perguntas (yes).

**`npm i`** ou **`npm install`** -> Instala as dependências descritas no package.json.

**`npm i -g`** ou **`npm i --global`** -> Instala um pacote globalmente, tornando-o disponível em todo o sistema.

**`npm i --save`** -> Instala e adiciona um na lista de dependências no package.json. Hoje só o `npm i` salva os pacotes sem a necessidade dessa flag.

**`npm i --save-exact`** ou **`npm i -E`** -> Instala a versão exata do pacote descrita no package.json.

**`npm i --save-dev`** ou **`npm i -D`** -> Instala e adiciona o pacote na lista de dependências de desenvolvimento no package.json, ou seja, o pacote é usado ​​especificamente para fins de desenvolvimento e não são necessário para o ambiente de produção.

**`npm i --no-save <pacote>`** -> Instala um pacote mas não o adiciona na lista de dependências no package.json.

**`npm i --force`** ou **`npm i -f`** -> Força a instalação de um pacote, mesmo se ele não atender aos requisitos de versão.

**`npm i --production`** -> Instala apenas as dependências necessárias para executar o aplicativo em produção, excluindo as dependências de desenvolvimento.

**`npm i --no-optional`** ou **`npm i --no-op`** -> Ignora as dependências opcionais durante a instalação. Isso pode ser útil se você quiser instalar apenas as dependências essenciais.

**`npm i --ignore-scripts`** -> Impede a execução de scripts pós-instalação.

**`npm i --dry-run`** ou **`npm i -n`** -> Executa uma simulação da instalação, exibindo o que seria instalado sem realmente instalar os pacotes.

**`npm i --registry=https://site.com`** -> Especifica um registry npm diferente. Útil se você precisar instalar pacotes de um registry personalizado.

**`npm i <pacote>@<versao>`** -> Instala uma versão específica de um pacote.

**`npm i <pacote>@latest`** -> Instala última versão de um pacote.
