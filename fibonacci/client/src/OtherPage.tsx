import React from 'react';
import { Link } from 'react-router-dom';

const OtherPage = () => {
  return <div>
    <p>I am on some other page</p>
    <Link to='/'>Go back home</Link>
  </div>
}

export default OtherPage;
