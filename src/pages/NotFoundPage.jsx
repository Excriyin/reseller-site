import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../assets/404error.png';
class NotFoundPage extends React.Component{
    render(){
        return <div>
            <img src={PageNotFound} 
            style="visibility:visible;height:100%;left:0;position:absolute;top:0;width:100%" />
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>;
    }
}
export default NotFoundPage;