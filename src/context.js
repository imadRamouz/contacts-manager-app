import React, { Component } from 'react'
import axios from 'axios';
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === action.payload.id) {
            contact = action.payload;
            return contact;
          }
          return contact;
        })
      }
    default:
      return state;
  }
}

class Provider extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
      dispatch: action => this.setState(state => reducer(state, action))
    }
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => this.setState({
        contacts: res.data
      }))
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Provider;
export const Consumer = Context.Consumer;