import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  ERRORS_COUNT: 3
};

ReactDOM.render(
    <App
      maxErrorsCount={Settings.ERRORS_COUNT}
    />,
    document.getElementById(`root`)
);
