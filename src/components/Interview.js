import React, { useState, useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Form from 'react-bootstrap/Form'
import './interview.css';
import { useHistory } from 'react-router-dom';
import { CandidateContext } from '../context/CandidateContext';



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


export const Interview = () => {

  const history = useHistory();
  const {candidate} = useContext(CandidateContext) //cuando estan en el mismo nivel los componentes e hijo a padre
console.log(candidate);

  const questions = [
    {
        id: 1,
        subject: 'Javascript',
        question: '¿Cuáles son las posibles formas de crear objetos en JavaScript?',
        answerOptions: [
          { answerText: 'Incorrect', isCorrect: false },
          { answerText: 'Correct', isCorrect: true }
        ],
        comments: '',
    },
    {
        id: 2,
        subject: 'CSS',
        question: '¿Cuál es la diferencia entre padding y border?',
        answerOptions: [
          { answerText: 'Incorrect', isCorrect: false },
          { answerText: 'Correct', isCorrect: true }
        ],
        comments: '',
    },
    {
        id: 3,
        subject: 'React',
        question: '¿Cuál es la diferencia entre context api y redux?',
        answerOptions: [
          { answerText: 'Incorrect', isCorrect: false },
          { answerText: 'Correct', isCorrect: true }
        ],
        comments: '',
    },

    {
      id: 4,
      subject: 'HTML',
      question: '¿Cuales son las nuevas "features" de HTML5?',
      answerOptions: [
        { answerText: 'Incorrect', isCorrect: false },
        { answerText: 'Correct', isCorrect: true }
      ],
      comments: '',
  }
]

  return (
    <div>
    <Navbar color="dark" dark> </Navbar>
             <h1>Questions</h1>
    <Carousel interval={1000000}>
              {questions.map(question => (

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/videos/3045163/free-video-3045163.jpg"
      alt="First slide"
    />
    
    <Carousel.Caption>
      <h3>{question.subject}</h3>
      <p>{question.question}</p>
      <Form.Check className="moveradio" type="radio" inline label="Correcto" aria-label="radio 1" />
      <Form.Check className="moveradiu" type="radio" inline label="Incorrecto" aria-label="radio 1" />
      
    </Carousel.Caption>

  </Carousel.Item>
  
  
              ))}
</Carousel>
<Button  className="btn btn-warning mr-1 moverbotono " onClick={() => history.push('/results')}>Finalize</Button>

</div>
  )
}

