import { useState } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ProfileView = ({ movies }) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);

    // this code should work
    const favoriteMovies = movies.filter((m) =>
        user.FavoriteMovies.includes(m.id)
    );

    const handleUpdate = () => {};

    return (
        <>
            <Row className='justify-content-center'>
                <Col>
                    <h1 className='profile'>Welcome {user.Username} </h1>

                    <Row>
                        <Col>
                            <h3 className='favorite-title'>Favorite movies:</h3>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        {favoriteMovies.map((movie) => (
                            <Col className='mb-4' key={movie.title}>
                                <MovieCard movie={movie} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </>
    );
};
