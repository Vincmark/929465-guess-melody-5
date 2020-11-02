import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import questions from "./mocks/questions";
import settings from "./mocks/settings";

ReactDOM.render(
    <App
      maxErrorsCount={settings.ERRORS_COUNT}
      question={questions}
    />,
    document.getElementById(`root`)
);
