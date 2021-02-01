import React, {Component } from 'react';
import { DatePicker, Space,Button,Form, Input, InputNumber,Select   } from 'antd';
import './FlightList.css';
const { Option } = Select;

const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

class BookTicket extends Component{
    constructor(props){
        super(props);
        this.state={
            tripway : false,
            price: props.data.AvgPrice,
        }
    }
    oneWayButtonHandler=() =>{
        this.setState({
            tripway: false
        })
    }
    roundTripButtonHandler=() =>{
        this.setState({
            tripway: true
        })
    }
    priceHandler =(value)=>{
        console.log(value);
        if(value ==='Economy'){
            this.setState({price: this.state.price })
        }else if(value ==='Premium Economy'){
            this.setState({price: this.state.price + 2000 })
         }else if(value =='Business'){
            this.setState({price: this.state.price + 5000 })
    }else {
        this.setState({price: this.state.price + 10000 })
    }
    }



    render(){
        let oneWayTypeStyle = this.state.tripway ? 'dashed' : 'primary';
        let roundTripTypeStyle = this.state.tripway ? 'primary' : 'dashed';

        return(
            <div>
                <div>
                <Button type={oneWayTypeStyle} onClick={this.oneWayButtonHandler} >One Way</Button>
                <Button type={roundTripTypeStyle} onClick={this.roundTripButtonHandler}>Round Trip</Button>
                </div>

                <Form name="nest-messages" onFinish={this.props.okclicked} validateMessages={validateMessages}>
                <Form.Item className="source"
                     name={['user', 'source']}
                     label="Source"
                    >
                         {this.props.data.From}
                    </Form.Item>
                    <Form.Item
                     name={['user', 'destination']}
                     label="Destination"
                    >
                         {this.props.data.To}
                    </Form.Item>
                   <Form.Item
                     name={['user', 'name']}
                     label="Name"
                     rules={[
                         {
                        required: true,
                         },
                         ]}
                    >
                         <Input />
                    </Form.Item>
                    <Form.Item
                    name={['user', 'email']}
                    label="Email"
                    rules={[
                        {
                        type: 'email',
                        required: true,
                        },
                    ]}
                    >
                    <Input />
                    </Form.Item>
                    <Form.Item
                    name={['user', 'age']}
                    label="Age"
                    rules={[
                        {
                        type: 'number',
                        min: 0,
                        max: 99,
                        required: true,
                        },
                    ]}
                    >
                    <InputNumber />
                    </Form.Item>
                    <Form.Item 
                        name={['user','departure']}
                        label="Departure"
                        rules={[
                            {
                                type: 'object',
                                required: true,
                            },
                        ]}
                        >
                            <DatePicker />
                        </Form.Item>

                    {
                        this.state.tripway ? <Form.Item 
                        name={['user','departure']}
                        label="Return"
                        rules={[
                            {
                                type: 'object',
                                required: true,
                            },
                        ]}
                        >
                            <DatePicker />
                        </Form.Item>: null
                    }
                    <Form.Item
                        name={['user', 'travelclass']}
                        label="Travel Class"
                        rules={[
                        {
                          required: true,
                        },
                         ]}
                    >
                        <Select onSelect={this.priceHandler}>
                            <Option value='Economy'>Economy</Option>
                            <Option value='Premium Economy'>Premium Economy</Option>
                            <Option value='Business'>Business</Option>
                            <Option value='First'>First</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item 
                        name={['user', 'price']}
                        label="Price"
                        rules={[
                            {
                            type: 'number'
                            },
                        ]}
                    >
                        {"Rs "+this.state.price}
                    </Form.Item>
                    <Form.Item className='Book-submit' >
                        <Button className='cancel-button' onClick={this.props.cancelclicked}>Cancel</Button>
                    <Button type="primary" htmlType="submit">
                        Confirm Booking
                    </Button>
                    </Form.Item>
              </Form>
            </div>
        );
    }
}

export default BookTicket