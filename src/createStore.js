// function createStore() {
//   let state;

//   function dispatch(action) {
//     state = reducer(state, action);
//     render();
//   }

//   function getState() {
//     return state;
//   }

//   return {
//     dispatch,
//     getState,
//   };
// }

// function reducer(state = { count: 0 }, action) {
//   switch (action.type) {
//     case "counter/increment":
//       return { count: state.count + 1 };
//     case "counter/decrement":
//       return { count: state.count - 1 };

//     default:
//       return state;
//   }
// }

// function render() {
//   let container = document.getElementById("container");
//   container.textContent = store.getState().count;
// }

// let store = createStore(reducer);
// store.dispatch({ type: "@@INIT" });
// let button = document.getElementById("button");
// let mbutton = document.getElementById("mbutton");

// button.addEventListener("click", function () {
//   store.dispatch({ type: "counter/increment" });
// });

// mbutton.addEventListener("click", function () {
//   store.dispatch({ type: "counter/decrement" });
// });

function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  }

  return { dispatch, getState };
}
function messege() {
  alert("Count is already 0");
}
function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    case "counter/decrement":
      return state.count === 0 ? messege() : { count: state.count - 1 };
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById("concount");
  container.textContent = store.getState().count;
}
let store = createStore(reducer);

let btn = document.getElementById("button");
let dbtn = document.getElementById("mbutton");

btn.addEventListener("click", () =>
  store.dispatch({ type: "counter/increment" })
);
dbtn.addEventListener("click", () =>
  store.dispatch({ type: "counter/decrement" })
);

store.dispatch({ type: "all" });
