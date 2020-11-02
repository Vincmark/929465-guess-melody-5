import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import SignInScreen from '../signin-screen/signin-screen';
import GameOverScreen from '../game-over-screen/game-over-screen';
import ResultScreen from '../result-screen/result-screen';
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import GameScreen from "../game-screen/game-screen";

const App = (props) => {
  const {maxErrorsCount, questions} = props;
  const {firstQuestion, secondQuestion} = questions;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact
          render={({history}) => (
            <WelcomeScreen
              maxErrorsCount={maxErrorsCount}
              onPlayButtonClick={history.push(`/game`)}
            />
          )}
        />
        <Route path="/login" exact>
          <SignInScreen/>
        </Route>
        <Route path="/result" exact>
          <ResultScreen/>
        </Route>
        <Route path="/lose" exact>
          <GameOverScreen/>
        </Route>
        <Route path="/dev-artist" exact>
          <ArtistQuestionScreen
            question={firstQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route path="/dev-genre" exact>
          <GenreQuestionScreen
            question={secondQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route path="/game" exact>
          <GameScreen
            questions={questions}
            maxErrorsCount={maxErrorsCount}
          />
        </Route>
        <Route
          render={() => (
            <React.Fragment>
              <h1>
                404.
                <br />
                <small>Страница не найдена</small>
              </h1>
              <Link to="/">На главную</Link>
            </React.Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  maxErrorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;

