import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUser(response.data);
      
    };

    fetchData(); 
  }, []);
  console.log(listOfUser)
  return (
    <div>
      {
         <table>
          <tr>
            <th>Name</th>
            <th>username</th>
            <th>company</th>
            <th>phone</th>
          </tr>
          {listOfUser.map((el,index)=><tr key = {index}>
            <td>{`${el.name}`}</td>
            <td>{el.username}</td>
            <td>{el.company.name}</td>
            <td>{el.phone}</td>
          </tr>)}
         </table>
      }
      
    </div>
  );
}

export default UserList;
