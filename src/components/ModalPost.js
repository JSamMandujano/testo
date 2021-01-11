import React, { useState, useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Form,
    FormGroup,
    Label,
    Input, 
} from 'reactstrap';


const ModalPost = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    //const { addPost } = useContext(GlobalContext);
  const {
    buttonLabel,
    className,
    modal,
    toggle,
    addPost
  } = props;

  const onSubmit = () => {
    const newPost = {
        id: uuid(),
        title,
        description,
        category,
        image 
            }
    addPost(newPost);
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


  return (
    <div>
      <Modal isOpen={modal} toggle={() => toggle()} className={className}>
        <ModalHeader toggle={() => toggle()}>New Interviewer</ModalHeader>
        <ModalBody>
             <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Complete Name</Label>
                <Input type="text" title="title" value={title} onChange={onChange} placeholder="Write Name"></Input>
                <Label>Employee ID</Label>
                <Input type="text" value={description} onChange={onChangeTitle} placeholder="Write Employee ID"></Input>
                <Label for="exampleSelect">EID</Label>
                <Input type="text" value={category} onChange={onChangeCategory} placeholder="Write EID"></Input>
            </FormGroup>
            <Button onClick={onSubmit}>Save</Button>
        </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalPost;