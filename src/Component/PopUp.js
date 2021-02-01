import React, {Component } from 'react';
import { Modal,Button  } from 'antd';
import './FlightList.css';
import BookTicket from './BookTicket';

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

class PopUp extends Component {

  state = {
    loading: false,
    visible: false,
    checkBook: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (event) => {
    event.user.source= this.props.data.From;
    event.user.destination= this.props.data.To;
    const value= event.user.travelclass;
    if(value ==='Economy'){
        event.user.price = this.props.data.AvgPrice;
    }else if(value ==='Premium Economy'){
        event.user.price = this.props.data.AvgPrice + 2000;
     }else if(value =='Business'){
        event.user.price = this.props.data.AvgPrice + 5000;
   }else {
    event.user.price = this.props.data.AvgPrice + 1000;
   }
    console.log(event.user)

    this.setState({ loading: true,checkBook: true });

    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 1000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };




  render() {
    const { visible, loading } = this.state;
    const bookButton = this.state.checkBook ? 'Booked' : 'Book'

    return (
      <>
        <Button className="Book-class" type="primary" onClick={this.showModal}>
          {bookButton}
        </Button>
        <Modal
          visible={visible}
          title={"Book Your Journey in "+ this.props.data.name}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >

          <BookTicket data={this.props.data} okclicked={this.handleOk} cancelclicked={this.handleCancel}/>
        </Modal>
      </>
    );
  }
}
export default PopUp