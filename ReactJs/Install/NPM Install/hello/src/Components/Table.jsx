import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>Class</th>
          <th scope='col'>Heading</th>
          <th scope='col'>Heading</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'>Default</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>

        <tr className='table-primary'>
          <th scope='row'>Primary</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className='table-secondary'>
          <th scope='row'>Secondary</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className='table-success'>
          <th scope='row'>Success</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className='table-danger'>
          <th scope='row'>Danger</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className='table-warning'>
          <th scope='row'>Warning</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className='table-info'>
          <th scope='row'>Info</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className='table-light'>
          <th scope='row'>Light</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className='table-dark'>
          <th scope='row'>Dark</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}