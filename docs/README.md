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

Por padrão, o plugin contém dois três métodos principais de exibição: `success`, `danger` e `show`. Esses métodos apresentam snackbars com cores pré-configuradas para mensagens de sucesso, erro e mensagens padrão, respectivamente.

## Demo
