import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Footer from "../Components/Footer";

function Portfolio() {
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

            <br></br>

            <Card id="card" style={{ width: '18rem' }}>
                <Card.Img id="cardimg" variant="top" src="https://github.com/Cete4/Project_Grovyle/raw/main/Front%20of%20Weather%20API.001.png" />
                <Card.Body>
                    <Card.Title>Project Grovyle</Card.Title>
                    <Card.Text>The application can provide simple outdoor ideas for the time and date depending on your calendar and location for the activity that is best suited for the day.</Card.Text>
                    <Card.Link href="https://project-grovyle.herokuapp.com/" target="_blank">View Project</Card.Link>
                    <Card.Link href="https://github.com/Cete4/Project_Grovyle" target="_blank">View Repo</Card.Link>
                </Card.Body>
            </Card>

            <br></br>

            <Card id="card" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Novel Films</Card.Title>
                    <Card.Text>Upon application load, the user will be presented with a search field and results from the last search, if applicable. The data will be gathered from multiple APIs. Data for one book and for one film will appear in the main, mid-page search. For further book options, they may appear in the footer section of the page. The footer only shows results from the most recent search.</Card.Text>
                    <Card.Link href="https://cete4.github.io/NovelFilms/" target="_blank">View Project</Card.Link>
                    <Card.Link href="https://github.com/Cete4/NovelFilms" target="_blank">View Repo</Card.Link>
                </Card.Body>
            </Card>
            <Card id="card" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Note Display</Card.Title>
                    <Card.Text>A simple web app for creating and saving notes!</Card.Text>
                    <Card.Link href="https://github.com/Cete4/Note-Display" target="_blank">View Project</Card.Link>
                    <Card.Link href="https://calm-peak-53217.herokuapp.com/" target="_blank">View Repo</Card.Link>
                </Card.Body>
            </Card>
            <Footer />
        </Container>
    );
}

export default Portfolio;
