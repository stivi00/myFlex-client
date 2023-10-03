import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const MovieView = ({ movies }) => {
    const theMovie = useParams();

    const movie = movies.find((b) => b.Title === theMovie.Title);

    return (
        <Card>
            <Card.Img variant='top' height={1000} src={movie.ImagePath} />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Director.Name}</Card.Text>
                <Link to={`/`}>
                    <button className='back-button'>Back</button>
                </Link>
            </Card.Body>
        </Card>
    );
};
