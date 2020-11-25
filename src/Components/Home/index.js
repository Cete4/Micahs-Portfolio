import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './index.css';

function Home() {
  return (
    <Container>
      <div>
        <>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home" id="home">Micah BigEagle</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="home">About</Nav.Link>
              <Nav.Link href="Portfolio">Portfolio</Nav.Link>
              <Nav.Link href="Contact">Contact</Nav.Link>
            </Nav>
          </Navbar>
        </>
      </div>
    </Container>
  );
}

export default Home;
