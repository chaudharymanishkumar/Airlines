import React from 'react';
import { SwapOutlined } from '@ant-design/icons'
import './FlightList.css';
import PopUp from './PopUp';


const DisplayFlight = (props)=>{
    return(
    <div className="Flight" onClick={props.clicked}>
            <table className="b">
                <tr>
                    <th></th>
                    <th className="name">{props.data.name}</th>
                    <th></th>
                </tr>
                <tr>
                    <td>{props.data.From}</td>
                    <td><SwapOutlined /></td>
                    <td>{props.data.To}</td>
                </tr>
                <tr>
                    <td></td>
                    <td >Price:</td>
                    <td>Rs {props.data.AvgPrice}</td>
                    
                </tr>
                <tr>
                    <td><PopUp data={props.data} /></td>
                    
                </tr>
            </table>
        </div>
        
    );

}

export default DisplayFlight