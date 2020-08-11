import React from 'react';

export default function TableHeader(props) {
  return (
    <thead className='tableHeader'>
      <tr>
        <th></th>

        <th scope='col'>
          <button onClick={() => props.sortBy('id')}>Id</button>
        </th>
        <th>Image</th>
        <th scope='col'>
          <button onClick={() => props.sortByRole('role')}>Role</button>
        </th>
        <th scope='col'>
          <button>Name</button>
        </th>
        <th>Email</th>
        <th>Village</th>
      </tr>
    </thead>
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
