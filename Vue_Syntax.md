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
<form v-on:submit.prevent="onSubmit"> ... </form> <!-- modifier prevent calls event.preventDefault() on event -->
<a @click="doSomething"> ... </a>

<!-- directives -->
<p v-if="seen">Now you see me</p>
<p v-else="seen">Now you don't see me</p>
<p v-show="!hidden">Now you see me</p>

<div v-for="(value, key, index) in object">
  {{ index }}. {{ key }}: {{ value }}
</div>
```

### Forms
```html
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>

<textarea v-model="message2" placeholder="add multiple lines"></textarea>
<p style="white-space: pre-line;">{{ message }}</p>

<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>

<input type="checkbox" v-model="toggle" true-value="yes" false-value="no">  <!-- vm.toggle === 'yes' when checked -->
```

* form input modifiers: lazy, number, trim

### Modifiers
* event modifiers: stop, prevent, capture, self, once, passive
* key modifiers: enter, tab, delete, esc, space, up, down, left, right
* customer key modifiers: ```Vue.config.keyCodes.f1 = 112 ``` to enable @keyup.f1
* system modifier: ctrl, alt, shift, meta  ```<div @click.ctrl='doSomething'>Do Something</div>```


## Caveats on Array
* push, pop, shift, unshift, splice, sort, reverse are mutation methods and they will trigger view updates
* filter, concat, slice returns a new array and Vue will detect changes and perform partial DOM update

```js
var vm = new Vue({
  data: {
    name: 'Anika',
    items: ['a', 'b', 'c']
  }
})

vm.items[2] = 'new'             // not
vm.$set(vm.items, 2, 'new')     // reactive


vm.age = 27                     // not
vm.$set(vm, 'age', 27)          // reactive
```


## Components
* custom element inside a root Vue instance
* all components need to be registered: globally or locally
```
// parent
new Vue({
  el: '#blog-demo',
  data: {
    posts: [{}, {}],
    postFontSize: 1
  },
  methods: {
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount
    }
  }  
})

// component
Vue.component.('blog-post' {
  props: [],
  template: '
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button @click="$emit('enlarge-text', 0.1)">
        Enlarge text
      </button>
    </div>  
  ' 
})

$emit('custom-event', params)       // sending msg back to parent
$event                              // accessing event's params at parent
```

```html
<blog-post @enlarge-text="postFontSize += $event"></blog-post>      <!-- handle at declaration -->
<blog-post @enlarge-text="onEnlargeText"></blog-post>               <!-- handle with a parent method -->
```

