import React from 'react';

import { Link } from 'react-router-dom';
import Comment from '../../img/comment.png';
import Home from '../../img/home.png';

const NavIcons = () => {
  return (
    <div className='navIcons'>
      <Link to='/'>
        <img src={Home} alt='' />
      </Link>
      <Link to='../chat' style={{ marginTop: 6, marginLeft: 10 }}>
        <img src={Comment} alt='' />
      </Link>
    </div>
  );
};

export default NavIcons;
