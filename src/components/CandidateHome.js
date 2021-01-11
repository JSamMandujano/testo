import React, { useState, useContext} from 'react'
import {CandidateContext} from '../context/CandidateContext';
import  CandidateModal  from './CandidateModal';

import { CandidateNavbar } from './CandidateNavbar'
import { Candidates } from './Candidates';
import CandidateSkillsModal from './CandidateSkillsModal';
import { Navbar } from 'reactstrap'


export const CandidateHome = () => {
    const [showModal, setShowModal] = useState(false)
    const { candidate, removeCandidate, addCandidate } = useContext(CandidateContext);


    return (
        <div>
              <Navbar color="dark" dark> </Navbar>
             <h1>Candidate</h1>
             <div class="container">
            <div class="row">
        <CandidateNavbar class="col-sm-4" candidate={candidate} openModal={ () =>setShowModal(true)}/>
        <Candidates class="col-sm-4" candidate={candidate}/>
        </div>
        </div>
        <CandidateModal  addCandidate={addCandidate} modal={showModal} toggle={ () =>setShowModal(!showModal)}/>
        </div>
    )
}
