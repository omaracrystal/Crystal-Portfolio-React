import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        <IndexLink to="/">CRYSTAL OMARA</IndexLink>

        <Link to="/about">about</Link>

          {this.props.children}

        <Link to="/work">work</Link>

      </div>


    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
