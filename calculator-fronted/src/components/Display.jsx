import {Card} from "react-bootstrap";
function Display({display}){
    return (
       <Card 
       className="mb-3 p-4 bg-dark text-white border-0 shadow"
       style={{minHeight: "150px"}}>
         <div className="text-end">
              
              <h1 className="fw-blod display-4">
                {display || "0"}
              </h1>
         </div>
       </Card>
    );
}
export default Display;