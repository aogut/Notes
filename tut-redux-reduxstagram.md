# Learn Redux
* https://learnredux.com/
* https://github.com/wesbos/Learn-Redux

## Prerequisite
1. Node
2. React Dev Tool
3. Redux Dev Tool
4. `git clone https://github.com/wesbos/Learn-Redux-Starter-Files.git`

## Steps
1. Hello Reduxstagram (#1)
2. Create a component and render it (#2)
3. Define routes (#4)
4. Create the **store** (#5)
5. Create **action creators** (#6)
6. Create **reducers** (#7)
7. Wire and use store, action creators and reducers with react (#8)
8. Inject data and dispatch to UI (#10)
9. Display data in UI elements (#11)
10. Handle user's action with a reducer to update state (#12)
11. Create the Single view (#13)
12. Create a comment lists and a comment form (#14)
13. Create UI handler to dispatch the comment action (#15)
14. Comment reducer update state change requests (#16)
15. Hot reload reducers (#18)
16. Redux dev tool (#19)

---
## Notes
### Concepts
1. **root reducer** delegates to *all* reducers to change state and each reducer needs to decide how to (or not to) change it.  Root reducer then combines the changes.
2. an **action creator** returns an action. An action is a json object which describes user intention.
4. `combineReducers()` packages reducers, which will be passed a slice of the state based on the key of reducers.
```
   combindReducers({
    comments: someReducer    // state.comments from store will be passed to someReducer
   })
```
5. connect takes 2 params
    * data in state to be injected
    * binding between action creators and dispatch
6. connects return a connect object, which can then bind to a UI element

### Cookbook
* use slice to create the next state
```
    [
        ...state.slice(0,i),
        {...state[i], updatedData: "new data"},
        ...state.slice(i+1)
    ]
```
* dispatch an action with inline HTML
```
    onClick={this.props.increment.bind(null, i)}
```
* dispatch an action in js
```
    this.props.increment(i)
```
* hot reload reducers
```
    if (module.hot) {
      module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
      });
    }
```
* use redux dev tool
```
    const enhancers = compose(
      window.devToolsExtension ? window.devToolsExtension() : f => f
    );
    const store = createStore(rootReducer, defaultState, enhancers);
```

### Modules
1. `react-router` manages routes and declare root level.
    * `Link` creates anchor tag
2. `react-redux` provides binding between redux and react
    * `Provider` declares what store to use
    * `connect` ties UI components and data
3. `react-addons-css-transition-group`  
    * `CSSTransitionGroup`

---
### Program Flow
1. webpack packages the bundle - **webpack.config.js** defines the entry point (ie **reduxstagram.js**) and the output bundle name (ie **bundle.js**)
2. browser loads **index.html**, which includes the generated **bundle.js**
3. **reduxstagram.js** renders the application at an element of index.html
    1. load `store` via `Provider` tag (`react-redux`)
        1. `createStore()` (`redux`) creates `store` by passing the **root reducer**
        2. `combineReducers` (`redux`) creates the **root reducer** by packaging all reducers
    2. `Router` tag (`react-router`) specifies route configuration and the container component (ie **App**)
        1. **App** use `connect()` (`react-redux`) to expose the state slice in `store` and `action creators` to the root UI element

---
### Code Snippets
Redux code
```
import { createStore, combineReducers } from 'redux';

// create reducer
function posts (state = [], action) {
    return state
}

// combine reducers into a root reducer
const rootReducer = combineReducers({posts})

// create redux store
const store = createStore(rootReducer)

// create action creator
function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}
```

React Redux
```
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// expose state data to UI via props
function mapStateToProps(state) {
    return {
      posts: state.posts,
      comments: state.comments
    }
}

// expose action creators to UI via props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// export App component to react
export const App = connect(mapStateToProps, mapDispatchToProps)(Main);
```

Redux
```
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
```
