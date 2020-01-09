<p style="text-align: center">
  <img src=".github/logo.svg" alt="Logo Before" width="220px">
</p>

Releases do Projeto:

- React Native [Documentação](https://facebook.github.io/react-native/docs/getting-started)
- Expo [Documentação](https://docs.expo.io/versions/latest/)
- React Hooks [Documentação](https://pt-br.reactjs.org/docs/hooks-intro.html)
- React Navigation [Documentação](https://reactnavigation.org/docs/en/getting-started.html)
- Redux [Documentação](https://redux.js.org)
- Redux Saga [Documentação](https://redux-saga.js.org/)
- Styled Components [Documentação](https://www.styled-components.com/docs)
  - Polished: [Documentação](https://polished.js.org/docs/)

<i style="color: #2980b9">Para manter a qualidade de código utilizamos algumas bibliotecas de padrões de código.</i>

IDE e Plugins Recomendados:

- Visual Studio Code: [Download](https://code.visualstudio.com/Download)
- <strong>Settings</strong>:
  - CTRL + SHIFT + P
  - Open Settings (JSON)
  - File [settings.json](https://gist.github.com/ppanissa/88262e71746262316a126dc48fc048c7)
- Font Family: [Fira Code](https://github.com/tonsky/FiraCode)
- Thema: [Dracula](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)
- Icons [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- Debug (React + Redux + Redux Saga) [Download](https://github.com/infinitered/reactotron/releases)
- Addons Obrigatórios:

  - [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Styled Components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

```sh
$ git clone https://github.com/ppanissa/VivoGOApp path-name
$ cd path-name
# Instale as dependências
$ yarn
# Crie arquivo de configuração
$ cd config
# Clone o arquivo .example.json
$ cp .example.json development.json # ou production.json
#
# Exemplo:
#
# {
#  "api": "https://apisunr-beta.before.com.br/api/v1",
#  "syscor": "https://syscor-homologacao.before.com.br/api",
#  "token_syscor": "MTUyNzcyMDgyMzo0MkQ2MTFENzg5Q0QxOjE0NzMzOGE5YmZiMjlkOThmMmU1MDg1MTYyZDc2ZDdiYzYyYmQ1ODU="
#}
# Dev
$ yarn start
# Build para Android
$ yarn build:android
# Build para iOS
$ yarn build:ios
```
