import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


function Contact() {
    return (
        <Container>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand id="home">Micah BigEagle</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="Home">About</Nav.Link>
                    <Nav.Link href="Portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="Contact">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    );
}

export default Contact;
