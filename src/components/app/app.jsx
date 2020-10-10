import React from "react";
import PropTypes from 'prop-types';

import WelcomeScreen from "../welcome-screen/welcome-screen";

const App = (props) => {
  const {errorCount} = props;
  return <React.Fragment>
    <WelcomeScreen errorCount={errorCount}/>
  </React.Fragment>;
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired
};

export default App;

