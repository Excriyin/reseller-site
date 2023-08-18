import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../assets/404error.png';
class NotFoundPage extends React.Component{
    render(){
        return <div>
          <div className="image-container">
            <img src={PageNotFound} 
            />
             </div>
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>;
    }
}
export default NotFoundPage;