import React from 'react';

export default function TableHeader() {
  return (
    <thead className='tableHeader'>
      <tr>
        <th></th>
        <th>Id</th>
        <th>Image</th>
        <th>Role</th>
        <th>Name</th>
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
