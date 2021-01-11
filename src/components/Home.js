import React, { useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

import { Heading } from './Heading';
import { UserPost } from './UserPost';
import  ModalPost  from './ModalPost';
import  EditModalPost  from './EditModalPost';
import { Navbar } from 'reactstrap'


export const Home = () => {
const [showModal, setShowModal] = useState(false) //abrir el modal al principio no lo abre, esta en false
const [showEditModal, setShowEditModal] = useState(false) // abrir el modal que edita, valor inicial false, no lo abre
const [selectedIdPost, setSelectedIdPost] = useState(1) // saber que post ID esta seleccionado
const { posts, removePost, addPost } = useContext(GlobalContext);

function handleEditPost (id) {
setSelectedIdPost (id);
setShowEditModal(true);

}
//recibe parametro de ID para saber cual Post 
    return (
        <div>
        <Navbar color="dark" dark ></Navbar>
       <h1>Interviewers</h1>
            <div class="container">
            <div class="row">
            <Heading class="col-sm-4"  posts={posts} openModal={ () =>setShowModal(true)}/>
            <UserPost class="col-sm-4" onSelectedPost={(id) =>handleEditPost(id)} posts={posts} removePost={removePost}/>
            </div>
            </div>
            <ModalPost addPost={addPost} modal={showModal} toggle={ () =>setShowModal(!showModal)}/>
            <EditModalPost idPost={selectedIdPost} modal={showEditModal} toggle={ () =>setShowEditModal(!showEditModal)}/>
        </div>
    )
}
