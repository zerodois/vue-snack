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

Vue.use(VueSnackbar)
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

```javascroipt
/**** Formas de utilização ****/

vm.$snack.metodo('Minha mensagem') // Exibe um snackbar sem botão de ação

vm.$snack.metodo(config) // Exibe um snackbar de acordo com o objeto informado

```

### Configuração
O objeto de configuração utilizado na exibição é simples e apresenta a seguinte estrutura:
```javascript
config = {
  text: String, // default ''
  button: String, // Default null
  action: Function // default null
}
```

### Demo

A seguir, consta o necessário para exibição dos snackbars para mensagens de sucesso, erro, e padrão. Vale ressaltar que apenas um snackbar é exibido por vez, como consta a [diretiva de snackbar](https://material.io/design/components/snackbars.html) criada pelo Google:
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
    }
  }
}
```

Snackbars gerados de sucesso, erro e padrão, sucessivamente:
![snackbars](/img/defaults.png)
