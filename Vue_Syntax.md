# Vue Syntax
## Vue Instance
```js
new Vue({
  data: {},    // 2-way binding
  
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
