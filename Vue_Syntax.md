# Vue Syntax
## Vue Instance
```js
new Vue({
  el: '#anID',      // binding element
  data: {},         // 2-way binding
  computed: {,      // cached based on dependencies
    fullname: {
      get: {},      // getter by default
      set: {}       // setter
    }
  },
  methods: {},      // not cahced
  watch: {          // fired whenever watched prop changed
    watchedProp: {} 
  },                 
})
```

## HTML
```html
<!-- text -->
<span v-once>Message: {{ msg }} is {{ ok ? 'YES' : 'NO' }}</span>

<!-- rawhtml in directive -->
<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>

<!-- attr -->
<button v-bind:disabled="isButtonDisabled">Button</button>
<a v-bind:href="url"> ... </a>
<a :href="url"> ... </a>

<!-- events -->
<a v-on:click="doSomething"> ... </a>
<form v-on:submit.prevent="onSubmit"> ... </form>
<a @click="doSomething"> ... </a>

<!-- directives -->
<p v-if="seen">Now you see me</p>
```
