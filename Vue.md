#### Store ####
```js
const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ],  
    count: 0
  },
  
  // this changes state
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
  
  // this allows centralizing computed from Components to store
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    
    // this allows calls like store.getters.getTodoById(2)
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }    
  }
})
```

#### Change State ####
```js
store.commit('increment')
store.commit('incrementBy', 10)
store.commit('incrementByObject', {
  amount: 10
})
store.commit({
  type: 'incrementByObject',
  amount: 10
})

console.log(store.state.count)

// get values from Component
this.$store.state.count
```

#### mapState Helper ####
```js
import { mapState } from 'vuex'

export default {
  // ...
  computed: mapState({
    // arrow functions can make the code very succinct!
    count: state => state.count,

    // passing the string value 'count' is same as `state => state.count`
    countAlias: 'count',

    // to access local state with `this`, a normal function must be used
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })
}
```

