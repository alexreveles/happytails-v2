import React from 'react';
import DogRow from '../DogRow';
import dogImage from '../../images/bulldog-favicon-trans-bg.png';
import './stylesheet.css';

function TableAm({ dogData }) {
  return (
    // REACT reaallly doesnt like this segment and I am not sure why.
    <div className="row s8">
      <h4 className="flow-text">
        <span>
          {' '}
          <img
            className="dog-logo"
            src={dogImage}
            alt="bulldog waiting to walk"
          />{' '}
        </span>
        AM Shift
      </h4>
      <br />
      <br />

      <table className="striped z-depth-2">
        <thead>
          <tr>
            <th>Doggy Name</th>
            <th>AM Potty Break</th>
            <th>AM Walk</th>
            <th>Doggy Demeanor</th>
            <th>Kennel</th>
          </tr>
        </thead>

        <tbody>
          <DogRow dogData={dogData} />
        </tbody>
      </table>
    </div>
  );
}

export default TableAm;
