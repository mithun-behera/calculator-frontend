import { Container, Alert } from "react-bootstrap";

function Footer(){
    return (
      <Container className="mt-3">
           <Alert variant="success">
                  ✅ Connected to Spring Boot API
           </Alert>
      </Container>
    );
}
export default Footer;