import { Navbar, Container, Button} from "react-bootstrap";
import {BsMoonStarsFill} from "react-icons/bs";

function Header({darkMode, setDarkMode}){
    return(
        <Navbar bg="dark" variant="dark" className="shadow-sm py-3">
            <Container>
                <Navbar.Brand className="fw-bold fs-3">
                    🧮 Calculator Pro
                </Navbar.Brand>

                <Button variant="outline-light"
                      onClick={() => setDarkMode(!darkMode)}>
                <BsMoonStarsFill className="me-2"/>
                      {darkMode ? "Light Mode" : "Dark Mode"}
                </Button>
            </Container>
        </Navbar>
    );
}

export default Header;