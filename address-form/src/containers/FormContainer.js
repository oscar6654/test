import React, { Component } from 'react'
import NameField from '../components/NameField';
import LastNField from '../components/LastNField';
import Address from '../components/Address';
import City from '../components/City';
import States from '../components/States';
import ZipCode from '../components/ZipCode';
import Number from '../components/Number';
import Email from '../components/Email'
class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state={
      name: "",
      last: "",
      address: "",
      city: "",
      states: "",
      zip: "",
      number: "",
      email: ""
    }
  this.NameonChange = this.NameonChange.bind(this)
  this.LastonChange = this.LastonChange.bind(this)
  this.AddressonChange = this.AddressonChange.bind(this)
  this.CityonChange = this.CityonChange.bind(this)
  this.StatesonChange = this.StatesonChange.bind(this)
  this.ZiponChange = this.ZiponChange.bind(this)
  this.NumberonChange = this.NumberonChange.bind(this)
  this.EmailonChange = this.EmailonChange.bind(this)
  }

  NameonChange(event){
    this.setState({name: event.target.value})
  }
  LastonChange(event){
    this.setState({last: event.target.value})
  }
  AddressonChange(event){
    this.setState({address: event.target.value})
  }
  CityonChange(event){
    this.setState({city: event.target.value})
  }
  StatesonChange(event){
    this.setState({states: event.target.value})
  }
  ZiponChange(event){
    this.setState({zip: event.target.value})
  }
  NumberonChange(event){
    this.setState({number: event.target.value})
  }
  EmailonChange(event){
    this.setState({email: event.target.value})
  }
  render() {
    return (
      <form className="callout" id="shipping-address-form">
        <h1>Shipping Address</h1>
        <NameField
        name="firstname"
        label="First Name:"
        content={this.name}
        NameonChange={this.NameonChange}
        />
        <LastNField
        name="lastname"
        label="Last Name:"
        content={this.last}
        LastNameonChange={this.LastonChange}
        />
        <Address
        name="address"
        label="Address:"
        content={this.address}
        AddressonChange={this.AddressonChange}
        />
        <City
        name="city"
        label="City:"
        content={this.city}
        CityonChange={this.CityonChange}
        />
        <States
        name="state"
        label="State:"
        content={this.states}
        StatesonChange={this.StatesonChange}
        />
        <ZipCode
        name="zip"
        label="Zip Code:"
        content={this.zip}
        ZiponChange={this.ZiponChange}
        />
        <Number
        name="number"
        label="Number:"
        content={this.number}
        NumberonChange={this.NumberonChange}
        />
        <Email
        name="email"
        label="Email:"
        content={this.email}
        EmailonChange={this.EmailonChange}
        />
        <input type="submit" className="button" value="Submit "/>
      </form>
    )
  }
}

export default FormContainer
