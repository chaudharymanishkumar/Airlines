import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


const Home =()=>{
    const style={
        marginTop: '50px'
    }
    return(
        <div className="Homebox">
            <h2>TCS Airlines</h2>
            <button style={style} ><Link to="/Search">Search Flight</Link></button>
            <div >
            <button className="a"><Link to="/Login">Login</Link></button>
            <button className="b"><Link to="/Register">Register</Link></button>
            </div>

        </div>
    );
}
export default Home