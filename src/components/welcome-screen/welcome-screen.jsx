import React from 'react';
import PropTypes from 'prop-types';

const getCountString = (number, txt) => {
  let cases = [2, 0, 1, 1, 1, 2];
  return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};

const WelcomeScreen = (props) => {
  const {maxErrorsCount, onPlayButtonClick} = props;
  let maxErrorsCountString = getCountString(props.maxErrorsCount, [`ошибку`, `ошибки`, `ошибок`]);
  return (
    <section className="welcome">
      <div className="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
      <button className="welcome__button" onClick={onPlayButtonClick}><span className="visually-hidden">Начать игру</span></button>


      <h2 className="welcome__rules-title">Правила игры</h2>
      <p className="welcome__text">Правила просты:</p>
      <ul className="welcome__rules-list">
        <li>Нужно ответить на все вопросы.</li>
        <li>Можно допустить {maxErrorsCount} {maxErrorsCountString}.</li>
      </ul>
      <p className="welcome__text">Удачи!</p>
    </section>
  );
};

WelcomeScreen.propTypes = {
  maxErrorsCount: PropTypes.number.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default WelcomeScreen;
