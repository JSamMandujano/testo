import React from 'react'
import { Link} from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap'



export const Candidates = (props) => {
    const { candidate, removeCandidate, onSelectedCandidate } = props;
console.log(candidate);
console.log(candidate.title);
var user = { img: "user.png" }

if(candidate.title == undefined) {
return (
 <p>No Candidate Added</p>

)
}
if(candidate.title != undefined) {
    return (
      
      
        <ListGroup className="mt-4">
       
          
             <div>
         <Card key={candidate.id}>
           <CardImg  src={ user.img } height='200px' width='200px' alt="Card image cap" />
           <CardBody>
             <CardTitle tag="h5">{candidate.title}</CardTitle>
             <CardSubtitle tag="h6" className="mb-2 text-muted">{candidate.category}</CardSubtitle>
             <CardText>{candidate.description}</CardText>
                       <div>
                       
                   </div>
           </CardBody>
         </Card>
       
       
       </div>
            
             
    </ListGroup>
    )}
}
