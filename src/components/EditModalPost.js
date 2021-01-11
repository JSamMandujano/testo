import React, {useState,useContext, useEffect} from 'react';
import {GlobalContext} from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

     const EditModalPost = (props) => {
    const {modal, toggle, className } = props;
    const [selectedPost, setSelectedPost] = useState({
        id: '',
        title:'',
        description:'',
        category: '',
        image:''
    })
    const [description, setDescription] = useState('');
    const { posts, editPost } = useContext(GlobalContext);
    const history = useHistory();
    const currentPostId = props.idPost;

    useEffect(() => { //match de post con su ID correspondiente, permite editar el seleccionado
        const postId = currentPostId;
        const post = posts.find(post => post.id === postId)
        if (post) {
            setSelectedPost(post)
        }
        console.log(selectedPost);
    }, [props.idPost])

    const onSubmit = () => { //hace el submit del post editado 
        editPost(selectedPost)
        toggle();
    }
    const onChange = (e) => {
        setSelectedPost({...selectedPost, [e.target.title]: e.target.value})
    }
    const onChangeDescription = (e) => {
        setSelectedPost({...selectedPost, [e.target.title]: e.target.value})
    }
    const onChangeCategory = (e) => {
        setSelectedPost({...selectedPost, [e.target.title]: e.target.value})
    }
    const onChangeImage = (e) => {
        setSelectedPost({...selectedPost, [e.target.title]: e.target.value})
    }

    return (
        <div>
          <Modal isOpen={modal} toggle={() => toggle()} className={className}>
            <ModalHeader toggle={() => toggle()}>Interviewer Information</ModalHeader>
            <ModalBody>
                 <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label>Complete Name</Label>
                    <Input type="text" title="title" value={selectedPost.title} onChange={onChange} placeholder="Write Title"></Input>
                    <Label>Employee ID</Label>
                    <Input type="text" title="description" value={selectedPost.description} onChange={onChangeDescription} placeholder="Write Description"></Input>
                    <Label>EID</Label>
                    <Input type="text" title="category" value={selectedPost.category} onChange={onChangeCategory} placeholder="Write EID"></Input>
                </FormGroup>
                <Button onClick={onSubmit}>Save</Button>
                <Button color="secondary" onClick={() => toggle()}>Cancel</Button>
            </Form>
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
    
    export default EditModalPost;