import { Card, Button } from 'react-bootstrap';

export const MovieView = ({ movie, onBackClick }) => {
    return (
        <Card>
            <Card.Img variant='top' height={1000} src={movie.ImagePath} />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Director.Name}</Card.Text>
                <Button onClick={onBackClick}>Back</Button>
            </Card.Body>
        </Card>
    );
};
