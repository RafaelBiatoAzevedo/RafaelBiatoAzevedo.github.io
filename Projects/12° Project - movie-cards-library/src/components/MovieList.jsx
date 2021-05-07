// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const listElements = movies
      .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    return (
      <div className="movie-list">
        {listElements}
      </div>
    );
  }
}

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieList;
