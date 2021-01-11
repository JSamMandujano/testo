import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table'
import { CandidateContext } from '../context/CandidateContext';

import {
    Navbar
  } from 'reactstrap';
export const Results = () => {
   
const {candidate} = useContext(CandidateContext) //cuando estan en el mismo nivel los componentes e hijo a padre
console.log(candidate);
    return (
        <div>
        <Navbar color="dark" dark> </Navbar>
            <h1>Summary</h1>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>{candidate.title}</th>
      <th>{candidate.description}</th>
      <th>{candidate.category}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>

    </tr>
    <tr>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>

    </tr>
    <tr>
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td>@fat</td>


    </tr>
  </tbody>
</Table>
      
        </div>
    )
}
