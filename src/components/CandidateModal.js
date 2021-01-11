import React, { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Form,
    FormGroup,
    Label,
    Input, 
} from 'reactstrap';

const CandidateModal = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [htmlskills, setHtmlSkills] = useState(false);
    const [cssskills, setCssSkills] = useState(false);
    const [reactskills, setReactSkills] = useState("off");
    const [javascriptskills, setJavascriptSkills] = useState(false);
    const {
        buttonLabel,
        className,
        modal,
        toggle,
        addCandidate
      } = props;

      const onSubmit = () => {
        const newCandidate = {
            id: uuid(),
            title,
            description,
            category,
            image,
            javascriptskills,
            htmlskills,
            cssskills,
            reactskills
            
                }
        addCandidate(newCandidate);
        toggle();
    }
    const onChange = (e) => {
        setTitle(e.target.value);
    }
    const onChangeTitle = (e) => {
        setDescription(e.target.value);
    }
    const onChangeCategory = (e) => {
        setCategory(e.target.value);
    }
    const onChangeImage = (e) => {
        setImage(e.target.value);
    }
    const onChangeJavascriptSkills = (e) => {
        setJavascriptSkills(e.target.value);
    }
    const onChangeHtmlSkills = (e) => {
      setHtmlSkills(e.target.value);
  }
  const onChangeCssSkills = (e) => {
    setCssSkills(e.target.value);
}
const onChangeReactSkills = (e) => {
  setReactSkills(e.target.value);
}

    return (
        <div>
           <Modal isOpen={modal} toggle={() => toggle()} className={className}>
        <ModalHeader toggle={() => toggle()}>New Candidate</ModalHeader>
        <ModalBody>
             <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Complete Name</Label>
                <Input type="text" title="title" value={title} onChange={onChange} placeholder="Write Name"></Input>
                <Label>Type</Label>
                <Input type="text" value={description} onChange={onChangeTitle} placeholder="Write Type"></Input>
                <Label for="exampleSelect">Mail</Label>
                <Input type="text" value={category} onChange={onChangeCategory} placeholder="Write Mail"></Input>
                <Label>Skills</Label>
                <FormGroup check>
        <Label check>
          <Input type="checkbox" checked={htmlskills} onChange={onChangeHtmlSkills} />
          HTML
        </Label>
        <br/>
        <Label check>
        <Input type="checkbox" checked={cssskills} onChange={onChangeCssSkills} />
          CSS
        </Label>
        <br/>
        <Label check>
        <Input type="checkbox" checked={javascriptskills} onChange={onChangeJavascriptSkills} />
          Javascript
        </Label>
        <br/>
        <Label check>
        <Input type="checkbox" checked={reactskills} onChange={onChangeReactSkills} />
          React
        </Label>
      </FormGroup>
            </FormGroup>
            <Button onClick={onSubmit}>Save</Button>
        </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => toggle()}>Cancel</Button>
        </ModalFooter>
      </Modal> 
        </div>
    )
}
export default CandidateModal;