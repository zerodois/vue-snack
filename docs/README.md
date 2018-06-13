# Vue Snackbar

Um plugin Vue.JS para criação e exibição de [snackbars](https://material.io/design/components/snackbars.html) seguindo as diretivas de material design criadas pelo Google.

# Instalação

Instale a partir do npm:
```console
npm install --save vue-snackbar
```
```javascript
import Vue from 'vue'
import VueSnackbar from 'vue-snackbar' 

Vue.use(VueSnackbar, options = {})
```
Ou anexe ao partir do CDN:

```html
<head>
  <link rel="stylesheet" href="https://unpkg.com/vue-snackbar/dist/vue-snackbar.min.css">  
  <script src="https://unpkg.com/vue/dist/vue.min.js"></script>
  <script src="https://unpkg.com/vue-snackbar/dist/vue-snackbar.min.js"></script>
</head>
```

# Uso
O plugin disponibiliza em todos os componentes a propriedade `$snack` em sua raiz, que por sua vez, contém todos os métodos configurados para exibir o snackbar desejado.

Por padrão, o plugin contém dois três métodos principais de exibição: `success`, `danger` e `show`. Esses métodos apresentam snackbars com cores pré-configuradas para mensagens de sucesso, erro e mensagens padrão, respectivamente. O texto da mensagem em todos os casos apresentam a mesma cor, mas o botão de ação presente na snackbar varia de cor dependendo do método chamado.

Cada método recebe como parâmetro uma string de mensagem, ou ainda, um objeto de configuração. No caso de uma string ser recebida, a snackbar é exibida apenas com o texto informado, sem apresentar botão de ação.

```javascript
/**** Formas de utilização ****/

vm.$snack.metodo('Minha mensagem') // Exibe um snackbar sem botão de ação

vm.$snack.metodo(config) // Exibe um snackbar de acordo com o objeto informado

```

## Configuração
O objeto de configuração utilizado na exibição é simples e apresenta a seguinte estrutura:
```javascript
config = {
  text: String, // default ''
  button: String, // Default null
  action: Function // default null
}
```

## Personalização

### Criando meus métodos

Durante a instalação do plugin, um objeto de configuração é opcional. O objeto em questão pode conter a chave `"methods"`, que possui os métodos que podem ser executados a partir do `$snack` em cada componente. Cada método informado precisa conter uma cor associada.

Além disso, é possível informar a localização que o snackbar irá aparecer. Outro parâmetro de configuração é o `"time"`, que especifica quantos milisegundos o snackbar deve ser exibido. Segundo o Google, um snackbar deve durar no mínimo 5 e no máximo 10 segundos. O valor padrão é 7.5 segundos.

. Segue um exemplo de objeto de configuração. Se a chave `"methods"` não é informada, os métodos disponíveis são os padrão informados anteriormente (`show`, `success` e `danger`).


```javascript
{
  // Valores possíveis: 'top', 'top-left', 'top-right', 'bottom', 'bottom-left' e 'bottom-right'
  // default 'bottom'
  position: String,
  // default 7500
  time: Number,
  // default []
  methods: [
    {
      // default ''
      name: String,
      // Qualquer cor HTML válida
      // default '#ecf0f1'
      color: String
    }
  ]
}
```

## Demo

A seguir, consta o necessário para exibição dos snackbars para mensagens de sucesso, erro, e padrão, além de um personalizado criado pelo usuário. Vale ressaltar que apenas um snackbar é exibido por vez, como consta a [diretiva de snackbar](https://material.io/design/components/snackbars.html) criada pelo Google:

Na instalação do plugin:
```javascript
import Vue from 'vue'
import VueSnackbar from 'vue-snackbar' 

Vue.use(VueSnackbar, {
  methods: {
    name: 'myMethod',
    color: 'hotpink'
  }
})
```

```javascript
export default {
  methods: {
    ok () {
      this.$snack.success({
        text: 'Deu tudo certo por aqui',
        button: '',
        action: this.acaoDoBotao
      })
    },
    notOk () {
      this.$snack.danger({
        text: 'Deu tudo certo por aqui',
        button: '',
        action: this.acaoDoBotao
      })
    },
    potato () {
      this.$snack.show({
        text: 'Deu tudo certo por aqui',
        button: '',
        action: this.acaoDoBotao
      })
    },
    creamCheese () {
      this.$snack.myMethod({
        text: 'Esse site utiliza cookies bauducco',
        button: 'Entendi'
      })
    }
  }
}
```

Snackbars gerados de sucesso, erro, padrão e customizado, sucessivamente:
![snackbars](/img/defaults.png)

