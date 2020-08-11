import React from 'react';
// import TableRow from 'react-bootstrap/Row';
import Ninjas from '../data/employeeData.json';

export default function TableData(props) {
  return (
    <tbody className='ninjaData'>
      {Ninjas.map((ninja) => (
        <tr key={ninja.id}>
          <th scope='row'>{ninja.role}</th>
          <td>{ninja.id}</td>
          <td>
            <img src={ninja.image}></img>
          </td>
          <td>{ninja.role}</td>
          <td>{ninja.name}</td>
          <td>{ninja.email}</td>
          <td>{ninja.village}</td>
        </tr>
      ))}
    </tbody>
  );
}

// {
//     "id": 1,
//     "image": "https://gyazo.com/49e25be87b1fb5e65e02717afc4b6048.png",
//     "role": "Hokage",
//     "name": "Tsunade Senju",
//     "email": "Senju@emailthis.com",
//     "village": "Konohagakure"
//   },
