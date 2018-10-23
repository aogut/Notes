## Store 
```js
const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ],  
    count: 0
  },
  
  // call store.commit('mutator-by-name', args) to change state
  mutations: {
    increment (state) {
      state.count++
    },
    incrementBy (state, n) {
      state.count += n
    },
    incrementByObject (state, payload) {
      state.count += payload.amount
    }
  },
  
  // centralizing computed from Components to store
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    
    // this allows calls like store.getters.getTodoById(2)
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    },
    todoCount: state => {
      return state.todos.length
    }
  },
  
  // actions allow async ops; call store.dispatch('function-by-name')
  actions: {
    increment (context) {
      context.commit('increment')
    },
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  }
})
```

#### Change State ####
```js
// change state by mutators
store.commit('increment')
store.commit('incrementBy', 10)
store.commit('incrementByObject', {
  amount: 10
})
store.commit({
  type: 'incrementByObject',
  amount: 10
})


// change state by actions
store.dispatch('increment')
store.dispatch({
  type: 'incrementAsync',
  amount: 10
})

console.log(store.state.count)

// get values from Component
this.$store.state.count
```

## Modules
```js
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> `moduleA`'s state
store.state.b // -> `moduleB`'s state
```


## Helpers
```js
import { mapState } from 'vuex'

export default {
  computed: mapState({
    count: state => state.count,
    countAlias: 'count',
    
    // to access local state with `this`, a normal function must be used
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })
}
```

