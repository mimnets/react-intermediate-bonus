import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
function App() {
  const [likeColor, setLikeColor] = useState(''); 
  const handlLike = () => {
    const color = likeColor ? '' : 'primary';
    setLikeColor(color);
  }
  return (
    <div className="App">
      <ThumbUpAltIcon onClick={handlLike} color={likeColor}></ThumbUpAltIcon>
    </div>
  );
}

export default App;
