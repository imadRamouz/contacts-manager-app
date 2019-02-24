import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Consumer } from '../../context';


class Contact extends Component {
  constructor() {
    super();
    this.state = {
      showContactInfo: false
    }
  }
  showOnClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    })
  }

  deleteClickHandler = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  }
  render() {
    const { name, email, phone, id } = this.props.contact;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>{name}{' '}
                <i style={{ cursor: 'pointer' }} onClick={this.showOnClick} className="fas fa-sort-down"></i>
                <i style={{ cursor: 'pointer', color: 'red', float: 'right' }} onClick={() => this.deleteClickHandler(id, dispatch)} className="fas fa-trash"></i>
                <Link to={`contact/edit/${id}`}>
                  <i style={{ cursor: 'pointer', marginRight: '20px', float: 'right' }} className="fas fa-pencil-alt"></i>
                </Link>
              </h4>
              {this.state.showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email} </li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          )
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

Contact.defaultProps = {
  contact: {
    name: 'Imad',
    email: 'imadramo@gmail.com',
    phone: '1155554445'
  }
}

export default Contact;