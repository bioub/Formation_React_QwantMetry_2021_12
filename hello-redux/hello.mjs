import { createStore } from 'redux';

const state = {
  count: 0,
};

const INCREMENT = 'increment';

// const nextState = reducer(previousState, action);
function reducer(previousState, action) {
  if (action.type === INCREMENT) {
    return {
      count: previousState.count + 1,
    }
  }

  return previousState;
}

/** @type {import('redux').Store} */
const store = createStore(reducer, state);

store.subscribe(() => {
  console.log('subscribe');
  console.log('state', store.getState())
});
store.dispatch({type: 'unknown'});
store.dispatch({type: INCREMENT});
store.dispatch({type: INCREMENT});


// const buttonEl = document.createElement('button');
// buttonEl.addEventListener('increment', () => {

// });
// buttonEl.dispatchEvent({type: 'increment'});