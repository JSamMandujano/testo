import React, { useContext, useState } from 'react'
import { CandidateContext } from '../context/CandidateContext';
import { useParams } from 'react-router-dom';
// import { QuestionsContext } from './Interview';

import './results.css';

import {
    Navbar,Button, Modal, ModalHeader, ModalBody, ModalFooter,Table
  } from 'reactstrap';
export const Results = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const  answeredQuestions = useParams();
  console.log(answeredQuestions);


const {candidate} = useContext(CandidateContext) //cuando estan en el mismo nivel los componentes e hijo a padre
console.log(candidate);
// const filteredQuestions = useContext(QuestionsContext)
// console.log(filteredQuestions);

    return (
        <div>
        <Navbar color="dark" dark> </Navbar>
            <h1>Summary</h1>
            <Table>
  <thead>
    <tr>
      <th>Candidate Data</th>
      <th>Results</th>
      <th className="clickazul" onClick={toggle}>View Questions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nombre:{candidate.title}</td>
      <td>Skills</td>
      <td>Points</td>

    </tr>
    <tr>
      <td>Tipo:{candidate.description}</td>
      <td>HTML</td>
      <td>P1</td>

    </tr>
    <tr>
      <td>Correo:{candidate.category}</td>
      <td>CSS</td>
      <td>P1</td>


    </tr>
    <tr>
      <td></td>
      <td>React</td>
      <td>P1</td>


    </tr>
  </tbody>
</Table>

<Button  className="btn btn-warning mr-1 moverbotonx " >Finalize</Button>


<Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Questions</ModalHeader>
        <ModalBody>
        <Table>
      <thead>
        <tr>
          <th>Question</th>
          <th>Answer</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">data</th>
          <td>data</td>
          <td>data</td>
         
        </tr>
        <tr>
          <th scope="row">data</th>
          <td>data</td>
          <td>data</td>
          
        </tr>
        
      </tbody>
    </Table>
        </ModalBody>
      </Modal>    
        </div>
    )
}
