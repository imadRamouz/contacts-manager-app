import React, { Component } from 'react'
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phone: '',
      errors: {}
    }
  }

  onChangeInput = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmitForm = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    if (name === '') {
      this.setState({
        errors: { name: 'Name is required!' }
      });
      return;
    }

    if (email === '') {
      this.setState({
        errors: { email: 'Email is required!' }
      });
      return;
    }

    if (phone === '') {
      this.setState({
        errors: { phone: 'Phone is required!' }
      });
      return;
    }
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', { name, email, phone });

    dispatch({
      type: 'ADD_CONTACT',
      payload: res.data
    });

    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  }

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">
                <h1 className="display-4">Add Contact</h1>
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmitForm.bind(this, dispatch)} >
                  <TextInputGroup
                    label="Name"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={this.onChangeInput}
                    error={errors.name} />

                  <TextInputGroup
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={this.onChangeInput}
                    error={errors.email} />

                  <TextInputGroup
                    label="Phone"
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={this.onChangeInput}
                    error={errors.phone} />

                  <input type="submit" className="btn btn-primary btn-block" value="Add Contact" />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact;