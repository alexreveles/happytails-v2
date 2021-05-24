import React from 'react';
// import { useMutation, useState } from '@apollo/react-hooks';
// import Auth from "../utils/auth";
// this mutation has not be created yet so naming may change
// import { UPDATE_DOG } from "../utils/mutations";
import "./stylesheet.css";
import { useQuery } from '@apollo/react-hooks'
import { GET_DOGS } from '../../utils/queries';


function DogRow() {
    const { data } = useQuery(GET_DOGS);
    console.log('GET_DOGS:', data);
    let dog

if (data) {
    dog = data.canines
    console.log(dog);
}
    return (
        <>
        {dog ? ( dog.map((canine) => {
            return (
              <tr>
                <td className="Easy">
                  {' '}
                  <span className="status-emoji">😞</span>
                  {canine.name}
                </td>
                <td> </td>
                <td> </td>
                <td className="Easy"> {canine.demeanor} </td>
                <td> {canine.kennel} </td>
                {token && (
                  <td>
                    <button type="submit" className="btn">
                      <a to="/single-dog/:id" className="select-dog">
                        Select
                      </a>
                    </button>
                  </td>
                )}
              </tr>
            );
          })
        : null}
    </>
   
    );
};

export default DogRow;