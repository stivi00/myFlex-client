import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <Card>
            <Card.Img
                variant='top'
                width={180}
                height={200}
                src={movie.ImagePath}
            />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                {/* <Card.Text>{movie.Director}</Card.Text> */}
                <Button onClick={() => onMovieClick(movie)}>Open</Button>
            </Card.Body>
        </Card>
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
