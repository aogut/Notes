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
<div v-bind:class="{ active: isActive }"></div>
<div v-bind:class="obj"></div>  <!-- obj: { active: true, 'text-danger': false } -->
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
<div v-bind:style="{ color: c, fontSize: s + 'px' }"></div> <!-- data: { c: 'red', s: 30 }  -->

<a :href="url"> ... </a>

<!-- events -->
<a v-on:click="doSomething"> ... </a>
<form v-on:submit.prevent="onSubmit"> ... </form>   <!-- modifier prevent calls event.preventDefault() on event -->
<a @click="doSomething"> ... </a>

<!-- directives -->
<p v-if="seen">Now you see me</p>
```
