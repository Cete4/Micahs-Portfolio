import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Footer from "../Components/Footer";

function Home() {
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

            <img id="personalphoto" src="https://lh3.googleusercontent.com/GXdo9GP0NxAWMWEZlEMjpWDhZGrM4bZqClCcPaVrN7a_ylNWJHxy3VZS7YLSxXOQetwEhaQiabo5PlYRvf2kyRn1j_n1ANYt70bs1qpw66kjF-qG-CJCgJvxJmG3hWkmGn0hl5FJqcauv_DKDQZ7c2PmeVWS4JNLkWbAMrU2GRwZ9rCh7o67qECWWlmdT7thTz2VCZkFTeCUenB79d0PGb3lG2aAuM1Hw-ZaNChLaZiFtvMyD-hzpMGOIjPoSyp37fnjwQxC5Kgf5olBb-Kg2b3rHKrNkrOJ95loR_EvGIqimf4pDo8RV60XcjN-B8piyakTJf8cYOccAqDRjP_yS6t4Vdxv4GPuejnMkc3vRz6XfT3GH3Q2HTS8_Bv3ML2gk0p2qnXIi_3FZsrDUwWAZiXnpJvOCjgJgdtlxI1jPh-KC3rELMTpQQUjxmzUOCVQpsR5CsbQEYBL8VAnQOW4IDFDP9Ctc93SxNEq28wzdPhZ_pDkOfoiBTLo4aSmmWfroNUfi_-Ey8yJamZL16d8sKmjJvLtinnEXp2r6RdUIhbXPaMpZp6Pio0dthaFiWT-vpUqIm0skhzP3ZMzUkMvPYfZbZanx_1jgSVo6KZEHFnI0sQumFdKBSTjAJoyb52_YfvJ6EyNZqjjQMXx_H2b6jgQ2iWxyXfCT9OxEz7iW0sd1grk7PcB6bRVOlyKog=w963-h1283-no?authuser=0" alt="Micah BigEagle"></img>
            <br></br>
            <br></br>
            <p id="bio">Hi, I'm Micah BigEagle a learning and creating full-stack web developer. I'm currently in the UofM Full-Stack Bootcamp. Hardworking production assembly team member offering a significant background in blue-collar
            manufacturing and team organization. History of successfully aligning output with quality and performance
            targets. Highly organized approach reducing errors and materials waste through proactive controls.
            Enthusiastic full stack web developer eager to contribute to team success through hard work, attention to detail,
            and excellent organizational skills. A clear understanding of web development and programming. Motivated to
            learn, grow, and excel in web development.
                </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer></Footer>
        </Container>
    );
}

export default Home;
