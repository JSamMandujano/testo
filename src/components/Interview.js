import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
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

    </Carousel.Caption>
  </Carousel.Item>
  
              ))}
</Carousel>
</div>
  )
}

