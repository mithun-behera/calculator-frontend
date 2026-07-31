import { ListGroup } from "react-bootstrap";

function History({history, setHistory,darkMode}){
    return(
       <>
       <h4 className="mb-3">Calculation History</h4>
       <ListGroup>
         {history.length ===0 ? (
            <ListGroup.Item
             className={darkMode ? "big-dark text-white border-secondary" : ""}>
                No calculation yet.</ListGroup.Item>
         ):(
            history.map((item,index) => (
                <ListGroup.Item key={index}
                className={darkMode ? "bg-dark text-white border-secondary" : ""}>
                    {item}
                </ListGroup.Item>
            ))
         )}
       </ListGroup>
       </>
    );
}
export default History;