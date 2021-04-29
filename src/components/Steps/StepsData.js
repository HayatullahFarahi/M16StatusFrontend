import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { GlobalContext } from '../../context/GlobalState';

const StepsData = () => {
  const { stages } = useContext(GlobalContext);
  return (
    <div
      className='p-2'
      style={{ background: 'rgb(43 187 173 / 10%)', borderRadius: '0.625rem' }}
    >
      <h4>M16 Stages Details</h4>
      <Table hover>
        <tbody>
          <tr>
            <th scope='row'>Print Date:</th>
            <td>
              <b>{Date.now().toString()}</b>
            </td>
          </tr>
          <tr>
            <th scope='row'>Cheque Number:</th>
            <td>
              <b>12300009</b>
            </td>
          </tr>
          <tr>
            <th scope='row'>Cheque Amount:</th>
            <td>
              <b>789000000 </b>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table
        style={{
          background: 'rgb(43 187 173 / 20%)',
        }}
        striped
        bordered
        hover
      >
        <thead>
          <tr>
            <th>No</th>
            <th>Stage</th>
            <th>Transition Time</th>
            <th>Step Note</th>
          </tr>
        </thead>
        <tbody>
          {stages.data.map((stage) => (
            <tr key={stage.stageName}>
              <th scope='row'>{stage.stageNo}</th>
              <td>{stage.stageName}</td>
              <td>{stage.transitionTime}</td>
              <td>{stage.stepNote}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default StepsData;
