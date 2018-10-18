# Vue Cookbook
## Instance Properties

```js
// available to all Vue instances
Vue.prototype.$appName = 'My App'
```

## Fancy
### Transition
```html
<div id="demo">
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>
```
```css
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
```


* v-enter: starting state
* v-enter-active
* v-enter-to
* v-leave
* v-leave-active
* v-leave-to

