import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
function App() {
  const [likeColor, setLikeColor] = useState(''); 
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  const [randomUser, setRandomUser] = useState({});
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))

    // singleUser
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(data => setSingleUser(data))

    // randomUser
    fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(data => setRandomUser(data.results[0]))
  },[])
  const handlLike = () => {
    const color = likeColor ? '' : 'primary';
    setLikeColor(color);
  }
  return (
    <div className="App">
      <ThumbUpAltIcon onClick={handlLike} color={likeColor}></ThumbUpAltIcon>
      <h2>Random Gender: {randomUser.gender}</h2>
      <h2>Random First Name : {randomUser.name && randomUser.name.first}</h2> {/* A methode for replaing the undefined value */}
      <h2>Random Last Name : {randomUser.name?.last}</h2> {/* Another methode for replaing the undefined value */}

      
      <h1>{singleUser.name}</h1>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  );
}

export default App;

