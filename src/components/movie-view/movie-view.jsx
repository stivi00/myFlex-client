import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const MovieView = ({ movies, user, token, setUser }) => {
    const theMovie = useParams();

    const movie = movies.find((b) => b.Title === theMovie.Title);

    const username = user.Username;

    const data = {
        Username: username,
        id: movie.id,
    };

    const addToFavorites = (username, movie) => {
        fetch(
            `https://myflixapi-50hz.onrender.com/users/${username}/movies/${movie.id}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            }
        )
            .then((response) => response.json())
            .then((response) => {
                alert('Movie added to favorites', response);
                // Fetch the updated user data
                return fetch(
                    `https://myflixapi-50hz.onrender.com/users/${username}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
            })
            .then((response) => response.json())
            .then((updatedUser) => {
                // Update the local storage and user state
                localStorage.setItem('user', JSON.stringify(updatedUser));
                setUser(updatedUser);
            })
            .catch((e) => {
                alert('Something went wrong');
            });
    };

    return (
        <Card md={5} lg={10}>
            <Card.Img variant='top' src={movie.ImagePath} />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Director.Name}</Card.Text>

                <div className='movieCard-buttons'>
                    <Link to={`/`}>
                        <Button className='back-button'>Back</Button>
                    </Link>

                    <Button
                        variant='info'
                        onClick={() => {
                            addToFavorites(username, movie);
                        }}
                    >
                        Add to favorites
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};
