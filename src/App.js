import React from 'react';
import { connect } from 'react-redux';
import { addMovies, addMovieToFavourites, deleteMovieFromFavourites, handleMovieSearch } from './actions';
// import { StoreContext } from '.';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('Getting store from wrapper that can be used anywhere in this class ' ,this.props);
  }

  handleAddMoviesToList = () => {
    this.props.dispatch(addMovies(['m1', 'm2', 'm3']));
  }

  handleAddMovieToFavourites = () => {
    this.props.dispatch(addMovieToFavourites('m10'));
  }

  handleRemoveMovieFromFavourites = () => {
    this.props.dispatch(deleteMovieFromFavourites('m10'));
  }

  handleSearchMovie = () => {
    this.props.dispatch(handleMovieSearch('m20'));
  }

  render() {
    const { movies, search } = this.props;
    console.log('movies ' ,movies);
    console.log('search ' ,search); 

    return(
      <div>
        <h1>Hello App</h1>
        <button onClick={this.handleAddMoviesToList}>Add movies to movies list</button>
        <button onClick={this.handleAddMovieToFavourites}>Add m10 to favourites</button>
        <button onClick={this.handleRemoveMovieFromFavourites}>Remove m10 from favourites</button>
        <button onClick={this.handleSearchMovie}>Search movie m20</button>
      </div>
    ) 
  }
}

// class AppWrapper extends React.Component {
//   render () {
//     return (
//       <StoreContext.Consumer>
//         {
//           (store) => {
//                 return(
//                   <App store={store}/>
//                 )
//           }
//         }
//       </StoreContext.Consumer>
//     )
//   }
// }

// export default AppWrapper;

const mapStateToProps = ({ movies, search }) => {
  return {
    movies, search
  }
}

export default connect(mapStateToProps)(App);