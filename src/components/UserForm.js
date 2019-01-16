import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

export class UserForm extends Component {
    // store all forms data here
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        city:"",
        phone:"",
        country:""
    }

    // now go to next form state
    nextStep = ()=>{
        //destructuring step from state object
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }
    // now go back to previous form state
    prevStep = ()=>{
        const { step } = this.state;
        this.setState({
            step: step -1
        })
    }
    // handle input changes
    handleChange = input => e =>{
        this.setState({
            [input]: e.target.value
        })
    }


  render() {
      const {step} = this.state;
      const {firstName,lastName,email,password,phone,city,country} = this.state;
      const values = {firstName,lastName,email,password,phone,city,country};
   
      switch(step){
        case 1: 
            return (
                <FormUserDetails
                nextStep = {this.nextStep}
                handleChange = {this.handleChange}
                values = {values}
                />
            )
        case 2:
            return (
                <FormPersonalDetails
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleChange = {this.handleChange}
                values = {values}
                />
            )
        case 3:
            return (
                <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
            )
        case 4:
            return (
                <Success />
            )
        default:

          

      }
  }
}

export default UserForm
