import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState'
import { Link } from 'react-router-dom';


import {
    Navbar,
    ListGroup,
    ListGroupItem,
    Button,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap'



export const UserPost = (props) => {
    const { posts, removePost, onSelectedPost } = props;
    //const { posts, removePost } = useContext(GlobalContext);
    // if(posts.title == undefined) {
    //   return (
    //    <p>Vacio</p>
    //   )
    //   }
    var user = { img: "user.png" }
     
    return (
      <div>


            {posts.map(post => (
           
             <Card height='200px' width='300px' key={post.id}>
               <Link to={`/view/${post.id}` } >
               <CardImg  src={ user.img } height='200px' width='200px' alt="Card image cap" />
               </Link>
               <CardBody>
                 <CardTitle tag="h5">{post.title}</CardTitle>
                 <CardSubtitle tag="h6" className="mb-2 text-muted">{post.category}</CardSubtitle>
                 <CardText>{post.description}</CardText>
                           <div>
                           <Button onClick={()=> onSelectedPost(post.id)} className="btn btn-warning mr-1">Edit</Button>
                           <Button onClick={()=> removePost(post.id)}
                            color="danger">Delete</Button>
                       </div>
               </CardBody>
             </Card>
           
           
                ))}
                </div>
             
    )
}
