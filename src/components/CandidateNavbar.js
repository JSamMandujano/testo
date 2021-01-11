import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import {Route} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import './candidate.css';



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

export const CandidateNavbar = (props) => {
    const { candidate, openModal } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    var adduser = { img: "adduser.png" }
    const history = useHistory();

   
    return (
        <div>
           
                <img height='200px' width='200px' class="crosshair"  src={ adduser.img } alt="user" onClick={() => openModal()}/>
                <Link className="btn btn-warning mr-1 moverbotonback" to={`/` }>Back</Link>
                <Button  className="btn btn-warning mr-1 moverboton " onClick={() => history.push('/results')} disabled={candidate.title == undefined} >Start Interview</Button>
                
        </div>
    )
}
