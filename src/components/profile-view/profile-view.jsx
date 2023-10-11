import { useState } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { Form, Button, Row, Col, Modal } from 'react-bootstrap';

export const ProfileView = ({ movies }) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState(user.Email);

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        let data = {
            Username: user.Username,
            Email: email,
        };
        if (password) {
            data['Password'] = password;
        }

        fetch(`https://myflixapi-50hz.onrender.com/users/${user.Username}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    alert('Update failed.');
                }
            })
            .then((data) => {
                if (data) {
                    localStorage.setItem('user', JSON.stringify(data));
                    setUser(data);
                    alert('Update was successfull.');
                }
            });
    };

    const handleDeleteUser = () => {
        fetch(`https://myflixapi-50hz.onrender.com/users/${user.Username}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            if (response.ok) {
                setUser(null);
                setToken(null);
                localStorage.clear();
                alert('Your account has been deleted');
            } else {
                alert('something went wrong.');
            }
        });
    };

    const favoriteMovies = movies.filter((m) =>
        user.FavoriteMovies.includes(m.id)
    );

    return (
        <>
            <Row className='justify-content-center'>
                <Col>
                    <h1 className='profile'>Welcome {user.Username} </h1>

                    <Form>
                        <Form.Group
                            controlId='formUsername'
                            className='form-group'
                        >
                            <Form.Label>Username:</Form.Label>
                            <Form.Control
                                type='text'
                                value={user.Username}
                                onChange={(e) => setUser(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group
                            controlId='formPassword'
                            className='form-group'
                        >
                            <Form.Label>Password:</Form.Label>
                            <Form.Control
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group
                            controlId='formEmail'
                            className='form-group'
                        >
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col className='save-button' md={5}>
                    <Button
                        className='formButton'
                        variant='primary'
                        type='submit'
                        onClick={handleSubmit}
                    >
                        Save changes
                    </Button>
                </Col>
            </Row>

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

            <Row className='justify-content-center'>
                <Col md={5}>
                    <Button
                        variant='link'
                        className='text-danger'
                        onClick={handleShowModal}
                    >
                        Delete my account
                    </Button>
                </Col>
            </Row>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete your account?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={handleDeleteUser}>
                        Yes
                    </Button>
                    <Button variant='secondary' onClick={handleCloseModal}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
