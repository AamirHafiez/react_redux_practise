import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
// import { addMovies, addMovieToFavourites, deleteMovieFromFavourites, handleMovieSearch } from './actions';
import { Provider } from 'react-redux';

// creating a logger middleware to console_log action before dispatching
// const logger = ({dispatch, getState}) => {
//   return (next) => {
//     return (action) => {
//       console.log('Action type: ', action.type);
//       next(action);
//     }
//   }
// }

// modifying middleware for easier syntax
const logger = ({dispatch, getState}) => (next) => (action) => {
  if(typeof action !== 'function'){
    console.log('Action type: ', action.type);
  }
  next(action);
}

// creating a thunk {thunk is a middleware that is called if an action creator return a function instead of object}
// we can use react-thunk (npm install react-thunk) instead of writing this middleware by ourselves.
const thunk = ({dispatch, getState}) => next => action => {
  if(typeof action === 'function'){
    action(dispatch);
    return;
  }
  next(action);
}

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

// store.subscribe(() => console.log('subscribed'));

// store.dispatch(addMovies(['m1', 'm2', 'm3', 'm4']));
// store.dispatch(addMovieToFavourites('m2'));
// store.dispatch(addMovieToFavourites('m3'));

// console.log(store.getState());

// store.dispatch(deleteMovieFromFavourites('m3'));
// console.log(store.getState());

// dispatching an action which return a function hence thunk will be used here
// send argument as store.dispatch
// store.dispatch(handleMovieSearch(store.dispatch));
// console.log(store.getState());

// import { createContext } from 'react';
// as whenever we need to use store in our app we will have to pass store as props to each and every component
// that needs it. Hence it gets hectic to pass same props again and again, it is better to make context 
// in the parent component and hence every child, subchild to any level will be able to use that context
// similar to that passing props to each and every component
// to use the context - 1. create the context
// 2. Wrap the component whose children need to access the context by the same context that you made
// context has two properties:- provider (anything can be stored that needs to be provoded to children) and consumer (children are consumers and can access provider through consumer) 
// export const StoreContext = createContext(); // 1.
// console.log('StoreContext', StoreContext);
// better to create a provider class for faster reusability

// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     return(
//       <StoreContext.Provider value={store}> {/* 2. provide anything that needs to be passed in value prop */}
//         {this.props.children} {/* this means whatever is written between the component call eg here, <App/>*/}
//       </StoreContext.Provider>
//     );
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* 2. provide anything that needs to be passed in value prop */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);