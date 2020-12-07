import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "../assets/css/style.css";
import Footer from "../Components/Footer";

function Contact() {
    return (
        <Container>
            <Navbar id="navbar">
                <Navbar.Brand id="home">Micah BigEagle</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link id="navitem" href="Home">About</Nav.Link>
                    <Nav.Link id="navitem" href="Work">Portfolio</Nav.Link>
                    <Nav.Link id="navitem" href="Contact">Contact</Nav.Link>
                </Nav>
            </Navbar>
            <div id="contact">
                <br></br>
                <h3>Email: </h3>
                <a>mbigleagle123@gmail.com</a>
                <br></br>
                <br></br>
                <h3>Github: </h3>
                <a href="https://github.com/Cete4" target="_blank">https://github.com/Cete4</a>
                <br></br>
                <br></br>
                <h3>LinkedIn: </h3>
                <a href="https://www.linkedin.com/in/micah-bigeagle-ba5b3b1ba/" target="_blank">https://www.linkedin.com/in/micah-bigeagle-ba5b3b1ba/</a>
            </div>
            <Footer></Footer>
        </Container>
    );
}

export default Contact;
