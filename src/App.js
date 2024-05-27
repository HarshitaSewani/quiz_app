import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Quiz from './components/Quiz';
import Results from './components/Results';

const App = () => {
  return (
    <div>
      <h1>Quiz App</h1>
      <Quiz />
      <Results />
    </div>
  );
};

export default App;
