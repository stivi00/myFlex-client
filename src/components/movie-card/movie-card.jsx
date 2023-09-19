import PropTypes from 'prop-types';

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <div
            onClick={() => {
                onMovieClick(movie);
            }}
        >
            <img
                className='thumbnails'
                src={movie.ImagePath}
                alt={movie.Title}
            />
        </div>
    );
};

MovieCard.PropTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        ImagePath: PropTypes.string.isRequired,
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Bio: PropTypes.string,
        }).isRequired,
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string,
        }).isRequired,
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired,
};
