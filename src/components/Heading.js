import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './interviewer.css';
import { useHistory } from 'react-router-dom';

import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container,
    Button, 
    ButtonGroup,
    Modal,
    ModalHeader,
    ModalFooter
} from 'reactstrap';

export const Heading = (props) => {
        const { posts, openModal } = props;



    const [modal, setModal] = useState(false);
    const [typeOfPost, setTypeOfPost] = useState('posts')

    const toggle = () => setModal(!modal);

    var adduser = { img: "adduser.png" }
    const history = useHistory();


 /*  setTypeOfPost(category) {
    this.chosenPosts = category;
  } */
    return (
        <div>
    
       
       <img height='200px' width='200px' class="crosshair"  src={ adduser.img } alt="user" onClick={() => openModal()}/>
       <p>Add Interviewer</p>
        <Button className="btn btn-warning mr-1 mueve" onClick={() => history.push('/candidateHome')} disabled={posts[0] == undefined} >Continue</Button>

        
       </div>
    )
}
