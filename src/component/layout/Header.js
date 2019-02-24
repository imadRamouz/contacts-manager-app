import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 ">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link"><i className="fas fa-home-alt  mr-1"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link"><i className="fas fa-plus-circle mr-1"></i>Add</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link"> <i className="fas fa-question-circle mr-1"></i> About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  branding: 'My React App'
}

Header.propTypes = {
  branding: PropTypes.string.isRequired
}

export default Header;