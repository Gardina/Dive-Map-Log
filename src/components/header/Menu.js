import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
<Link to="/diveSites">Divesites</Link> <Link to="/createDivesite">Create Dive Site</Link>
    </div>
  );
};

export default Menu;
