import {  Select } from 'antd';
import React,{ Component } from 'react';
import FlightListData from './FlighListData';
import DisplayFlight from './DisplayFlight';

const { Option } = Select;

class Search extends Component  {
    state= {
        data: FlightListData.dataset,
        arrival: '',
        dest: '',
        checkArrival: false,
        checkDest: false
    }

    fromHandler=(event) =>{  
        this.setState({
            arrival : event,
            checkArrival: true
        })

    }

    toHandler=(event) =>{  
        this.setState({
            dest : event,
            checkDest: true
        })

    }
    render(){
    const style={
        marginTop : '50px'
    }
    let flight=null;
    let flightDisplay= [];
    if(this.state.checkArrival && this.state.checkDest){
        flight = this.state.data.filter((f)=>{
            return f.From === this.state.arrival  && f.To === this.state.dest;
        })
        console.log(flight);
        flightDisplay=flight.map((f,index)=>{
            return <DisplayFlight data={f} key ={index}/>
        })

    }

    return(<div>
        <h1>Search Flight</h1>
    <div style={style}>
      <Select onSelect={this.fromHandler} style={{ width: '30%' }} defaultValue="From">
          <Option value="Delhi">Delhi</Option>
          <Option value="Bangalore">Bangalore</Option>
          <Option value="Mumbai">Mumbai</Option>
          <Option value="Kochi">Kochi</Option>
          <Option value="Patna">Patna</Option>
          <Option value="Chennai">Chennai</Option>
          <Option value="Hydrabad">Hydrabad</Option>
      </Select>
      <Select onSelect={this.toHandler} style={{ width: '30%' }} defaultValue="To">
          <Option value="Delhi">Delhi</Option>
          <Option value="Bangalore">Bangalore</Option>
          <Option value="Mumbai">Mumbai</Option>
          <Option value="Kochi">Kochi</Option>
          <Option value="Patna">Patna</Option>
          <Option value="Chennai">Chennai</Option>
          <Option value="Hydrabad">Hydrabad</Option>
      </Select>
      </div>
      {flightDisplay}
      </div>
    );
}
}
export default Search