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

  return (
    <div>
      {listOfUser.map((item) => <><h1>{item.name}</h1> <h5>{item.username}</h5> <hr />
      </>)}
    </div>
  );
}

export default UserList;
