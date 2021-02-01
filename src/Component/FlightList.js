import React,{ Component } from 'react';
import DisplayFlight from './DisplayFlight';
import './FlightList.css';
import FlightListData from './FlighListData';
import { Link } from 'react-router-dom';

class FlightList extends Component{
    state={
        data: FlightListData.dataset
    }
    bookHandler =()=>{
        console.log('Flight selected!')
    }

    render(){
        const flightrender = this.state.data.map((flight,index)=>{
            return <DisplayFlight data={flight} key ={index} clicked={this.bookHandler}/>
        })

    return(
        <div>
            <h1>Explore The World</h1>
            <button><Link to="/Search">Search Flight</Link></button>
        <div className="a">
        {flightrender}
        </div>
        </div>
    );
}

}

export default FlightList