import React, { useState, useContext, useEffect } from 'react';
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

// export const QuestionsContext = React.createContext()

export const Interview = () => {

  const questions = [
    {
      id: 1,
      subject: "Javascript",
      question: '¿Cuáles son las posibles formas de crear objetos en JavaScript?',
      answer: '',
      comments: '',
    },
    {
      id: 2,
      subject: "CSS",
      question: '¿Cuál es la diferencia entre padding y border?',
      answer: '',
      comments: '',
    },
    {
      id: 3,
      subject: "React",
      question: '¿Cuál es la diferencia entre context api y redux?',
      answer: '',
      comments: '',
    },

    {
      id: 4,
      subject: 'HTML',
      question: '¿Cuales son las nuevas "features" de HTML5?',
      answer: '',
      comments: '',
    }
  ]

  const history = useHistory();
  const { candidate } = useContext(CandidateContext) //cuando estan en el mismo nivel los componentes e hijo a padre
  console.log(candidate);

  const [filteredQuestions, setFilteredQuestions] = useState([]);

  useEffect(() => {
    if (candidate) {
      questionsFiltering();
    }
  }, [candidate])

  const questionsFiltering = () => {
    console.log(questions);
    const newQuestionsArray = questions.map((question) => {
      if (candidate.htmlskills === "on" && question.subject === "HTML") {
        return question;
      }
      if (candidate.javascriptskills === "on" && question.subject === "Javascript") {
        return question;
      }
      if (candidate.cssskills === "on" && question.subject === "CSS") {
        return question;
      }
      if (candidate.reactskills === "on" && question.subject === "React") {
        return question;
      }
    });
    console.log(newQuestionsArray);
    const newFilterQuestions = newQuestionsArray.filter(question => question != undefined);

    setFilteredQuestions(newFilterQuestions);
  };

  console.log(filteredQuestions);

  const [answeredQuestions, setAnsweredQuestions] = useState(filteredQuestions);
    
  
  const handleAnswer = (answer, index) => {
    filteredQuestions[index].answer = answer ? "correct" : "incorrect"
    let aux = filteredQuestions;
    setAnsweredQuestions(aux) 
  }


 
  return (


    <div>
      <Navbar color="dark" dark> </Navbar>
      <h1>Questions</h1>
      <Carousel interval={1000000}>
        {filteredQuestions.map((filteredQuestion, index) => (

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/videos/3045163/free-video-3045163.jpg"
              alt="First slide"
            />

            <Carousel.Caption>
              <h3>{filteredQuestion.subject}</h3>
              <p>{filteredQuestion.question}</p>
              <Form>
              <fieldset>
              <Form.Check className="moveradio" type="radio" value={filteredQuestion.answer} onChange={handleAnswer(true, index)} inline label="Correcto" aria-label="radio 1" />
              <Form.Check className="moveradiu" type="radio" value={filteredQuestion.answer} onChange={handleAnswer(false, index)} inline label="Incorrecto" aria-label="radio 1" />
              </fieldset>
              </Form>
            </Carousel.Caption>

          </Carousel.Item>


        ))}
      </Carousel>
      <Button className="btn btn-warning mr-1 moverbotono " onClick={() => history.push('/results')}>Finalize</Button>

    </div>
  )
}

