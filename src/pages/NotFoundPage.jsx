import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../assets/404error.png';
class NotFoundPage extends React.Component {
  render() {
    return (
      <div className='h-[calc(100vh-195px)] flex flex-col align-center justify-center'>
        <div className='image-container'>
          <img src={PageNotFound} className="m-auto" />
        </div>
        <p style={{ textAlign: 'center' }}>
          <Link to='/'>Go to Home </Link>
        </p>
      </div>
    );
  }
}
export default NotFoundPage;
