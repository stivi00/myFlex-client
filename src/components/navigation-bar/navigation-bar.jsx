import { Navbar, Container, Nav, NavbarBrand, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavigationBar = ({ user, onLoggedOut }) => {
    return (
        <Navbar bg='primary' expand='lg'>
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    My Flix
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls='basic-navbar-nav'
                    style={{ background: 'red' }}
                />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        {!user && (
                            <>
                                <Nav.Link as={Link} to='/login'>
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to='/signup'>
                                    Signup
                                </Nav.Link>
                            </>
                        )}
                        {user && (
                            <>
                                <Nav.Link as={Link} to='/'>
                                    Home
                                </Nav.Link>
                                <Nav.Link onClick={onLoggedOut}>
                                    Logout
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
