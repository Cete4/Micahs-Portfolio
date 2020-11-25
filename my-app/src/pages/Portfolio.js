import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


function Portfolio() {
    return (
        <Container>
            <Navbar id="navbar">
                <Navbar.Brand id="home">Micah BigEagle</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link id="navitem" href="Home">About</Nav.Link>
                    <Nav.Link id="navitem" href="Portfolio">Portfolio</Nav.Link>
                    <Nav.Link id="navitem" href="Contact">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    );
}

export default Portfolio;
