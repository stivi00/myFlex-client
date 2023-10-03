import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const MovieCard = ({ movie }) => {
    return (
        <Card className='h-100'>
            <Card.Img
                variant='top'
                width={180}
                height={200}
                src={movie.ImagePath}
            />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Link to={`/movies/${encodeURIComponent(movie.Title)}`}>
                    <Button variant='link'>Open</Button>
                </Link>
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
};
