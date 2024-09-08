import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TopPage } from '../pages/TopPage';
import { InputPage } from '../pages/InputPage';
import { ConfirmPage } from '../pages/ConfirmPage';
import { Login } from '../pages/Login';
import { TODO, INPUT, CONFIRM, LOGIN } from '../const/RoutingPath';

// src/index.tsxで呼び出している。
export const Routing: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={LOGIN} element={<Login />} />
        <Route path={TODO} element={<TopPage />} />
        <Route path={INPUT} element={<InputPage />} />
        <Route path={CONFIRM} element={<ConfirmPage />} />
      </Routes>
    </Router>
  );
};
