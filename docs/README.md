# Vue Snackbar

A Vue.JS plugin for creating and displaying [snackbars](https://material.io/design/components/snackbars.html) following the material design policies created by Google.

# Install

Install from npm:
```console
npm install --save vue-snack
```
```javascript
import Vue from 'vue'
import VueSnackbar from 'vue-snack' 

Vue.use(VueSnackbar, options = {})
```
Or from CDN:

```html
<head>
  <link rel="stylesheet" href="https://unpkg.com/vue-snack/dist/vue-snack.min.css">  
  <script src="https://unpkg.com/vue/dist/vue.min.js"></script>
  <script src="https://unpkg.com/vue-snack/dist/vue-snack.min.js"></script>
</head>
```

# Use
The plugin provides the `$snack` property in all components, this property contains all the methods configured to display the desired snackbar.

By default, the plugin contains three main display methods: `success`,` danger` and `show`. These methods present snackbars with preconfigured colors for success messages, error messages and standard messages, respectively. The text of the message in all cases have the same color, but the action button present in the snackbar varies in color depending on the method called.

Each method receives as a parameter a message string, or a configuration object. In case a string is received, the snackbar is only displayed with the text entered, without displaying an action button.

```javascript
/**** Using ****/

vm.$snack.metodo('My Message') // Displays a snackbar without action button

vm.$snack.metodo(config) // Displays a snackbar according to the given object

```

## Configure

The configuration object used in the presentation is simple and has the following structure:
```javascript
config = {
  text: String, // default ''
  button: String, // Default null
  action: Function // default null
}
```

## Personalize

### Creating methods

During the installation of the plugin, a configuration object is optional. The object in question can contain the `"methods"` key, which has the methods that can be executed from the `$snack` in each component. Each method in array must contain an associated color.

In addition, it is possible to inform the location that the snackbar will appear. Another configuration parameter is `"time"`, which specifies how many milliseconds the snackbar should be displayed. According to Google, a snackbar should last at least 5 and at most 10 seconds. The default value is 7.5 seconds.

Based on the new Gmail layout, the option to close the snackbar was made available. To the close icon be displayed, the `"close"` key must be set to `true` (the default is `false`).

![snackbars](https://raw.githubusercontent.com/zerodois/vue-snackbar/master/docs/img/close-icon.png "Snackbar with close button")

The following is an example of a configuration object. If the `"methods"` key is undefined, the available methods are ` show`, `success` and` danger`, as previously stated.


```javascript
{
  // Possible values: 'top', 'top-left', 'top-right', 'bottom', 'bottom-left'
  // default 'bottom'
  position: String,
  // default 7500
  time: Number,
  // default false
  close: Boolean,
  // default []
  methods: [
    {
      // default ''
      name: String,
      // Any valid HTML color
      // default '#ecf0f1'
      color: String
    }
  ]
}
```

## Demo

The following is what is needed to display snackbars for success, error, and default messages, in addition to a custom created by the user. It is noteworthy that only one snackbar is displayed at a time, as is the [snackbar directive](https://material.io/design/components/snackbars.html) created by Google:

[online demo](https://jsfiddle.net/zerodois/a8fp2n6j)

In plugin installation:
```javascript
import Vue from 'vue'
import VueSnackbar from 'vue-snack' 

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
        text: 'Conversa arquivada',
        button: 'desfazer',
        action: this.clickAction
      })
    },
    notOk () {
      this.$snack.danger({
        text: 'Erro ao salvar fotos',
        button: 'refazer',
        action: this.clickAction
      })
    },
    potato () {
      this.$snack.show({
        text: 'Usuário adicionado',
        button: 'desfazer',
        action: this.clickAction
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

Snackbars generated success, error, standard and customized, successively:
![snackbars](https://raw.githubusercontent.com/zerodois/vue-snackbar/master/docs/img/defaults.png)

Snackbar on phone screen:

![snackbars](https://raw.githubusercontent.com/zerodois/vue-snackbar/master/docs/img/responsive.png "Snackbar on phone screen")

