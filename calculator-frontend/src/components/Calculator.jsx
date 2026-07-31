import { Container, Row, Col, Card } from "react-bootstrap";
import Display from "./Display";
import ButtonGrid from "./ButtonGrid";
import History from "./History";

function Calculator({
    display,
    setDisplay,
    history,
    setHistory,
    darkMode}){
    return(
      <Container className="mt-4">
         <Row>
            <Col lg={8}>
                <Card className={`p-3 shadow h-100 ${darkMode ? "bg-dark text-white" : "bg-white"}`}>
                   <Display display={display}
                     darkMode={darkMode}/>
                   <ButtonGrid
                   display={display}
                   setDisplay={setDisplay}
                   history ={history}
                   setHistory ={setHistory}
                   darkMode={darkMode}/>
                </Card>
               
            </Col>

            <Col lg={4}>
               <Card className="p-3 shadow h-100">
                   <History history={history} 
                   setHistory = {setHistory}
                   darkMode={darkMode}/>
               </Card>
            </Col>
         </Row>
      </Container>
    );
}
export default Calculator;