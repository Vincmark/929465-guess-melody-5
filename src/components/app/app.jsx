import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen';

const App = (props) => {
  const {maxErrorsCount} = props;
  return <React.Fragment>
    <WelcomeScreen maxErrorsCount={maxErrorsCount}/>
  </React.Fragment>;
};

App.propTypes = {
  maxErrorsCount: PropTypes.number.isRequired
};

export default App;

